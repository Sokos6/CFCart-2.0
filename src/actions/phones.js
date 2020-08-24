export const RECEIVE_PHONES = 'RECEIVE_PHONES';

export function recievePhones(phones) {
  return {
    type: RECEIVE_PHONES,
    phones,
  };
}
