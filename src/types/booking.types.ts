import { IEvent } from './event.types';
import { IMuseum } from './museum.types';

export interface IBooking {
  timeBooked: Date;
  user: IMuseum;
  event: IEvent;
  numStandardAdultTickets: number;
  numStandardChildTickets: number;
  numPremiumAdultTickets: number;
  numPremiumChildTickets: number;
}
