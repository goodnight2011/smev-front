import {Component, Input, OnInit} from '@angular/core';

interface CodeWithValue{
  code: string;
  value: string;
}

@Component({
  selector: 'app-chips-line',
  templateUrl: './chips-line.component.html',
  styleUrls: ['./chips-line.component.css']
})
export class ChipsLineComponent implements OnInit {

  @Input() values: CodeWithValue[];

  constructor() { }

  ngOnInit() {
  }

  remove(value: CodeWithValue):void{
    const index = this.values.indexOf(value);

    if (index >= 0) {
      this.values.splice(index, 1);
    }
  }

  clear():void{
    this.values = [];
  }
}
