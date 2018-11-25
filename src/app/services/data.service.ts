import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: Http) {}

  getAll() {
    return this.http.get(this.url).pipe(
      map(res => res.json()),
      catchError(this.handleError)
    );
  }

  create(resource) {
    //   return throwError(new AppError());
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
        map(res => res.json()),
        catchError(this.handleError)
    );
  }
  
  update(resource) {
    return this.http.put(this.url + '/' +resource.id, JSON.stringify(resource)).pipe(
        map(res => res.json()),
        catchError(this.handleError)
    );
  }

  delete(resource) {
    // return throwError(new AppError());
    return this.http.delete(this.url + '/' + resource.id).pipe(
        map(res => res.json()),
        catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status === 400)
          return throwError(new BadInput(error.json()));
    if (error.status === 404) 
          return throwError(new NotFoundError());
    return throwError(new AppError);
  }
}
