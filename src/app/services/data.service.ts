import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  loading$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  startLoading(load: boolean) {
    this.loading$.next(load); //დააფდეითებს მდგომარეობას
  }

  getLoading() {
    return this.loading$.asObservable(); // behavior subject-ს  გარდაქმნის როგორც observable-ს და დააემითებს,
  }

  getData(ingr: string): Observable<any> {
    this.startLoading(true);
    // დავააფდეითოთ loading მდგომარეობა , http მოთხოვნის გაგზავნამდე ,რომ გამოვსახოთ loading მდგომარეობა

    const apiUrl = `https://api.edamam.com/api/food-database/v2/parser?app_id=9dd1aaac&app_key=f5bb15ff046cc31443b61bef4869ac17&nutrition-type=cooking&category=generic-foods&ingr=${
      ingr.charAt(0).toUpperCase() + ingr.substring(1)
    }`;
    console.log(apiUrl);

    return this.http.get(apiUrl).pipe(
      //http get მოთხოვნაზე ,რომელიც დაკვირვებად მონაცემებს აბრუნებს ვიყენებთ
      // pipe-ს, ის ერთმანეთთან  ჯაჭვურად აკავშირებს ოპერატორებს რომლებიც  დაკვირვებად მონაცემებს გარდაქმნიან
      // tap  არ ცვლის არაფერს.
      tap(() => {
        this.startLoading(false); // შევწყვიტოთ loading-ი
      })
    );
  }
}

// private apiKey = 'f5bb15ff046cc31443b61bef4869ac17';
// private appId = '9dd1aaac';
