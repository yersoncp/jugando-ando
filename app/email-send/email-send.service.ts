import { IEmailSend } from './model/email-send.interface';

export const sendEmail = (data: IEmailSend): Promise<any> => {
  const url = `https://us-central1-element-services.cloudfunctions.net/email/sendEmail`;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}