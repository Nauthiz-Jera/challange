import React, { Component } from 'react';
import styled from 'styled-components';
import { COLORS, MARGIN, PADDING, FONT_SIZE, BUTTON_SIZE } from '../../constants/styles';
import EN from '../../constants/translations/en';
import DropDown from '../common/dropdown';
import { ALL, CATEGORIES, COLOR_TYPES, SIZES, FINISHES } from '../../constants/widgets';
import PlusIcon from '../common/plusIcon';
import MinusIcon from '../common/minusIcon';
import Button from '../common/button';

const Form = styled.form`
  border: 1px solid ${COLORS.GREY.NOBEL};
  display: block;
  margin: ${MARGIN.NORMAL};
  padding: ${PADDING.NORMAL};
`;

const DropDownContainer = styled.div`
  padding: ${PADDING.NORMAL};
`;

const UpdateContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  margin: ${MARGIN.NORMAL};
`;

const ButtonContainer = styled.div`
  display:flex;
  justify-content: center;
  padding: ${PADDING.NORMAL};
`;

class AddWidgets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: ALL.value,
      color: ALL.value,
      finishes: ALL.value,
      sizes: ALL.value,
      quantity: 0,
    };

    this.onSelect = this.onSelect.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.addWidget = this.addWidget.bind(this);
  }

  onSelect(description, value) {
    this.setState({
      [description]: value,
    });
  }

  decrementQuantity(widgetQuantity) {
    let newQuantity = widgetQuantity > 0 ? widgetQuantity - 1 : 0;
    this.setState({
      quantity: newQuantity,
    });
  }

  incrementQuantity(widgetQuantity) {
    let newQuantity = widgetQuantity + 1;
    this.setState({
      quantity: newQuantity,
    });
  }

  addWidget() {
    fetch('/addWidget', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(this.state),
    });
  }

  render() {
    const { category, color, finishes, sizes, quantity } = this.state;
    return (
      <Form>
        <DropDownContainer>
          {`${EN.widgets.descriptions.category}: `}
          <DropDown
            categories={CATEGORIES}
            selectedCategory={category}
            onSelect={value => this.onSelect('category', value)}
          />
        </DropDownContainer>
        <DropDownContainer>
          {`${EN.widgets.descriptions.color}: `}
          <DropDown
            categories={COLOR_TYPES}
            selectedCategory={color}
            onSelect={value => this.onSelect('color', value)}
          />
        </DropDownContainer>
        <DropDownContainer>
          {`${EN.widgets.descriptions.finish}: `}
          <DropDown
            categories={FINISHES}
            selectedCategory={finishes}
            onSelect={value => this.onSelect('finishes', value)}
          />
        </DropDownContainer>
        <DropDownContainer>
          {`${EN.widgets.descriptions.size}: `}
          <DropDown
            categories={SIZES}
            selectedCategory={sizes}
            onSelect={value => this.onSelect('sizes', value)}
          />
        </DropDownContainer>
        <UpdateContainer>
          {`${EN.widgets.descriptions.quantity}:`}
          <MinusIcon size={FONT_SIZE.FONT_14PX} onClick={() => this.decrementQuantity(quantity)} />
          {quantity}
          <PlusIcon size={FONT_SIZE.FONT_14PX} onClick={() => this.incrementQuantity(quantity)} />
        </UpdateContainer>
        <ButtonContainer>
          <Button text={'Add Widget'} size={BUTTON_SIZE.LARGE} onClick={this.addWidget} />
        </ButtonContainer>
      </Form>
    );
  }
}

export default AddWidgets;
