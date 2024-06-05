import { t } from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import styled from "styled-components";

const Div = styled.div`
  font-size: 2.5rem;
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  padding: 2rem;
  background-color: var(--secondary);
  border-radius: 55px;
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const Links = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  text-align: center;
  @media (max-width: 1100px) {
    width: 100%;
    gap: 2rem;
  }
`;

const ShowMore = styled.div`
  padding: 2rem;
  animation: slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
`;

const Button = styled.button`
  padding: 5px;
  font-size: 1.5rem;
  background-color: var(--accent);
  border: none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: var(--primary);
    transform: scale(1.1);
  }
`;

const A = styled.a`
  &:hover {
    text-decoration: underline 3px #333;
    text-underline-offset: 5px;
    transform: scale(1.2);
  }
`;

function Project({ github, live, name, img, details }) {
  const [showMore, setShowMore] = useState(false);
  const { t } = useTranslation();

  return (
    <Div>
      {!showMore && (
        <Info>
          <h5>{name}</h5>
          <Links>
            <A href={github} target="_blank">
              Github <FaGithub />
            </A>
            <A href={live} target="_blank">
              {t("projectsFour")}
            </A>
            <Button onClick={() => setShowMore((e) => !e)}>
              {t("projectsTwo")}
            </Button>
          </Links>
        </Info>
      )}
      {showMore && (
        <ShowMore>
          <p>{details}</p>
          <Button onClick={() => setShowMore((e) => !e)}>
            <IoArrowBack />
            {t("projectsThree")}
          </Button>
        </ShowMore>
      )}
      {!showMore && (
        <a href={live} target="_blank">
          <img src={img} />
        </a>
      )}
    </Div>
  );
}

function ProjectsList() {
  return (
    <div>
      <Project
        github="https://github.com/VeljkoRikalovic/history-or-geography-quiz"
        live="https://history-or-geography-quiz-vrikalovic.netlify.app/"
        name="History or geography quiz"
        img="/public/hgscreen.png"
        details={t("projectsDetailsOne")}
      />
      <Project
        github="https://github.com/VeljkoRikalovic/fast-react-pizza"
        live="https://fast-react-pizza-veljkorikalovic.netlify.app/"
        name="Fast React Pizza app"
        img="/public/frpscreen.png"
        details={t("projectsDetailsTwo")}
      />
      <Project
        github="https://github.com/VeljkoRikalovic/the-wild-oasis"
        live="https://the-wild-oasis-veljkorikalovic.netlify.app"
        name="The wild oasis"
        img="/public/twoscreen.png"
        details={t("projectsDetailsThree")}
      />
      <Project
        github="https://github.com/VeljkoRikalovic/musix-app"
        live="https://musix-app-veljkorikalovic.netlify.app"
        name="Musix app"
        img="/public/mascreen.png"
        details={t("projectsDetailsFour")}
      />
    </div>
  );
}

export default ProjectsList;
