import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-page-liste-orders',
  templateUrl: './page-liste-orders.component.html',
  styleUrls: ['./page-liste-orders.component.scss']
})
export class PageListeOrdersComponent implements OnInit {
  public collection: Order[];
  public headers: string[];
  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.os.collection.subscribe((col) => {
        this.collection = col;
    });
    this.headers = [
      'Type',
      'Client',
      'Nb Jours',
      'TJM HT',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }

}
