import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: '[app-my-c]',
  templateUrl: './my-c.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./my-c.component.scss']
})
export class MyCComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
