import styled from "styled-components";
import { colors } from "../../../../utils/constants";

export const Wrapper = styled.div`
  > h2 {
    text-align: center;
    margin: 8rem 0 6rem;
    font-weight: 800;
    letter-spacing: 0.05rem;
    color: ${colors.main};
    position: relative;

    &::after {
      content: "";
      background-color: ${colors.accent};
      width: 4rem;
      height: 4px;
      border-radius: 1.5px;
      left: 50%;
      bottom: -1rem;
      transform: translate(-50%);
      position: absolute;
    }
  }
`;
