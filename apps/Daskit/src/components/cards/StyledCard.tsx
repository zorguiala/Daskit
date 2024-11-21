import React from "react";
import styled from "styled-components";
import { Brush } from "lucide-react";

const Card = styled.div`
  max-width: 345px;
  background: ${(props) => (props.theme.mode === "dark" ? "#1f2937" : "white")};
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  color: ${(props) => (props.theme.mode === "dark" ? "white" : "inherit")};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

const Content = styled.div`
  padding: 0 1rem 1rem;
  color: ${(props) => (props.theme.mode === "dark" ? "#9ca3af" : "#4b5563")};
`;

const StyledCard: React.FC = () => {
  return (
    <Card>
      <Header>
        <Brush size={20} color="#6366f1" />
        <Title>Styled Components</Title>
      </Header>
      <Content>
        This card is built using Styled Components, demonstrating
        component-based styling with dynamic theming support.
      </Content>
    </Card>
  );
};

export default StyledCard;
