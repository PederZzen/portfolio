import styled from "styled-components";
import { breakpoints } from "../../utils/constants";

export const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  margin-bottom: 5rem;

  img {
    width: 100%;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 2rem;
  }
`;
