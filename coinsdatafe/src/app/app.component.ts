import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {
}
profile = {};

getData() {
        return this.http.get('http://localhost:8090/findAllCoins')
       .subscribe(data => this.profile = data);
}

  title = 'CoinService';
}
