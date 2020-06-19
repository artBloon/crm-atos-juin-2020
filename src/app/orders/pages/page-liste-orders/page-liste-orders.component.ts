import { Component, OnInit} from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-liste-orders',
  templateUrl: './page-liste-orders.component.html',
  styleUrls: ['./page-liste-orders.component.scss']
})
export class PageListeOrdersComponent implements OnInit {
  //public collection: Order[];
  public collection$: Observable<Order[]>;
  public headers: string[];
  constructor(
    private os: OrdersService,
    private router: Router
    ) { }
  public states = Object.values(StateOrder);
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

  public popup(){
    console.log("popup");
  }

  public edit(item: Order){
    this.router.navigate(['orders','edit',item.id]);
    //console.log("edit");

  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }

  public changeState(item: Order, e){
    this.os.changeState(item, e.target.value).subscribe((res) => {
      // traiter res api
      item.state = res.state;

    });
  }

}
