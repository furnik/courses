import styled from 'styled-components';
import {Button, Stack} from '@mui/material'

export const ButtonWrapper = styled(Button)`
  min-width: 200px;
  height: 100px;
  padding: 0;
  &:disabled {
    opacity: 0.3;
  }
`;

export const LockedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #000;
`;

export const StackWrapper = styled(Stack)`
  overflow: auto;
  width: 100%;
`;
