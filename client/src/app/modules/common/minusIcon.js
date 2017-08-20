import React, { Component } from 'react';
import styled from 'styled-components';
import { PADDING, FONT_SIZE } from '../../constants/styles';

const IconContainer = styled.div`
  display: flex;
  font-size: ${props => props.size || FONT_SIZE.FONT_80PX};
  justify-content: center;
  padding: ${PADDING.FIFTH};
  cursor: pointer;
`;

class minusIcon extends Component {
  render() {
    const { size, onClick } = this.props;
    return (
      <IconContainer size={size} onClick={onClick}>
        <i className="fa fa-minus-circle" aria-hidden="true" />
      </IconContainer>
    );
  }
}

export default minusIcon;
