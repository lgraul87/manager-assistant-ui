import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Candidate } from 'src/app/_shared/interfaces/candidate';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CandidatesService {

    private readonly url = environment.url;

    constructor(private http: HttpClient) { }

    getCandidates(): Observable<Candidate[]> {
        return this.http.get<Candidate[]>(`${this.url}/candidates`);
    }

    getCandidate(id: string): Observable<Candidate> {
        return this.http.get<Candidate>(`${this.url}/candidates/${id}`);
    }

    addCandidate(candidate: Candidate): Observable<Candidate> {
        return this.http.post<Candidate>(`${this.url}/candidates`, candidate);
    }

    editCandidate(candidate: Candidate): Observable<Candidate> {
        return this.http.put<Candidate>(`${this.url}/candidates/${candidate.id}`, candidate);
    }

    deleteCandidate(id: string): Observable<Candidate> {
        return this.http.delete<Candidate>(`http://localhost:3000/candidates/${id}`);
    }
}