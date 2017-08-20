import React, { Component } from 'react';
import styled from 'styled-components';
import { MARGIN, FONT_SIZE } from '../../constants/styles';

const NavContainer = styled.div`
  display: flex;
  background: #3e3e3e;
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const HamburgerContainer = styled.div`
  color: white;
  margin: ${MARGIN.HALF};
  font-size: ${FONT_SIZE.FONT_24PX};
  cursor: pointer;
`;

const NavIcons = styled.div`
  display: flex;
  color: white;
  
`;

const CenterTitle = styled.div`
  display: flex;
  font-size: 22px;
`;

const TitleOne = styled.span`
  color: #b59677;
`;

const TitleTwo = styled.span`
  color: white;
`;

class Nav extends Component {
  render() {
    const { isOpen, onClick } = this.props;
    return (
      <NavContainer>
        <HamburgerContainer>
          <i className="fa fa-bars" aria-hidden="true" onClick={() => onClick(!isOpen)} />
        </HamburgerContainer>
        <CenterTitle>
          <TitleOne>
            Widget
          </TitleOne>
          <TitleTwo>
            Shop
          </TitleTwo>
        </CenterTitle>
        <NavIcons />
      </NavContainer>
    );
  }
}

export default Nav;
