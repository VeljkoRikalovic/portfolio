import styled from "styled-components";
import Info from "../components/Info";
import Navigation from "../components/Navigation";
import Homepage from "./Homepage";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  grid-template-rows: 0.1fr 1fr;
  gap: 5px 10px;
  margin: 0 7rem;
  overflow: hidden;
  @media (max-width: 900px) {
    margin: 0;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    overflow-y: auto;
  }
`;

function AppLayout() {
  return (
    <Container>
      <Info />
      <Navigation />
      <Homepage />
    </Container>
  );
}

export default AppLayout;
