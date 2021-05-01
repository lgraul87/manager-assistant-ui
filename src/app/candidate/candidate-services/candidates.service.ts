import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Candidate } from 'src/app/_shared/interfaces/candidate';

@Injectable({
    providedIn: 'root'
})
export class CandidatesService {
    constructor(private http: HttpClient) { }

    getCandidates(): Observable<Candidate[]> {
        return this.http.get<Candidate[]>("http://localhost:3000/candidates");
    }
}