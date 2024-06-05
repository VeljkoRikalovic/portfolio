import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledNav = styled.div`
  background-color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const A = styled.a`
  width: 100%;
  font-weight: 500;
  border: none;
  border-radius: 30%;
  &:hover {
    text-decoration: underline 7px var(--accent);
    text-underline-offset: 7px;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 3rem;
  @media (max-width: 900px) {
    gap: 1rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

function Nav() {
  const { t } = useTranslation();

  return (
    <StyledNav>
      <List>
        <li>
          <A href="#aboutMe">{t("aboutMeHeader")}</A>
        </li>
        <li>
          <A href="#skills">{t("skills")}</A>
        </li>
        <li>
          <A href="#projects">{t("projects")}</A>
        </li>
        <li>
          <A href="#contact">{t("contactMe")}</A>
        </li>
      </List>
    </StyledNav>
  );
}

export default Nav;
