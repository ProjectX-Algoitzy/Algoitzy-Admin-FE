import { atom } from 'recoil';



export const CntAppication = atom({
  key: 'cntAppication',
  default: 0, 
});

// 메일 발송 완료 여부
export const IsSendMail = atom({
  key: 'isSendMail',
  default: false, 
});

// 메일 발송 완료 여부
export const IsOpenModal = atom({
  key: 'IsOpenModal',
  default: false, 
});