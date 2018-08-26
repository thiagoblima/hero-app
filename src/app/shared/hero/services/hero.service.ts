import { Observable, of, throwError as observableThrowError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../../../config/app.config';
import { Hero } from './hero.model';
import { catchError, tap } from 'rxjs/operators';
import { LoggerService } from '../../commons/logger.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {
    heroesUrl: string;

    constructor(private http: HttpClient) {
        this.heroesUrl = AppConfig.endpoints.heroes;
    }

    private static handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            LoggerService.log(`${operation} failed: ${error.message}`, null);

            if (error.status >= 500) {
                throw error;
            }

            return of(result as T);
        };
    }

    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
            .pipe(
                tap((response: Response) => LoggerService.log(`fetched heroes->`, response)),
                catchError(HeroService.handleError('getHeroes', []))
            );
    }

    getHeroById(id: string): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get<Hero>(url).pipe(
            tap(() => LoggerService.log(`fetched hero id=${id}`, null)),
            catchError(HeroService.handleError<Hero>(`getHero id=${id}`))
        );
    }

    createHero(hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
            tap((heroSaved: Hero) => {
                LoggerService.log(`added hero w/ id=${heroSaved.id}`, null);
            }),
            catchError(HeroService.handleError<Hero>('addHero'))
        );
    }

    deleteHeroById(id: any): Observable<Array<Hero>> {
        const url = `${this.heroesUrl}/${id}`;

        return this.http.delete<Array<Hero>>(url, httpOptions).pipe(
            tap(() => LoggerService.log(`deleted hero id=${id}`, null)),
            catchError(HeroService.handleError<Array<Hero>>('deleteHero'))
        );
    }
}
