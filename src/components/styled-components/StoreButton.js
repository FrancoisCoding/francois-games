import styled from "styled-components";

export const StoreButton = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--controller);
  border-color: var(--controller);
  color: var(--controller);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  @media (min-width: 500px) {
    &:hover {
      background: var(--mainYellow);
      color: var(--mainBlue);
    }
  }
  &:focus {
    outline: none;
  }
`;
