import { FaCss3, FaGitAlt, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { SiJavascript, SiStyledcomponents, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import styled from "styled-components";
import SkillList from "../components/SkillList";
import { StyledDiv, StyledH3 } from "../styles/Styles";
import { useTranslation } from "react-i18next";

const StyledSkills = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 25px 25px;

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    gap: 25px 25px;
  }
`;

function Skills() {
  const { t } = useTranslation();

  return (
    <StyledDiv id="skills">
      <div>
        <StyledH3>{t("skills")}</StyledH3>
        <p>{t("skillsOne")}</p>
      </div>

      <StyledSkills>
        <SkillList icon={<FaHtml5 />} name="HTML" color="#e34c26" />
        <SkillList icon={<FaCss3 />} name="CSS" color="#264de4" />
        <SkillList icon={<FaSass />} name="SASS" color="#cc6699" />
        <SkillList
          icon={<SiStyledcomponents />}
          name="Styled Comp."
          color="#8751dd"
        />
        <SkillList
          icon={<RiTailwindCssFill />}
          name="Tailwind"
          color="#06b6d4"
        />
        <SkillList icon={<SiJavascript />} name="Javascript" color="#f7df1e" />
        <SkillList icon={<SiTypescript />} name="Typescript" color="#007acc" />
        <SkillList icon={<FaReact />} name="React" color="#61dbfb" />
        <SkillList icon={<FaGitAlt />} name="Git" color="#f34f29" />
      </StyledSkills>
    </StyledDiv>
  );
}

export default Skills;
