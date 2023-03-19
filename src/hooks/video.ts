import {RefObject, useEffect} from "react";
import {KeyTypes} from "../types/video";
import Hls from "hls.js";
import {setToStorage} from "../helpers/localStorage";

export const useVideo = (ref: RefObject<HTMLVideoElement>, src?: string, id?: string, duration?: number) => {
  useEffect(() => {
    if (!src) return;
    if(Hls.isSupported() && ref.current) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(ref.current);
    } else if (ref.current?.canPlayType('application/vnd.apple.mpegurl')) {
      ref.current.src = src;
    }
  }, [ref.current, src]);

  useEffect(() => {
    if (ref.current && duration) {
      ref.current.currentTime = duration;
    }
    const intervalId = setInterval(() => {
      if (id && ref.current) {
        setToStorage(id, ref.current?.currentTime);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [id, ref.current]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!ref?.current) return;
      const speed = ref.current.playbackRate;
      if (ref && ref?.current) {
        if (e.key === KeyTypes.UP && speed < 2) {
          ref.current.playbackRate += 0.25;
        }
        if (e.key === KeyTypes.DOWN && speed > 0) {
          ref.current.playbackRate -= 0.25;
        }
      }
    }
    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [ref])
}
