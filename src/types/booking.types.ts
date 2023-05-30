import * as yup from 'yup';

import { IEvent } from './event.types';
import { IMuseum } from './museum.types';

export const BookingSchema = yup.object().shape({
  event: yup.object().required(),
  numStandardAdultTickets: yup
    .number()
    .min(0, 'Cannot be a negitive number.')
    .max(10, 'Cannot book more than 10 standard adult tickets in one booking.')
    .required(),
  numStandardChildTickets: yup
    .number()
    .min(0, 'Cannot be a negitive number.')
    .max(10, 'Cannot book more than 10 standard child tickets in one booking.')
    .required(),
  numPremiumAdultTickets: yup
    .number()
    .min(0, 'Cannot be a negitive number.')
    .max(10, 'Cannot book more than 10 premium adult tickets in one booking.')
    .required(),
  numPremiumChildTickets: yup
    .number()
    .min(0, 'Cannot be a negitive number.')
    .max(10, 'Cannot book more than 10 premium child tickets in one booking.')
    .required(),
});

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
