import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectShowProgressBar } from './state/selectors/shared.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weather-app';
  store = inject(Store);
  showProgressBar$: Observable<boolean> | undefined;

  ngOnInit() {
    this.observeOnData();
  }

  observeOnData()
  {
    this.showProgressBar$ = this.store.select(selectShowProgressBar)
  }
}
