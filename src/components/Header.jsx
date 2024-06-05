import styled from "styled-components";
import { StyledDiv } from "../styles/Styles";
import { useTranslation } from "react-i18next";

const Heading = styled.h1`
  text-align: center;
  font-size: 5rem;
  animation: slide-in-fwd-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: tracking-in-expand-fwd 2s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;

const Span = styled.p`
  clip-path: polygon(100% 0, 100% 85%, 0 100%, 0 15%);
  background-color: var(--accent);
`;

function Header() {
  const { t } = useTranslation();

  return (
    <StyledDiv>
      <Heading>
        {t("headerOne")}
        <Span>Veljko Rikalović</Span>
        {t("headerTwo")}
      </Heading>
    </StyledDiv>
  );
}

export default Header;
