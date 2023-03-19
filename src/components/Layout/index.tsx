import React, {KeyboardEvent, PropsWithChildren, useRef} from "react";
import {Container, ThemeProvider, createTheme, Box, Paper} from "@mui/material";
import {GlobalStyles} from './styles';
import {useRecoilValue} from "recoil";
import {videoState} from "../../store/video";
import {VideoComponent} from "./Video";

export const Layout: React.FC<PropsWithChildren> = ({children}) => {
  const {link, id, duration, autoPlay} = useRecoilValue(videoState);
  return (
    <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })}>
      <GlobalStyles />
      <Paper elevation={5}>
        <Container maxWidth="lg">
          <Box width="100%" minHeight="100vh">
            {link && (<VideoComponent autoPlay={autoPlay} src={link} id={id} duration={duration} />)}
            {children}
          </Box>
        </Container>
      </Paper>
    </ThemeProvider>
  )
}
