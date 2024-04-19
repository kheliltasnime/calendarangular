import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../model/reservation';
@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.css']
})
export class BenefitComponent {
  reservations: Reservation[];

  constructor(private reservationService: ReservationService) {
    this.reservations = this.reservationService.getReservations();
  }
}
