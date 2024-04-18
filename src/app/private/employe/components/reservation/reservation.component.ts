import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import {ReservationService} from 'src/app/private/services/reservation.service';
import { Reservation } from 'src/app/private/model/reservation';
import { EquipmentService } from 'src/app/private/services/equipment.service';
import { RoomService } from 'src/app/private/services/room.service';
import { Room } from 'src/app/private/model/room';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  roomList: Room[] = [];
  equipmentList: any[] = [];
  searchText: string = '';
  filteredRoomList: Room[] = [];
  filteredEquipmentList: any[] = [];

  constructor() {
    // Exemples de rooms et d'équipements
    this.roomList = [
      { name: 'Room 1' },
      { name: 'Room 2', equipment: 'Projector' },
      { name: 'Room 3' },
      { name: 'Room 4', equipment: 'Whiteboard' },
      { name: 'Room 5' },
      { name: 'Room 6', equipment: 'Microphone' },
      // Ajoutez d'autres exemples de rooms avec et sans équipement si nécessaire
    ];

    this.equipmentList = [
      { name: 'Projector' },
      { name: 'Whiteboard' },
      { name: 'Speaker System' },
      // Ajoutez d'autres exemples d'équipements si nécessaire
    ];

    // Initialisation des listes filtrées avec les exemples
    this.filteredRoomList = this.roomList;
    this.filteredEquipmentList = this.equipmentList;
  }
  

  filterLists(): void {
    if (this.searchText.trim() === '') {
      this.filteredRoomList = this.roomList;
      this.filteredEquipmentList = this.equipmentList;
      return;
    }
  
    const searchTextLower = this.searchText.toLowerCase();
  
  
   
  this.filteredRoomList = this.roomList.filter(room =>
    room.name.toLowerCase().includes(searchTextLower) ||
    (room.equipment && room.equipment.toLowerCase().includes(searchTextLower))
  );

  this.filteredEquipmentList = this.equipmentList.filter(equipment =>
    equipment.name.toLowerCase().includes(searchTextLower)
  );
}
  addToReservationList(type: string, item: any): void {
    // Ajoutez l'élément sélectionné à votre liste de réservations
    console.log('Added to reservation list:', type, item);
  }

}
