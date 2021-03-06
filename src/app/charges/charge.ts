import {Recipient} from './recipient';
import {CommonInfo} from './common-info-form/common-info';

export class ChargePreview {
  status: string;
  uin: string;
  chargeDate: Date;
  inn?: string;
  kpp?: string;
  summ: string;
  protocolDate: Date;
  protocolNumber: string;
  accSertNumber?: string;
  accName?: string;

  public static generate(amount: number, offset: number): ChargePreview[] {
    let ret: ChargePreview[] = [];
    let startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 1);
    for (let i = offset; i < amount+ offset; i++) {
      ret.push({
        status: 'status' + i,
        uin: '111' + i,
        chargeDate: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1),
        inn: '222' + i,
        kpp: '333',
        summ: '444' + i,
        protocolDate: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1),
        protocolNumber: 'proto' + i,
        accSertNumber: 'sert' + i,
        accName: 'accName' + i
      })
      ;
    }
    return ret;
  }
}

export class Charge{
  status: string;
  sendDate: Date;
  uin: string;
  chargeDate: Date;
  inn?: string;
  kpp?: string;
  summ: string;
  protocolDate: Date;
  protocolNumber: string;
  accSertNumber?: string;
  accName?: string;
  recipient: Recipient;
  commonInfo: CommonInfo;
}
