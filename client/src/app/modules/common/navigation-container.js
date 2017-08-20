import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { COLORS, PADDING, MARGIN } from '../../constants/styles';
import { ALL_LINKS } from '../../constants/links';

const Container = styled.div`
  padding: ${PADDING.NORMAL};
`;

const NavLink = styled.a`
  display: block;
  cursor: pointer;
  text-decoration: underline;
  margin: ${MARGIN.HALF};
  &:hover{
    text-decoration: none;
    color: ${COLORS.BLUE.ROYAL_BLUE};
  }
  &.active{
    text-decoration: none;
    color: ${COLORS.BLUE.ROYAL_BLUE};
    }
`;

class NavigationContainer extends Component {
  render() {
    const { history } = this.props;
    const { pathname } = this.props.location;
    return (
      <Container>
        {ALL_LINKS.map((link, index) => (
          <NavLink
            key={index}
            className={pathname === link.value ? 'active' : ''}
            onClick={() => history.push(link.value)}
          >
            {link.title}
          </NavLink>
        ))}
      </Container>
    );
  }
}

export default withRouter(NavigationContainer);
