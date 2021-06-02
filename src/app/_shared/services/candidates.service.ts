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

    getCandidate(id: string): Observable<Candidate> {
        return this.http.get<Candidate>(`http://localhost:3000/candidates/${id}`);
    }

    addCandidate(candidate: Candidate): Observable<Candidate> {
        return this.http.post<Candidate>("http://localhost:3000/candidates", candidate);
    }
    editCandidate(candidate: Candidate): Observable<Candidate> {
        return this.http.put<Candidate>("http://localhost:3000/candidates/" + candidate.id, candidate);
    }
    deleteCandidate(id: string): Observable<Candidate> {
        return this.http.delete<Candidate>(`http://localhost:3000/candidates/${id}`);
    }
}