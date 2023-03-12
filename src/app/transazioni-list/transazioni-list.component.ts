import { Component } from '@angular/core';
import { TRANSAZIONI } from '../transazioni-dati';
import { Transazione } from '../trasazione';

@Component({
  selector: 'app-transazioni-list',
  templateUrl: './transazioni-list.component.html',
  styleUrls: ['./transazioni-list.component.css']
})
export class TransazioniListComponent {
  transazioni:Transazione[] = TRANSAZIONI 
}
