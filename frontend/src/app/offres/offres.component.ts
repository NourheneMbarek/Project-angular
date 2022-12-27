import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from '../offre';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  constructor(private router : Router) { }
  offres : Offre[] = [
    new Offre("offre 1" ,
              "ceci est une description" ,
              450 , "asset/images/bg.jpg" ,
              new Date('02/21/2019') , new Date('03/05/2019') ,
              true),
    new Offre("offre 2" ,
              "ceci est une description" ,
              450 , "asset/images/bg.jpg" ,
              new Date('02/22/2019') , new Date('05/03/2019') ,
              true),
    new Offre("offre 3" ,
              "ceci est une description" ,
              450 , "asset/images/bg.jpg" ,
              new Date('02/21/2019') , new Date('05/03/2019') ,
              true),
  ];
  ngOnInit() {
  }

  btnDetail(){
    console.log("ok");
    this.router.navigate(['detail/3']);
  }

}
