export interface Reservation {
    id: number;
    room: string;
    equipements: string[];
    date: Date;
    date_debut: Date;
    date_fin: Date;
    status: boolean;
  }
  