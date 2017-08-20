import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { COLORS, FONT_SIZE, FLOAT, PADDING, MARGIN, BUTTON_SIZE } from '../../constants/styles';
import {
  fetchAllWidgets,
  incrementWidgetQuantity,
  decrementWidgetQuantity,
} from '../../state/actions/app';
import EN from '../../constants/translations/en';
import CogIcon from '../common/cogIcon';
import PlusIcon from '../common/plusIcon';
import MinusIcon from '../common/minusIcon';
import Button from '../common/button';

const QuantityContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

const UpdateContainer = styled.div`
  display:flex;
  justify-content: space-around;
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${PADDING.HALF};
  margin: ${MARGIN.FIFTH};
  border: 1px solid ${COLORS.GREY.NOBEL};
  border-radius: 5px;
`;

const Description = styled.span`
  display: inline-block;
  float: left;
  text-align: center;
  margin: 0 ${MARGIN.HALF};
`;
const ButtonContainer = styled.div`
  display:flex;
  justify-content: center;
  padding: ${PADDING.NORMAL};
`;

const mapStateToProps = state => ({
  widgets: state.app.widgets,
});

const mapDispatchToProps = dispatch => ({
  fetchAllWidgets: () => dispatch(fetchAllWidgets()),
  incrementWidgetQuantity: id => dispatch(incrementWidgetQuantity(id)),
  decrementWidgetQuantity: id => dispatch(decrementWidgetQuantity(id)),
});

class Quantity extends Component {
  componentDidMount() {
    this.props.fetchAllWidgets();
  }
  render() {
    const { widgets, incrementWidgetQuantity, decrementWidgetQuantity } = this.props;
    function updateQuantities(widgets) {
      return function() {
        fetch('/updateQuantity', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
          },
          body: JSON.stringify(widgets),
        });
      };
    }
    return (
      <QuantityContainer>
        {widgets.map(widget => (
          <DescriptionContainer key={widget._id}>
            <CogIcon
              color={widget.color}
              shade={widget.shade}
              size={FONT_SIZE.FONT_24PX}
              float={FLOAT.LEFT}
            />
            <Description>{`${EN.widgets.descriptions.category}: ${widget.category}`}</Description>
            <Description>{`${EN.widgets.descriptions.color}: ${widget.color}`}</Description>
            <Description>{`${EN.widgets.descriptions.finish}: ${widget.finish}`}</Description>
            <Description>{`${EN.widgets.descriptions.scent}: ${widget.scent}`}</Description>
            <Description>{`${EN.widgets.descriptions.size}: ${widget.size}`}</Description>
            <Description>{`${EN.widgets.descriptions.haunted}: ${widget.haunted}`}</Description>
            <Description>
              <UpdateContainer>
                {`${EN.widgets.descriptions.quantity}:`}
                <MinusIcon
                  size={FONT_SIZE.FONT_14PX}
                  onClick={id => decrementWidgetQuantity(widget._id)}
                />
                {widget.quantity}
                <PlusIcon
                  size={FONT_SIZE.FONT_14PX}
                  onClick={id => incrementWidgetQuantity(widget._id)}
                />
              </UpdateContainer>
            </Description>
          </DescriptionContainer>
        ))}
        <ButtonContainer>
          <Button text={'Apply'} size={BUTTON_SIZE.LARGE} onClick={updateQuantities(widgets)} />
        </ButtonContainer>
      </QuantityContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quantity);
