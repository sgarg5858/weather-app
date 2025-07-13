import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { finalize, Observable } from 'rxjs';
import { SharedActions } from '../../../state/actions';

export const httpProgressInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const store = inject(Store);
  let counter = 0;

  counter++;
  store.dispatch(SharedActions.showLoadingProgress({ loading: true }));

  return next(req).pipe(
    finalize(() => {
      counter--;
      if (counter === 0) {
        store.dispatch(SharedActions.showLoadingProgress({ loading: false }));
      }
    })
  );
};
