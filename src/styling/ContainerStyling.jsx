import styled from 'styled-components';

const Container = styled.div`
  color: blue;
  background-color: lightgray;
  padding: 10px;
`;

const ContainerStyling = () => {
    return (
        <Container>
            Hello, Styled Components!
        </Container>
    );
};

export default ContainerStyling;
