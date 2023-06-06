import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root' // tree-shaking
})
export class UserService {
    constructor(private http: HttpClient) {}

    getAll() {
        return []
    }
}