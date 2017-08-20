import React, { Component } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/styles';
import NavigationContainer from '../common/navigation-container';

const MenuContainer = styled.div`
  display: ${props => (props.isOpen ? 'inline-block' : 'none')};
  background-color: ${COLORS.GREY.VERY_LIGHT_GREY};
  position: fixed;
  left:0;
  height:100vh;
  width: 175px;
`;

class Menu extends Component {
  render() {
    const { isOpen } = this.props;
    return (
      <MenuContainer isOpen={isOpen}>
        <NavigationContainer />
      </MenuContainer>
    );
  }
}

export default Menu;
