import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = 'https://ixtar-backend.up.railway.app/api/projects'

  constructor(private http: HttpClient) { 
   
  }

  createProject(projectData:any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, projectData);
  }
}

