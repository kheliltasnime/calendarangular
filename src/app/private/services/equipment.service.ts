import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private apiUrl = 'http://localhost:8083/'; // Remplacez ceci par l'URL de votre backend pour récupérer les équipements

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer les équipements depuis la base de données
  getEquipments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
