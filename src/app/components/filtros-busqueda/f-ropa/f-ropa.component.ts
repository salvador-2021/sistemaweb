import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-f-ropa',
  templateUrl: './f-ropa.component.html',
  styleUrls: ['./f-ropa.component.css']
})
export class FRopaComponent implements OnInit {
  panelOpenState = false; //--mat-accordion
  
  constructor() { }

  ngOnInit(): void {
  }

}
