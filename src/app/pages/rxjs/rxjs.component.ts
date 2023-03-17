import { Component, OnDestroy } from '@angular/core';
import {
  Observable,
  retry,
  interval,
  take,
  map,
  filter,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnDestroy {
  public intervalSubscription!: Subscription;
  constructor() {
    /* this.returnObservable()
      .pipe(retry(2))
      .subscribe({
        next: (val) => {
          console.log(val);
        },
        complete: () => {
          console.log('Is done!');
        },
        error: (err) => {
          console.log(err);
        },
      }); */
    this.intervalSubscription = this.returnInterval().subscribe({
      next: (val) => {
        console.log(val);
      },
    });
  }
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

  returnInterval(): Observable<string> {
    return interval(1000).pipe(
      take(10),
      map((val) => {
        return val;
      }),
      filter((value: any) => (value % 2 === 0 ? true : false))
    );
  }

  returnObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>((observer) => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }
        if (i === 2) {
          observer.error('An error has ocurred');
        }
      }, 1000);
    });
  }
}
