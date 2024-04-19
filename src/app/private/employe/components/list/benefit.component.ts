import { Component } from '@angular/core';
import { Reservation } from 'src/app/private/model/reservation';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.css']
})
export class BenefitComponent {
  reservationList: Reservation[] = [];

  constructor() {}
    // Exemple de données de réservation
    

}
