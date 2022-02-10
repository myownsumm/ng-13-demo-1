import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-owners',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OwnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
