import styled from "styled-components";
import {Button, Skeleton} from "@mui/material";

export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  position: relative;
`;

export const ButtonWrapper = styled(Button)`
  position: absolute;
  top: 30px;
  right: 40px;
  @media (max-width: 768px) {
    top: 20px;
    right: 10px;
  }
`;

export const Video = styled.video<{size: 'sm' | 'lg'}>`
  width: 100%;
  height: ${({size}) => (size === 'sm' ? '300px' : '500px')};
  object-fit: cover;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  @media (max-width: 768px) {
    height: ${({size}) => (size === 'sm' ? '300px' : '300px')};
  }
`;

export const SkeletonWrapper = styled(Skeleton)<{size: 'sm' | 'lg'}>`
  width: 100%;
  height: ${({size}) => (size === 'sm' ? '300px' : '500px')};
  @media (max-width: 768px) {
    height: ${({size}) => (size === 'sm' ? '300px' : '300px')};
  }
`;
