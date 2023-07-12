import styled from "styled-components";

export const Wrapper = styled.div`
  #content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    #media {
      margin: auto;

      img {
        width: 20rem;
        aspect-ratio: 1/1;
        object-fit: cover;
        position: relative;

        &::after {
          content: "";
          background-color: red;
          width: 100%;
          height: 100%;
          position: absolute;
          right: -2rem;
          top: -2rem;
        }
      }
    }
  }
`;
