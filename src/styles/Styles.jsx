import styled from "styled-components";

export const StyledDiv = styled.div`
  padding: 2rem;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  animation: slide-in-fwd-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const StyledH3 = styled.h3`
  text-decoration: underline 7px solid var(--accent);
  text-underline-offset: 7px;
  margin-bottom: 2rem;
`;
