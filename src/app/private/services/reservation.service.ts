import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../model/reservation';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  baseUrl = 'http://localhost:8083/api/example/reservation';

  constructor(private httpclient: HttpClient) { }
  private reservations: Reservation[] = [];
  getAllReservations(): Observable<Reservation[]> {
    return this.httpclient.get<Reservation[]>(`${this.baseUrl}/reservation`);

  }
  deleteReservation(id: number): Observable<void> {
    return this.httpclient.delete<void>(`${this.baseUrl}/reservation/${id}`);
  }
  addReservation(reservation: Reservation) {
    this.reservations.push(reservation);
  }

  getReservations() {
    return this.reservations;
  }

  editReservation(id: number, reservation: Reservation): Observable<any> {
    return this.httpclient.put(`${this.baseUrl}/reservation/${id}`, reservation);
  }

  getReservationById(id: number): Observable<Reservation> {
    return this.httpclient.get<Reservation>(`${this.baseUrl}/reservation/${id}`);
  }


    
  }










