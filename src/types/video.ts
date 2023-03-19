import {Ref} from "react";

export type VideoType = {
  duration: number;
  id: string;
  link: string;
  autoPlay: boolean;
}

export enum KeyTypes {
  UP = 'ArrowUp',
  DOWN = 'ArrowDown',
}
