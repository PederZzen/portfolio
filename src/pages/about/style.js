import styled from "styled-components";

export const Wrapper = styled.div`
  #content {
    display: grid;
    grid-template-columns: 60% auto;
    align-items: center;
    gap: 4rem;

    div {
      margin-bottom: 1rem;
    }

    img {
      width: 80%;
      box-shadow: 0 0 1rem -5px gray;
    }
  }

  @media screen and (max-width: 750px) {
    #content {
      grid-template-columns: auto;

      img {
        width: 100%;
      }
    }
  }
`;
