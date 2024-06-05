import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import Nav from "./Nav";
import Flag from "react-world-flags";
import { useTranslation } from "react-i18next";

const StyledNavigation = styled.div`
  background-color: var(--primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 0 0 20px 20px;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const Button = styled.button`
  border: none;
  font-size: 3rem;
  background-color: transparent;
  color: var(--color);
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ButtonFlag = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
`;

function Navigation() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { i18n } = useTranslation();

  return (
    <StyledNavigation>
      <div></div>
      <Nav />
      <Div>
        {i18n.language === "en" ? (
          <ButtonFlag onClick={() => i18n.changeLanguage("rs")}>
            <Flag code="rs" height="20" />
          </ButtonFlag>
        ) : (
          <ButtonFlag onClick={() => i18n.changeLanguage("en")}>
            <Flag code="us" height="20" />
          </ButtonFlag>
        )}

        <Button onClick={toggleDarkMode}>
          {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
        </Button>
      </Div>
    </StyledNavigation>
  );
}

export default Navigation;
