import { useTranslation } from "react-i18next";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import styled from "styled-components";

const StyledInfo = styled.div`
  grid-row: span 2;
  background-color: var(--primary);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;

  @media (max-width: 900px) {
    padding: 0.5 2rem;
    gap: 0.5rem;
  }
  @media (max-width: 600px) {
    grid-row: span 1;
    gap: 2rem;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;
`;

const Img = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  @media (max-width: 900px) {
    width: 100px;
    height: 100px;
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  gap: 1.5rem;
`;

const Link = styled.div`
  width: 100%;
  height: 40px;
  background: var(--secondary);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  font-weight: 600;
  &:hover {
    background-color: var(--accent);
  }

  @media (max-width: 900px) {
    padding: 1rem;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
  }
`;

export const ButtonMain = styled.button`
  padding: 15px;
  background-color: black;
  color: white;
  border: 2px solid var(--secondary);
  display: flex;
  align-items: center;
  &:hover {
    background-color: var(--accent);
  }
`;

function Info() {
  const { t, i18n } = useTranslation();
  let currentLng;

  if (i18n.language == "en") currentLng = "cveng.pdf";
  if (i18n.language == "rs") currentLng = "cv.pdf";

  return (
    <StyledInfo>
      <StyledDiv>
        <Img src="/public/profileimg.jpg" alt="profile img" />
        <h2>Veljko Rikalović</h2>
        <Socials>
          <a href="https://www.instagram.com/rikalovic/" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://github.com/veljkorikalovic" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/veljko-rikalovic-6515bb246/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </Socials>
      </StyledDiv>
      <StyledDiv>
        <Link>
          <div>{t("infoPhone")}:</div>
          <span>+381695338913</span>
        </Link>
        <Link>
          <div>Email:</div>
          <span>velja001@yahoo.com</span>
        </Link>
        <Link>
          <div>{t("infoLocation")}:</div>
          <span>{t("infoPlace")}</span>
        </Link>
        <Link>
          <div>{t("infoBirth")}:</div>
          <span>07.02.2001.</span>
        </Link>
      </StyledDiv>
      <a href={`/public/${currentLng}`} download={currentLng}>
        <ButtonMain>
          {t("infoCV")} <HiDownload />
        </ButtonMain>
      </a>
    </StyledInfo>
  );
}

export default Info;
