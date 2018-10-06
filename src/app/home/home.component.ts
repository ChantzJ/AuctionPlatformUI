import { Component, OnInit } from '@angular/core';
import {HomeService} from "../services/home.service";
import {Item} from "../models/Item";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  myItem: Item = { itemId: 5, description: "test item 5"};

  reserve: any;


  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  getAllItems() {

    this.homeService.getAuctionItems().subscribe(
      data => {
        console.log(data);
      }
    )

  }

  getOneItem() {
    this.homeService.getAuctionItemById(1).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  insertOneItem(item: Item) {
    // this.myItem.itemId = 5;
    // this.myItem.description = "Test Item 5";

    this.homeService.insertAuctionItems(this.reserve, this.myItem).subscribe(
      data => {
        console.log(data);
      }
    )

  }

  ping() {
    this.homeService.ping().subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
