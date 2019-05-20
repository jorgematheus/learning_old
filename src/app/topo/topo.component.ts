import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {  

  constructor() { }

  ngOnInit() {
  }


  public toggleMenuMobile(): void {
    
    let visible = $('.sidebar').hasClass('visible')

    if(visible) {
      $('.sidebar').removeClass('visible')

    } else {
      $('.sidebar').addClass('visible')
    }
  }

}

