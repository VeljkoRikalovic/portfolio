import styled from "styled-components";

const Container = styled.div`
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 25px;
  text-align: center;

  &:hover {
    padding: 0;
    color: ${(props) => props.$border};
    border: outset ${(props) => props.$border};
  }
`;

const Icon = styled.p`
  font-size: 4rem;
`;

function SkillList({ icon, name, color }) {
  return (
    <Container $border={color}>
      <Icon>{icon}</Icon>
      <h4>{name}</h4>
    </Container>
  );
}

export default SkillList;
