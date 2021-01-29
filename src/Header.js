import React from 'react'

import styled from  'styled-components';

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Header2>Circle Up</Header2>
      </Container>
    );
  }
}

const Header2 = styled.h2`
  color: #ffffff;
  margin: 0;
  padding: 25px;
  textAlign: left;
`;

const Container = styled.div`
  background-color: #4CAF50;
  height: 80px;
  width: 100%;
`;

export default Header;