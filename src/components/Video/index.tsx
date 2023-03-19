import React, {useRef} from "react";
import {Video, SkeletonWrapper, VideoWrapper, ButtonWrapper} from "./styles";
import CollectionsIcon from '@mui/icons-material/Collections';
import {useRecoilState} from "recoil";
import {videoState} from "../../store/video";
import {useVideo} from "../../hooks/video";
import {Typography} from "@mui/material";

interface IVideo {
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  src: string;
  size: 'sm' | 'lg';
  duration?: number;
  id?: string;
}

export const VideoComponent: React.FC<IVideo> = ({autoPlay, muted, loop, controls, src, size, duration, id}) => {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [, setVideo] = useRecoilState(videoState);

  const changePictureVideo = () => {
    if (ref.current && id) {
      ref.current?.pause();
      return setVideo({link: src, id: id, duration: ref.current.currentTime, autoPlay: true})
    }
  }

  useVideo(ref, src, id, duration);

  if (ref.current) {
    ref.current.onplay = () => {
      ref.current?.play()
      setVideo((prev) => ({...prev, autoPlay: false}));
    }
  }
  if (!src) return <SkeletonWrapper size={size} variant="rectangular" />
  return <VideoWrapper>
    <Video size={size} ref={ref} autoPlay={autoPlay} muted={muted} loop={loop} controls={controls} />
    {!muted && <>
      <Typography mt={2} variant="h6">
        Press down/up arrows to change video speed
      </Typography>
      <ButtonWrapper onClick={changePictureVideo} variant="contained">
      <CollectionsIcon />
    </ButtonWrapper>
    </>
    }
  </VideoWrapper>
}
