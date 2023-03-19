import React, {useEffect, useRef} from "react";
import {Video, SkeletonWrapper, VideoWrapper, CloseButton, ActionsWrapper} from "./styles";
import CloseIcon from '@mui/icons-material/Close';
import {useRecoilState} from "recoil";
import {videoState} from "../../../store/video";
import {VideoType} from "../../../types/video";
import {useVideo} from "../../../hooks/video";
import {Typography} from "@mui/material";

interface IVideo {
  autoPlay?: boolean;
  src: string;
  duration?: number;
  id: string;
}

export const VideoComponent: React.FC<IVideo> = ({autoPlay, src, duration, id}) => {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [, setVideo] = useRecoilState(videoState);

  const closePictureVideo = () => {
      setVideo({} as VideoType);
  }

  useVideo(ref, src, id, duration);

  useEffect(() => {
    if (ref.current && !autoPlay) {
      ref.current?.pause();
    }
  }, [autoPlay]);

  if (!src) return <VideoWrapper><SkeletonWrapper variant="rectangular" /></VideoWrapper>
  return <VideoWrapper>
    <Video ref={ref} autoPlay={autoPlay} controls={true} />
    <ActionsWrapper>
      <Typography variant="subtitle1">
        Press down/up arrows to change video speed
      </Typography>
      <CloseButton onClick={closePictureVideo}>
        <CloseIcon />
      </CloseButton>
    </ActionsWrapper>
  </VideoWrapper>
}
