import styled from "styled-components";
import { colors } from "../../../utils/constants";

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  color: ${colors.main};
  padding: 1rem 0;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-weight: 700;
  }
`;
