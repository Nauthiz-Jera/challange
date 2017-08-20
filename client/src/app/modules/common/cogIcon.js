import React, { Component } from 'react';
import styled from 'styled-components';
import { COLORS, PADDING, FONT_SIZE, FLOAT } from '../../constants/styles';

const IconContainer = styled.div`
  color: ${props => props.color || COLORS.BLACK.BLACK};
  display: flex;
  font-size: ${props => props.size || FONT_SIZE.FONT_80PX};
  justify-content: center;
  float: ${props => props.float || FLOAT.NONE};
  padding: ${PADDING.QUARTER};
`;

class CogIcon extends Component {
  render() {
    const { color, shade, size, float } = this.props;
    return (
      <IconContainer color={color} shade={shade} size={size} float={float}>
        <i className="fa fa-cogs" aria-hidden="true" />
      </IconContainer>
    );
  }
}

export default CogIcon;
