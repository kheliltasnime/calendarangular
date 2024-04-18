import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost:8083/'; // Remplacez ceci par l'URL de votre backend pour récupérer les salles

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer les salles depuis la base de données
  getRooms(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
