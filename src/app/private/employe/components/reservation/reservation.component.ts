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
  
  showRoomColumn: boolean = true;
  showEquipmentColumn: boolean = true;
  showActionsColumn: boolean = true;
  
  showStatusColumn: boolean = false;
  showDateOccupationColumn: boolean = false;
  
  searchDate: string = ''; 
  selectedRoom: any;
  startDate: string = '';
  endDate: string = '';
  isReservationDialogOpen: boolean = false;
  constructor(private reservationService: ReservationService) {
    // Exemples de rooms et d'équipements
    
    this.roomList = [
      { name: 'Room 1',status: 'Available' ,startDate:'12/12/2023',endDate:'10/01/2024'},
      { name: 'Room 2', equipment: 'Projector' ,status: 'Occupied',startDate:'12/12/2023',endDate:'10/01/2024'},
      { name: 'Room 3',status: 'Available' },
      { name: 'Room 4', equipment: 'Whiteboard' ,status: 'Available'},
      { name: 'Room 5',status: 'Available' },
      { name: 'Room 6', equipment: 'Microphone' ,status: 'Available'},
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
    // Reset the default visibility of columns
    this.showStatusColumn = false;
    this.showDateOccupationColumn = false;
  
    if (this.searchText.trim() === '' && this.searchDate.trim() !== '') {
      const searchTextLower = this.searchText.toLowerCase();
      const searchDate = new Date(this.searchDate); // Convert the search date to a Date object
  
      this.filteredRoomList = this.roomList.filter(room => {
        // Ensure 'startDate' is defined and not just an empty string
        if (!room.startDate || room.startDate.trim() === '') {
          return false; // Skip rooms without a 'startDate'
        }
        
        const roomStartDate = new Date(room.startDate);
        const roomDateMatch = roomStartDate.toDateString() === searchDate.toDateString();
  
        return room.name.toLowerCase().includes(searchTextLower) || 
               (room.equipment && room.equipment.toLowerCase().includes(searchTextLower)) ||
               roomDateMatch;
      });
  
      // Show "Status" and "Date of Occupation" columns if results are found
      if (this.filteredRoomList.length > 0) {
        this.showStatusColumn = true;
        this.showDateOccupationColumn = true;
      }
    } else {
      // If no date search is performed, show all rooms
      this.filteredRoomList = this.roomList.filter(room =>
        room.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        (room.equipment && room.equipment.toLowerCase().includes(this.searchText.toLowerCase()))
      );
    }
  }
  
  
  
  
  isRoomAvailableForDate(room: Room, searchDate: Date): boolean {
    // Vérifiez si la chambre est déjà occupée
    if (room.status === 'Occupied' && room.startDate && room.endDate) {
      // Convertissez les dates de début et de fin d'occupation en objets Date
      const startDate = new Date(room.startDate);
      const endDate = new Date(room.endDate);
      // Vérifiez si la date de recherche est comprise entre les dates de début et de fin d'occupation
      if (this.isDateInRange(searchDate, startDate, endDate)) {
        // La chambre est occupée pour la date de recherche
        return true;
      }
    }
    // La chambre est disponible pour la date de recherche
    return false;
  } 
  isDateInRange(searchDate: Date, startDate: Date, endDate: Date): boolean {
    // Vérifier si la date de recherche est comprise entre les dates de début et de fin d'occupation
    return searchDate >= startDate && searchDate <= endDate;
  }

openReservationDialog(room: Room): void {
  this.selectedRoom = room;
  this.startDate = room.startDate || '';
  this.endDate = room.endDate || '';
  this.isReservationDialogOpen = true;
}
addToReservationList(type: string, item: Room): void {
  // Vérifiez si la chambre ou l'équipement est déjà occupé
  if (item.status === 'Occupied' && item.startDate && item.endDate) {
    // Affichez les dates d'occupation
    console.log(`${type} ${item.name} is occupied from ${item.startDate} to ${item.endDate}`);
  } else {
    // Ajoutez l'élément sélectionné à votre liste de réservations
    console.log('Added to reservation list:', type, item);
  }
}
closeReservationDialog(): void {
  // Logique pour fermer la fenêtre contextuelle
  this.isReservationDialogOpen = false;
}

// Méthode de confirmation de la réservation
confirmReservation(): void {
  // Effectuez les actions nécessaires pour confirmer la réservation
  console.log('Reservation confirmed:', this.selectedRoom, 'Start Date:', this.startDate, 'End Date:', this.endDate);
  this.isReservationDialogOpen = false; // Fermez la fenêtre contextuelle après confirmation
}
checkCalendar(room: Room): void {
  if (room.status === 'Occupied' && room.startDate && room.endDate) {
    console.log(`Room ${room.name} is occupied from ${room.startDate} to ${room.endDate}`);
    // Vous pouvez également afficher cette période dans une boîte de dialogue ou tout autre moyen d'affichage à l'utilisateur.
  } else {
    console.log(`Room ${room.name} is available.`);
    // Si la chambre n'est pas occupée, vous pouvez afficher un message indiquant qu'elle est disponible.
  }
}


  
}
