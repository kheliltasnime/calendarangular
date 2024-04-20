import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../model/reservation';
@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.css']
})
export class BenefitComponent {
  constructor(private reservationService: ReservationService) {}

  get reservations(): Reservation[] {
    return this.reservationService.reservations;
  }
}
