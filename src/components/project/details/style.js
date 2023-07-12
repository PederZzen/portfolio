import styled from "styled-components";
import { colors } from "../../../utils/constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    color: ${colors.accent};
    font-weight: 600;
    font-size: 0.8rem;
    letter-spacing: 0.05rem;
  }

  h2 {
    color: ${colors.main};
  }

  p {
    margin: 2rem 0;
    color: gray;
  }

  div {
    display: flex;
    gap: 1rem;
  }

  #gitHub {
    font-size: 2rem;
    color: ${colors.main};
  }
`;
