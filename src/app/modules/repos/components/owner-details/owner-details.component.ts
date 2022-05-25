import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, map, Observable, of, tap } from 'rxjs';
import { Owner } from '../../repos.typings';
import { ReposStateService } from '../../services/repos-state.service';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.scss'],
})
export class OwnerDetailsComponent implements OnInit {
  public owner$: Observable<Owner> = of(null);

  constructor(private readonly reposStateService: ReposStateService,
              private readonly route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map((paramMap) => paramMap.get('ownerId')),
        tap((ownerId) => {
          if (!ownerId) {
            return EMPTY;
          }

          this.owner$ = this.reposStateService.getOwner$(Number(ownerId));
        })
      )
      .subscribe();
  }
}
