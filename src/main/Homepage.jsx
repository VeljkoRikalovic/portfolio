import styled from "styled-components";
import Skills from "./Skills";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

const StyledContainer = styled.div`
  height: 81vh;
  padding: 4rem;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20rem;
  overflow-y: auto;
  border-radius: 20px 0 0 0;
  background-color: var(--primary);
  scroll-behavior: smooth;
  @media (max-width: 600px) {
    grid-column: span 2;
    padding: 1rem;
  }
`;

function Homepage() {
  return (
    <StyledContainer>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </StyledContainer>
  );
}

export default Homepage;
