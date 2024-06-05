import { useTranslation } from "react-i18next";
import { StyledDiv, StyledH3 } from "../styles/Styles";

function AboutMe() {
  const { t } = useTranslation();

  return (
    <StyledDiv id="aboutMe">
      <div>
        <StyledH3>{t("aboutMeHeader")}</StyledH3>
        <p>
          {t("aboutMeOne")}
          <br />
          {t("aboutMeTwo")}
          <br />
          {t("aboutMeThree")}
        </p>
      </div>
    </StyledDiv>
  );
}

export default AboutMe;
