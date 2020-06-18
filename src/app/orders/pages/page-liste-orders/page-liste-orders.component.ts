import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-liste-orders',
  templateUrl: './page-liste-orders.component.html',
  styleUrls: ['./page-liste-orders.component.scss']
})
export class PageListeOrdersComponent implements OnInit {
  //public collection: Order[];
  public collection$: Observable<Order[]>;
  public headers: string[];
  constructor(private os: OrdersService) { }
  //private sub: Subscription;

  ngOnInit(): void {
    this.collection$ = this.os.collection;
    /* this.sub = this.os.collection.subscribe(
      (col) => {
        this.collection = col;
      }
    ); */
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


  ngOnDestroy() {
    //this.sub.unsubscribe();
  }

}
