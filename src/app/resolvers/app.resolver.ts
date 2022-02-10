import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppResolver implements Resolve<null>  {
  constructor() {}

  resolve() {
    return null;
  }
}
