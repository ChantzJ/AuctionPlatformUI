import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableDataSource } from './table-datasource';
import {HomeService} from "../services/home.service";
import {AuctionItem} from "../models/AuctionItem";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [HomeService]
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  biddername: any;
  maxAutoBidAmount: number;
  status: any;

  displayedColumns = ['id', 'currentBid', 'itemId', 'description', 'reservePrice', "actionsBid", "actionsStatus"  ];
  constructor(private homeService: HomeService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._activatedRoute.params.subscribe(
      params =>  {
        this.biddername = params['bidderName'];
        this.maxAutoBidAmount = params['maxAutoBidAmount'];
        this.status = "No bid placed";
      });
  }

  ngOnInit() {

    this.homeService.getAuctionItems().subscribe(
      data => {
        this.dataSource = data;
        console.log(data);
      }
    )
  }

  startBidding(e) {
    this.homeService.bid(e.auctionItemId, this.maxAutoBidAmount, this.biddername).subscribe(
      data => {}
    );
  }
}
