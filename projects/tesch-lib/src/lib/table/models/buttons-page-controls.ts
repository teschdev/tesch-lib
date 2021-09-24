export class ButtonPageControls {
  constructor(
    public first?: boolean,
    public last?: boolean,
    public next?: boolean,
    public prev?: boolean
  ) {
    this.first = false;
    this.last = true;
    this.next = true;
    this.prev = false;
  }
}
