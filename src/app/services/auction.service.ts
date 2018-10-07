import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Item} from '../models/Item';
import { Response } from '@angular/http';

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

    return this.http.post(this.url + '/auctionItems', payload);
  }

  // GET auction items
  getAuctionItems() {
    return this.http.get(this.url + '/auctionItems');
  }

  getAuctionItemById(id: any) {
    return this.http.get(this.url + '/auctionItems/' + id);
  }

  bid(auctionItemId: number, maxAutoBidAmount: number, bidderName: string) {
    const payload = {
      auctionItemId,
      maxAutoBidAmount,
      bidderName
    };
    return this.http.post(this.url + '/bids', payload);
  }

  ping() {
    return this.http.get(this.url + '/ping');
  }


  login(userId: number) {
    return this.http.get(this.url + '/user/' + userId);
  }
}
