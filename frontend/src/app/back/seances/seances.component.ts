import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.css']
})
export class SeancesComponent implements OnInit {

  moniteur : any;
  voiture : any;
  candidat : any;
  date_seance : any;
  heur_seance : any;
  constructor() { }

  ngOnInit() {
  }

}
