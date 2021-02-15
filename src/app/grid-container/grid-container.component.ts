import {Component, OnInit} from '@angular/core';
import {Data} from '../interfaces/data';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.css']
})
export class GridContainerComponent implements OnInit {


  items: Data[] = [
    {id: 1, name: 'Hello'},
    {id: 2, name: 'Hello'},
    {id: 3, name: 'Hello'},
    {id: 4, name: 'Hello'},
    {id: 5, name: 'Hello'}
  ];

  public pageSlice = this.items.slice(0, 4);

  constructor() {
  }

  ngOnInit(): void {
  }


  OnPageChange($event: PageEvent): void {
    const startIndex = $event.pageIndex * $event.pageSize;
    let endIndex = startIndex + $event.pageSize;
    if (endIndex > this.items.length) {
      endIndex = this.items.length;
    }
    this.pageSlice = this.items.slice(startIndex, endIndex);
  }

}
