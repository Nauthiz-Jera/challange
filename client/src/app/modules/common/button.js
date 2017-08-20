import React, { Component } from 'react';
import styled from 'styled-components';
import { COLORS, BUTTON_SIZE, PADDING } from '../../constants/styles';

const StyledButton = styled.button`
  background-color: ${props => props.color || COLORS.BLUE.ROYAL_BLUE};
  color: ${props => props.textColor || COLORS.WHITE.WHITE};
  padding: ${PADDING.HALF};
  width: ${props => props.size || BUTTON_SIZE.MEDIUM};
`;

class Button extends Component {
  render() {
    const { text, size, color, textColor, onClick } = this.props;
    return (
      <StyledButton size={size} color={color} text={textColor} type="button" onClick={onClick}>
        {text}
      </StyledButton>
    );
  }
}

export default Button;
