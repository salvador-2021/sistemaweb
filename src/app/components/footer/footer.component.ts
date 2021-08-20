import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() mostrarT_C: boolean;
  constructor() {
    this.mostrarT_C==true;
   }

  ngOnInit(): void {
  }

}
