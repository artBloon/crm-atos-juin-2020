import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from 'src/app/shared/models/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private pCollection: Observable<Client[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(this.urlApi + 'clients');
  }

  // get collection
  get collection(): Observable<Client[]>{
    return this.pCollection;
  }

  // set collection
  set collection(col: Observable<Client[]>){
    this.pCollection = col;
  }
  // changer un State
  public changeState(item: Client, state: StateClient): Observable<Client>{
    //item.state = state;
    const obj = {...item};
    obj.state = state;
    return this.update(obj);
  }

  // update item in collection
  public update(item: Client): Observable<Client>{
    return this.http.put<Client>(this.urlApi + 'clients/' + item.id, item);
  }

  // add item in collection

  // delete item in collection

  // get item by id from collection
}
