import { Injectable } from "@angular/core";
import { User } from '../models/user.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    // Subject est exposé aux subscribers via un Observable
    private subject: Subject<User> = new Subject<User>();

    // Syntaxe getter, expose publiquement observable user() du subject qui est privé
    get user(): Observable<User> {
        return this.subject.asObservable();
    }

    constructor() {
        const u = JSON.parse(sessionStorage.getItem('USER'));
        if (u != null) {
            this.subject.next(u);
        }
    }

    login(username: string, password: string): void {
        // Appel serveur
        const u: User = { name: username, token: 'AZATB6654F789' };
        sessionStorage.setItem('USER', JSON.stringify(u));

        this.subject.next(u);
    }

    logout(): void {
        sessionStorage.removeItem('USER');
        this.subject.next(null);
    }
}