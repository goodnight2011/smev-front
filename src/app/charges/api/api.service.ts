import {Injectable} from '@angular/core';
import {ChargePreview} from '../charge';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private charges: ChargePreview[] = [
    {
      status: 'Не сквитирован',
      uin: '123123123',
      chargeDate: new Date(),
      inn: '123123123',
      kpp: '4564564564',
      summ: '100500',
      protocolDate: new Date(),
      protocolNumber: 'number',
      accSertNumber: '3123123123',
      accName: 'accName'
    },
    {
      status: 'Сквитирован',
      uin: '789456123',
      chargeDate: new Date(),
      inn: '555544999',
      kpp: '2255449999',
      summ: '0',
      protocolDate: new Date(),
      protocolNumber: 'number1',
      accSertNumber: 'accSert2',
      accName: 'accName2'
    },
    {
      status: 'Не сквитирован',
      uin: '1122333332222323',
      chargeDate: new Date(),
      inn: '775859485',
      kpp: '992358569',
      summ: '100',
      protocolDate: new Date(),
      protocolNumber: 'number2',
      accSertNumber: 'accSert3',
      accName: 'accName3'
    },
  ];

  constructor() {
  }

  getCharges(): Observable<ChargePreview[]> {
    return of(this.charges);
  }
}
