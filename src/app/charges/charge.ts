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

  static generate(amount: number): ChargePreview[] {
    let ret: ChargePreview[] = [];
    let startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 1);
    for (let i = 0; i < amount; i++) {
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
