export class Recipient {
  s_name: string;
  urn: string;
  INN: string;
  KPP: string;
  OGRN: string;
  account_number: string;
  bank_name: string;
  bank_BIK: string;
  correspondent_bank_account: string;
  OKTMO: string;
  TOFK_name: string;
  TOFK_code: string;
  LS_vUFK: string;
}

const ALL_RECEPIENTS: Recipient[] = [
  {
    s_name: 'Федеральная служба по аккредитации',
    urn: '301552',
    INN: '7736638268',
    KPP: '773601001',
    OGRN: '5117746026756',
    account_number: '40101810500000001901',
    bank_name: 'ОПЕРАЦИОННЫЙ ДЕПАРТАМЕНТ БАНКА РОССИИ Г. МОСКВА 701',
    bank_BIK: '044501002',
    correspondent_bank_account: '',
    OKTMO: '45397000',
    TOFK_name: 'Межрегиональное операционное УФК',
    TOFK_code: '',
    LS_vUFK: '04951001650'
  },
  {
    s_name: 'Управление Федеральной службы по аккредитации по Приволжскому федеральному округу',
    urn: '301571',
    INN: '1655256510',
    KPP: '165501001',
    OGRN: '1121690081655',
    account_number: '40101810800000010001',
    bank_name: 'ГРКЦ НБ Республики Татарстан Банка России',
    bank_BIK: '049205001',
    correspondent_bank_account: '',
    OKTMO: '92701000',
    TOFK_name: 'УФК по Республике Татарстан',
    TOFK_code: '',
    LS_vUFK: '04111А83880'
  },
  {
    s_name: 'Управление Федеральной службы по аккредитации по Северо-Западному федеральному округу',
    urn: '31162e',
    INN: '7842490616',
    KPP: '780501001',
    OGRN: '1137847049526',
    account_number: '40105810400000010001',
    bank_name: 'Северо-Западное ГУ Банка России по г. Санкт-Петербургу',
    bank_BIK: '044030001',
    correspondent_bank_account: '',
    OKTMO: '40339000',
    TOFK_name: 'УФК по г. Санкт-Петербургу',
    LS_vUFK: '03721А85780'
  },
  {
    s_name: 'Управление Федеральной службы по аккредитации по Сибирскому федеральному округу',
    urn: '3015ае',
    INN: '2463241783',
    KPP: '246601001',
    OGRN: '1122468063410',
    account_number: '40105810300000010051',
    bank_name: 'Отделение Красноярск, г. Красноярск',
    bank_BIK: '040407001',
    correspondent_bank_account: '',
    OKTMO: '4701000',
    TOFK_name: 'УФК по Красноярскому краю',
    LS_vUFK: '03191А83890'
  },
  {
    s_name: 'Управление Федеральной службы по аккредитации по Уральскому федеральному округу',
    urn: '3ec3e0',
    INN: '6670419285',
    KPP: '667101001',
    OGRN: '1146670003952',
    account_number: '40105810900000010001',
    bank_name: 'Уральское ГУ Банка России г. Екатеринбург',
    bank_BIK: '046577001',
    correspondent_bank_account: '',
    OKTMO: '65701000001',
    TOFK_name: 'УФК по Свердловской области',
    LS_vUFK: '03621А91330'
  },
  {
    s_name: 'Управление Федеральной службы по аккредитации по Южному и Северо-Кавказскому федеральным округам',
    urn: '311633',
    INN: '6164311302',
    KPP: '616401001',
    OGRN: '1136164000466',
    account_number: '40105810000000010000',
    bank_name: 'Отделение Ростов-на-Дону, г. Ростов-на-Дону',
    bank_BIK: '046015001',
    correspondent_bank_account: '',
    OKTMO: '60701000',
    TOFK_name: 'УФК по Ростовской области',
    LS_vUFK: '03581А85720'
  },
  {
    s_name: 'Управление Федеральной службы по аккредитации по Дальневосточному федеральному округу',
    urn: '311631',
    INN: '2540188625',
    KPP: '254001001',
    OGRN: '1132540001527',
    account_number: '40105810100000010002',
    bank_name: 'Дальневосточное ГУ банка России г.Владивосток',
    bank_BIK: '040507001',
    correspondent_bank_account: '',
    OKTMO: '5701000001',
    TOFK_name: '',
    LS_vUFK: ''
  }
];

