import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offre-details',
  templateUrl: './offre-details.component.html',
  styleUrls: ['./offre-details.component.css']
})
export class OffreDetailsComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
  myid : String;
  mynumber : Number;
  parametre :any;
  ngOnInit() {
    //console.log(this.route.snapshot.params["id"]);
    this.parametre = this.route.snapshot.params["id"];
  }

}
