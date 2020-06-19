import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-liste-clients',
  templateUrl: './page-liste-clients.component.html',
  styleUrls: ['./page-liste-clients.component.scss']
})
export class PageListeClientsComponent implements OnInit {
  public collection$: Observable<Client[]>;
  public headers: string[];
  constructor(private cs: ClientsService) { }
  public states = Object.values(StateClient);

  ngOnInit(): void {
    this.collection$ = this.cs.collection;

    this.headers = [
      'Name',
      'CA HT',
      'TVA',
      'CA TTC',
      'State'
    ];
  }

  public popup(){
    console.log("popup");
  }

  public changeState(item: Client, e){
    this.cs.changeState(item, e.target.value).subscribe((res) => {
      // traiter res api
      item.state = res.state;

    });
  }

}
