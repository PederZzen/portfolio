import styled from "styled-components";
import { colors } from "../../../utils/constants";

export const Wrapper = styled.div`
  padding-top: 2rem;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  animation: fadein 3s;

  img {
    width: 100%;
    opacity: 0.5;
  }

  .content {
    margin-top: 13rem;
    text-align: center;

    h1 {
      font-weight: 800;
    }

    span {
      font-size: 4rem;
      color: ${colors.main};
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (min-width: 550px) {
    img {
      width: 35rem;
    }
    .content {
      h1 {
        font-size: 2.5rem;
      }
    }
  }
`;
