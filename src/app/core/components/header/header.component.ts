import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //public title = "Mon application";
  public title: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Mon Application Angular 8'
  }



}
