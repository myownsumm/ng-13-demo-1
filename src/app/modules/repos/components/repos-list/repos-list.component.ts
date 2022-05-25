import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Repo } from '../../repos.typings';
import { ReposStateService } from '../../services/repos-state.service';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss'],
})
export class ReposListComponent implements OnInit {
  public repos$: Observable<Repo[]> = of([]);

  constructor(private readonly reposStateService: ReposStateService,
              private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.repos$ = this.reposStateService.getReposList$();
  }

  public goToOwner(ownerId: number | undefined): Promise<boolean> {
    return this.router.navigate(['owners', ownerId], {relativeTo: this.activatedRoute});
  }
}
