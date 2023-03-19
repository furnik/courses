import styled from "styled-components";
import {Button, Skeleton} from "@mui/material";

export const VideoWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  bottom: 50px;
  right: 30px;
  width: 400px;
  height: 200px;
  @media (max-width: 768px) {
    width: calc(100vw - 40px);
    right: 20px;
    bottom: 20px;
  }
`;

export const CloseButton = styled(Button)``;

export const ActionsWrapper = styled.div`
  position: absolute;
  top: -50px;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Video = styled.video`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

export const SkeletonWrapper = styled(Skeleton)`
  width: 100%;
  height: 200px;
`;
