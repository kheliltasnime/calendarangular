import { Component } from '@angular/core';
import {ReservationService} from 'src/app/private/services/reservation.service';
import { Reservation } from 'src/app/private/model/reservation';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservationList: Reservation[] =[];
  
  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.displayReservations();
  }

  displayReservations() {
    this.reservationService.getAllReservations().subscribe((res) => {
      this.reservationList = res;
      console.log(res);
    });
  }

  selectedReservation!: Reservation;

  selectReservation(reservation: Reservation) {
    this.selectedReservation = reservation;
  }

  deleteReservation() {
    if (this.selectedReservation && this.selectedReservation.id) {
      this.reservationService.deleteReservation(this.selectedReservation.id)
        .subscribe(() => {
          console.log('Reservation deleted');
          this.displayReservations();
        }, error => {
          console.error('Error deleting reservation', error);
        });
    }
  }
}
