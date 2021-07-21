import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-lateral-admin',
  templateUrl: './lateral-admin.component.html',
  styleUrls: ['./lateral-admin.component.css']
})
export class LateralAdminComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
