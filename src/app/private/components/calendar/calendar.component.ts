import { Component, Input,OnInit } from '@angular/core';
//import { CalendarView } from 'angular-calendar';
import { Event } from '../../model/event';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { Reservation } from '../../model/reservation';
import { ReservationService } from '../../services/reservation.service';
@Component({
  selector: 'app-calendar',
 // standalone:true,
  //template:'<ejs-schedule heigt="850" width="1250" ></ejs-schedule>',
 templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
//@Input() reservations: Reservation[] = [];

 
constructor(private reservationService: ReservationService) {}

get reservations(): Reservation[] {
  return this.reservationService.reservations;
}
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  calendarView = CalendarView;
  selectedEvent: CalendarEvent | null = null;
  events: CalendarEvent[] = [];

  ngOnInit(): void {
    this.convertReservationsToEvents();
  }

  convertReservationsToEvents(): void {
    this.events = this.reservations.map(reservation => ({
      start: new Date(reservation.date_debut), // Convertir la date de début
      end: new Date(reservation.date_fin), // Convertir la date de fin
      title: reservation.room, // Utilisez la salle comme titre de l'événement
      color: { primary: '#ad2121', secondary: '#FAE3E3' }
    }));
  }
  updatePrimaryColor(event: CalendarEvent<any>, color: string): void {
    if (event.color) {
      event.color.primary = color;
    }
}

updateSecondaryColor(event: CalendarEvent<any>, color: string): void {
  if (event.color) {
    event.color.secondary = color;
  }
}

  
  loadEvents(): void {
    // Exemple de chargement d'événements
    this.events = [
      // Convertir chaque `Event` en `CalendarEvent`
      {
        id: 1,
        start: new Date(),
        end: new Date(),
        title: 'Example Event',
        color: { primary:  '#ad2121', secondary: '#FAE3E3'  },
      }
    ];
  }
  currentId = this.events.length + 1;
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log('Clicked on: ', date);
    // Ajoutez la logique pour ouvrir un modal ou une autre vue pour modifier les événements
  }

  eventClicked(event: CalendarEvent): void {
    console.log('Clicked Event:', event);
    this.selectedEvent = event;
    // Logique pour ouvrir la modification/suppression de l'événement
  }

  deleteEvent(eventToDelete: CalendarEvent): void {
    this.events = this.events.filter(event => event !== eventToDelete);
  }
  

  addEvent(): void {
    const newEvent: Event = {
      id: this.currentId++,
      title: '',
      color: { primary: '#ffffff', secondary: '#dddddd' },
      start: new Date(),
      end: new Date(new Date().setHours(new Date().getHours() + 1))
    };
    this.events.push(newEvent);
  }

  setView(view: CalendarView) {
    this.view = view;
    console.log('Changer la vue du calendrier vers :', view);
  }

  getDateFormat(view: CalendarView): string {
    switch (view) {
      case CalendarView.Month:
        return 'monthViewTitle';
      case CalendarView.Week:
        return 'weekViewTitle';
      case CalendarView.Day:
        return 'dayViewTitle';
      default:
        return 'monthViewTitle'; // Par défaut, utilisez le format de vue mensuelle
    }
  }
 
}
