import {atom} from "recoil";
import {VideoType} from "../types/video";

export const videoState = atom<VideoType>({
  key: 'videoState',
  default: {} as VideoType,
});
