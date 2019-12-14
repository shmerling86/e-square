import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'item-data',
  templateUrl: './item-data.component.html',
  styleUrls: ['./item-data.component.scss']
})
export class ItemDataComponent implements OnInit {

  @Input() moreInfo: object;

  constructor() { }

  ngOnInit() {
  }

}
