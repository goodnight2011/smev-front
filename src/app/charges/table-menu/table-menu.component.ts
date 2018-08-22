import {Component, Input, OnInit} from '@angular/core';
import {DataHolder} from '../../common-utils/data-holder';
import {ChargePreview} from '../charge';
import {Router} from '@angular/router';

@Component({
  selector: 'app-table-menu',
  templateUrl: './table-menu.component.html',
  styleUrls: ['./table-menu.component.css']
})
export class TableMenuComponent implements OnInit, DataHolder<ChargePreview>{
  @Input() data: ChargePreview;
  @Input() params: any;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  redirectToEdit() {
    this.router.navigate(["/charges/edit/" + this.data.uin]);
  }
}
