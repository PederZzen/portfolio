import styled from "styled-components";
import { colors } from "../../../../utils/constants";

export const Wrapper = styled.div`
  background-color: ${colors.darker};
  color: whitesmoke;
  height: 70vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 4rem;
  border-top: 3rem solid ${colors.dark};
  border-bottom: 3rem solid ${colors.dark};

  h2 {
    color: ${colors.light};
    margin-bottom: 4rem;
    position: relative;
    font-weight: 800;
    letter-spacing: 0.05rem;

    &:after {
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

  p {
    max-width: 40rem;
    font-size: 1.1rem;
  }

  br {
    margin-bottom: 1.5rem;
  }
`;
