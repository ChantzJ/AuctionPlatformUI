import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Item} from '../models/Item';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HomeService {

  private url = 'http://localhost:1433';

  constructor(private http: HttpClient) {}

  // POST new auction items
  insertAuctionItems(reserve: number, item: Item) {

    const payload = {
      reserve,
      item
    };

    return this.http.post(this.url, payload);
  }

  // GET auction items
  getAuctionItems() {
    return this.http.get(this.url);
  }

  getAuctionItemById(id: any) {
    return this.http.get(this.url + '/' + id);
  }

  ping() {
    return this.http.get(this.url + '/ping');
  }
}
