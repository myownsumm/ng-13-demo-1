import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ReposStateService } from '../../services/repos-state.service';
import { ReposListComponent } from './repos-list.component';

const MOCKED_REPOS_LIST = [
  {full_name: 'test'}
];

const ReposStateServiceMock = jasmine.createSpyObj('ReposStateServiceMock', [
  'getReposList$',
]);

const RouterMock = jasmine.createSpyObj('RouterMock', [
  'navigate',
]);

const ActivatedRouteMock = {};

describe('ReposListComponent', () => {
  let fixture: ComponentFixture<ReposListComponent>;
  let component: ReposListComponent;

  let reposStateService: ReposStateService;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReposListComponent],
      imports: [],
      providers: [
        {provide: ReposStateService, useValue: ReposStateServiceMock},
        {provide: Router, useValue: RouterMock},
        {provide: ActivatedRoute, useValue: ActivatedRouteMock},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ReposListComponent);
    component = fixture.debugElement.componentInstance;

    reposStateService = TestBed.inject(ReposStateService);
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
  }));

  afterEach(() => {
    fixture.destroy();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should bind repos$ property during init', async () => {
    component.ngOnInit();

    await expect(lastValueFrom(component.repos$)).resolves.toEqual(
      MOCKED_REPOS_LIST
    );

    // can be done with subscribe
  });

  it('should call for goToOwner', () => {
    component.goToOwner(123);

    expect(router.navigate).toHaveBeenCalledWith(['owners', 123], {relativeTo: activatedRoute});
  });
});
