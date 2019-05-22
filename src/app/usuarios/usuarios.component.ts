import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  route: string;

  constructor(private location: Location, router: Router) {
    router.events.subscribe((val) => {
      this.route = this.location.path();
      console.log(this.route)
    })   

  }
 

  ngOnInit() {
   
  }



}
