import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../model/reservation';;

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  baseUrl = 'http://localhost:8083/api/example/reservation';

  constructor(private httpclient: HttpClient) { }

  getAllReservations(): Observable<Reservation[]> {
    return this.httpclient.get<Reservation[]>(`${this.baseUrl}/reservation`);

  }
  deleteReservation(id: number): Observable<void> {
    return this.httpclient.delete<void>(`${this.baseUrl}/reservation/${id}`);
  }

  addReservation(reservation: Reservation): Observable<any> {
    return this.httpclient.post(`${this.baseUrl}/reservation`, reservation);
  }

  editReservation(id: number, reservation: Reservation): Observable<any> {
    return this.httpclient.put(`${this.baseUrl}/reservation/${id}`, reservation);
  }

  getReservationById(id: number): Observable<Reservation> {
    return this.httpclient.get<Reservation>(`${this.baseUrl}/reservation/${id}`);
  }


    
  }










