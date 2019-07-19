import { Injectable } from "@angular/core";
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    user: User;

    login(username: string, password: string): void {
        // Appel serveur
        const u: User = { name: username, token: 'AZATB6654F789' };
        sessionStorage.setItem('USER', JSON.stringify(u));

        this.user = u;
    }

    logout(): void {
        sessionStorage.removeItem('USER');
        tihs.user = null;
    }
}