import { IEvent } from './event.types';
import { IMuseum } from './museum.types';

export interface IBooking {
  _id: string;
  timeBooked: Date;
  user: IMuseum;
  event: IEvent;
  numStandardAdultTickets: number;
  numStandardChildTickets: number;
  numPremiumAdultTickets: number;
  numPremiumChildTickets: number;
}
