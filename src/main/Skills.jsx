import { FaCss3, FaGitAlt, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { SiJavascript, SiStyledcomponents, SiTypescript } from "react-icons/si";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import styled from "styled-components";
import SkillList from "../components/SkillList";
import { StyledDiv, StyledH3 } from "../styles/Styles";
import { useTranslation } from "react-i18next";

const StyledSkills = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr auto;
  gap: 25px 25px;

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    gap: 25px 25px;
  }
`;

const skills = [
  {
    icon: <FaHtml5 />,
    name: "HTML",
    color: "#e34c26",
  },
  {
    icon: <FaCss3 />,
    name: "CSS",
    color: "#264de4",
  },
  {
    icon: <FaSass />,
    name: "SASS",
    color: "#cc6699",
  },
  {
    icon: <SiStyledcomponents />,
    name: "Styled Comp.",
    color: "#8751dd",
  },
  {
    icon: <RiTailwindCssFill />,
    name: "Tailwind",
    color: "#06b6d4",
  },
  {
    icon: <SiJavascript />,
    name: "Javascript",
    color: "#f7df1e",
  },
  {
    icon: <SiTypescript />,
    name: "Typescript",
    color: "#007acc",
  },
  {
    icon: <FaReact />,
    name: "React",
    color: "#61dbfb",
  },
  {
    icon: <RiNextjsLine />,
    name: "Next js",
    color: "#a8b9c0",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    color: "#f34f29",
  },
];

function Skills() {
  const { t } = useTranslation();

  return (
    <StyledDiv id="skills">
      <div>
        <StyledH3>{t("skills")}</StyledH3>
        <p>{t("skillsOne")}</p>
      </div>

      <StyledSkills>
        {skills.map((skill) => (
          <SkillList
            key={skill.name}
            icon={skill.icon}
            name={skill.name}
            color={skill.color}
          />
        ))}
      </StyledSkills>
    </StyledDiv>
  );
}

export default Skills;
