import styled from 'styled-components';
import {Card} from "@mui/material";
import {Link} from "react-router-dom";

export const ButtonWrapper = styled(Link)`
  padding: 0;
  width: 100%;
  text-decoration: none;
  color: #fff;
`;

export const CardWrapper = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
