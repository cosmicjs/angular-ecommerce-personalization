import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, shareReplay } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Product } from '../_model/product';
import { User } from '../_model/user';
import { Category } from '../_model/category';

/**
 * A service to get data from CosmicJS.
 */
@Injectable({
  providedIn: 'root'
})
export class CosmicService {
  constructor(private http: HttpClient) {}

  private commonPath = environment.URL + environment.bucket_slug;
  private addObjectPath = this.commonPath + '/add-object';
  private objectTypePath = this.commonPath + '/object-type';

  private singleObjectUrl = this.commonPath + '/object';
  private singleObjectByIdUrl = this.commonPath + '/object-by-id';

  private categoriesUrl = this.objectTypePath + '/categories';
  private usersUrl = this.objectTypePath + '/users';
  private productsUrl = this.objectTypePath + '/products';

  private categories$: Observable<Category[]>;
  private category$ = new Map<string, Observable<Category>>();
  private users$: Observable<User[]>;
  private products$: Observable<Product[]>;
  private product$ = new Map<string, Observable<Product>>();

  getCategories(): Observable<Category[]> {
    if (!this.categories$) {
      this.categories$ = this.http.get<Category[]>(this.categoriesUrl).pipe(
        tap(_ => console.log('fetched categories')),
        map(_ => {
          return _['objects'].map(element => new Category(element));
        }),
        shareReplay(1),
        catchError(this.handleError('getCategories', []))
      );
    }
    return this.categories$;
  }

  getCategory(id: string): Observable<Category> {
    if (!this.category$.get(id)) {
      const url = `${this.singleObjectByIdUrl}/${id}`;
      const response = this.http.get<Category>(url).pipe(
        tap(_ => console.log(`fetched category: ${id}`)),
        map(_ => {
          return new Category(_['object']);
        }),
        shareReplay(1),
        catchError(this.handleError<Category>(`getCategory: ${id}`))
      );
      this.category$.set(id, response);
    }
    return this.category$.get(id);
  }

  getUsers(): Observable<User[]> {
    if (!this.users$) {
      this.users$ = this.http.get<User[]>(this.usersUrl).pipe(
        tap(_ => console.log('fetched users')),
        map(_ => {
          return _['objects'].map(element => new User(element));
        }),
        shareReplay(1),
        catchError(this.handleError('getUsers', []))
      );
    }
    return this.users$;
  }

  getUser(id: string): Observable<User> {
    const url = `${this.singleObjectByIdUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`fetched user: ${id}`)),
      map(_ => {
        return new User(_['object']);
      }),
      catchError(this.handleError<User>(`getUser: ${id}`))
    );
  }

  setUser(user: User) {
    return this.http.post<User>(this.addObjectPath, JSON.stringify(user.payload())).pipe(
      map(_ => {
        return new User(_['object']);
      }),
      catchError(this.handleError<User>())
    );
  }

  getProducts(): Observable<Product[]> {
    if (!this.products$) {
      this.products$ = this.http.get<Product[]>(this.productsUrl + '?sort=random').pipe(
        tap(_ => console.log('fetched products')),
        map(_ => {
          return _['objects'].map(element => new Product(element));
        }),
        shareReplay(1),
        catchError(this.handleError('getProducts', []))
      );
    }
    return this.products$;
  }

  getProduct(id: string): Observable<Product> {
    if (!this.product$.get(id)) {
      const url = `${this.singleObjectByIdUrl}/${id}`;
      const response = this.http.get<Product>(url).pipe(
        tap(_ => console.log(`fetched product: ${id}`)),
        map(_ => {
          return new Product(_['object']);
        }),
        shareReplay(1),
        catchError(this.handleError<Product>(`getProduct: ${id}`))
      );
      this.product$.set(id, response);
    }
    return this.product$.get(id);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
