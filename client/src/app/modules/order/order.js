import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { deleteFromOrder, deleteOrder } from '../../state/actions/order';
import styled from 'styled-components';
import { COLORS, MARGIN, PADDING, FONT_SIZE, BUTTON_SIZE } from '../../constants/styles';
import EN from '../../constants/translations/en';
import MinusIcon from '../common/minusIcon';
import Button from '../common/button';

const OrderContainer = styled.div`
  display: flex;
  flex-flow: column;
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
  display: block;
  float: left;
  width: 100%;
  text-align: center;
`;
const ButtonContainer = styled.div`
  display:flex;
  justify-content: space-around;
  padding: ${PADDING.NORMAL};
`;

const mapStateToProps = state => ({
  order: state.order.order,
});

const mapDispatchToProps = dispatch => ({
  deleteFromOrder: widget => dispatch(deleteFromOrder(widget)),
  deleteOrder: () => dispatch(deleteOrder()),
});

class Order extends Component {
  render() {
    const { order, deleteFromOrder, deleteOrder } = this.props;
    function addOrder(order) {
      return function() {
        fetch('/submitOrder', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
          },
          body: JSON.stringify(order),
        });
      };
    }
    return (
      <div>
        Orders:
        <OrderContainer>
          {_.map(order, widget => (
            <DescriptionContainer key={widget._id}>
              <Description>{`${EN.widgets.descriptions.category}: ${widget.category}`}</Description>
              <Description>{`${EN.widgets.descriptions.color}: ${widget.color}`}</Description>
              <Description>{`${EN.widgets.descriptions.finish}: ${widget.finish}`}</Description>
              <Description>{`${EN.widgets.descriptions.scent}: ${widget.scent}`}</Description>
              <Description>{`${EN.widgets.descriptions.size}: ${widget.size}`}</Description>
              <Description>{`${EN.widgets.descriptions.haunted}: ${widget.haunted}`}</Description>
              <MinusIcon size={FONT_SIZE.FONT_14PX} onClick={() => deleteFromOrder(widget._id)} />
            </DescriptionContainer>
          ))}
        </OrderContainer>
        <ButtonContainer>
          <Button text={'Submit Order'} size={BUTTON_SIZE.LARGE} onClick={addOrder(order)} />
          <Button text={'Delete Order'} size={BUTTON_SIZE.LARGE} onClick={deleteOrder} />
        </ButtonContainer>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
