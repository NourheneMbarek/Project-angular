import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  } from '@angular/animations';
@Component({
  selector: 'app-back-layout',
  templateUrl: './back-layout.component.html',
  styleUrls: ['./back-layout.component.css'],
  animations:[
    trigger('sidebaranimate' , [
      state('open', style({
        width: '200px' , 
        display : 'block',
        opacity : 1
        })),
      state('closed', style({
        width : '10px' ,
        display : 'none',
        opacity : 0
        })),
      transition('open => closed',[
          animate('2s')
      ]),
      transition('closed => open',[
        animate('1s')
    ])
    ])
    
  ]
})
export class BackLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isOpen = true;
  animate(){
    this.isOpen = !this.isOpen;
  }

}
