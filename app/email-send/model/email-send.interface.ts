export interface IEmailSend {
  readonly to: string,
  readonly subject: string,
  readonly template: string,
  readonly tags: string[],
  readonly vars?: any
}