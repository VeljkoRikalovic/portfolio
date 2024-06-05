import { useTranslation } from "react-i18next";
import ProjectsList from "../components/ProjectsList";
import { StyledDiv, StyledH3 } from "../styles/Styles";

function Projects() {
  const { t } = useTranslation();

  return (
    <StyledDiv id="projects">
      <div>
        <StyledH3>{t("projects")}</StyledH3>
        <p>{t("projectsOne")}</p>
      </div>
      <ProjectsList />
    </StyledDiv>
  );
}

export default Projects;
