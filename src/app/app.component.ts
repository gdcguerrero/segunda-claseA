import { Component, OnInit } from '@angular/core';
import { RequestsService } from './services/requests/requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  name: string = "";
  order: string = "";

  constructor(public requestsService: RequestsService) {}

  ngOnInit(): void {
    this.button();
  }

  button() {
    let btn = document.getElementById('btn');
    let pokemon : HTMLInputElement = <HTMLInputElement> document.getElementById('pokemon');
    btn?.addEventListener('click', () => {
      this.requestsService.getPokemon(pokemon.value).subscribe({
        next: (resp : any) => {
          this.name = resp.name,
          this.order = resp.order
        }
      })
    });
  }
}
