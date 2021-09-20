export class ThcAlert {
  id: string;
  mensagem: string;
  autoClose: boolean;
  fade: boolean;
  alertType: string;

  constructor(init?: Partial<ThcAlert>) {
    Object.assign(this, init);
  }
}
