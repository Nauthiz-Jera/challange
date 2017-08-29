import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { selectCategory } from '../../state/actions/category';
import { selectFinish } from '../../state/actions/finish';
import { selectSize } from '../../state/actions/size';
import { addToOrder } from '../../state/actions/order';
import styled from 'styled-components';
import { COLORS, MARGIN, PADDING, FONT_SIZE } from '../../constants/styles';
import { fetchAllWidgets } from '../../state/actions/app';
import { CATEGORIES, SIZES, FINISHES } from '../../constants/widgets';
import EN from '../../constants/translations/en';
import DropDown from '../common/dropdown';
import CogIcon from '../common/cogIcon';

const WidgetContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-flow: row wrap;
`;

const DropDownWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ItemContainer = styled.div`
  display: block;
  align-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  color: ${COLORS.BLACK.BLACK};
  border: 1px solid ${COLORS.GREY.VERY_LIGHT_GREY};
  padding: ${PADDING.QUARTER};
  margin: ${MARGIN.QUARTER};
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.75);
`;

const Description = styled.span`
  display: block;
  float: left;
  width: 100%;
  text-align: center;
`;

const CartContainer = styled.div`
  display:flex;
  justify-content: flex-end;
  width: 100%;
  font-size: ${FONT_SIZE.FONT_24PX};
`;

const DropDownContainer = styled.div`
  padding: ${PADDING.NORMAL};
`;

const cartStyle = {
  padding: PADDING.THREE_QUARTERS,
  cursor: 'pointer',
};

const mapStateToProps = state => ({
  selectedCategory: state.category.selectedCategory,
  selectedFinish: state.finish.selectedFinish,
  selectedSize: state.size.selectedSize,
  widgets: state.app.widgets,
  order: state.order.order,
});

const mapDispatchToProps = dispatch => ({
  selectCategory: category => dispatch(selectCategory(category)),
  selectFinish: finish => dispatch(selectFinish(finish)),
  selectSize: size => dispatch(selectSize(size)),
  fetchAllWidgets: () => dispatch(fetchAllWidgets()),
  addToOrder: widgetToAdd => dispatch(addToOrder(widgetToAdd)),
});

class Widgets extends Component {
  componentDidMount() {
    this.props.fetchAllWidgets();
  }
  render() {
    const {
      selectedCategory,
      selectCategory,
      selectSize,
      selectedSize,
      selectFinish,
      selectedFinish,
      widgets,
      addToOrder,
    } = this.props;
    function filterWidgets(category, size, finish) {
      return function(widgets) {
        return byCategory(widgets, category) && bySize(widgets, size) && byFinish(widgets, finish);
      };
    }
    function byCategory(widgets, category) {
      return widgets.category === category || category === 'ALL';
    }
    function bySize(widgets, size) {
      return widgets.size === size || size === 'ALL';
    }
    function byFinish(widgets, finish) {
      return widgets.finish === finish || finish === 'ALL';
    }
    return (
      <div>
        <DropDownWrapper>
          <DropDownContainer>
            {`${EN.widgets.captions.categoryDropDown}: `}
            <DropDown
              categories={CATEGORIES}
              onSelect={selectCategory}
              selectedCategory={selectedCategory}
            />
          </DropDownContainer>
          <DropDownContainer>
            {`${EN.widgets.captions.sizeDropDown}: `}
            <DropDown categories={SIZES} onSelect={selectSize} selectedCategory={selectedSize} />
          </DropDownContainer>
          <DropDownContainer>
            {`${EN.widgets.captions.finishDropDown}: `}
            <DropDown
              categories={FINISHES}
              onSelect={selectFinish}
              selectedCategory={selectedFinish}
            />
          </DropDownContainer>
        </DropDownWrapper>
        <WidgetContainer>
          {widgets
            .filter(filterWidgets(selectedCategory, selectedSize, selectedFinish))
            .map(widget => (
              <ItemContainer key={widget._id} color={widget.color}>
                <CogIcon color={widget.color} shade={widget.shade} />
                <Description
                >{`${EN.widgets.descriptions.category}: ${widget.category}`}</Description>
                <Description>{`${EN.widgets.descriptions.color}: ${widget.color}`}</Description>
                <Description>{`${EN.widgets.descriptions.finish}: ${widget.finish}`}</Description>
                <Description>{`${EN.widgets.descriptions.scent}: ${widget.scent}`}</Description>
                <Description>{`${EN.widgets.descriptions.size}: ${widget.size}`}</Description>
                <Description>{`${EN.widgets.descriptions.haunted}: ${widget.haunted}`}</Description>
                <Description
                >{`${EN.widgets.descriptions.quantity}: ${widget.quantity}`}</Description>
                <CartContainer>
                  <i
                    className="fa fa-cart-plus"
                    aria-hidden="true"
                    style={cartStyle}
                    onClick={() => addToOrder(widget)}
                  />
                </CartContainer>
              </ItemContainer>
            ))}
        </WidgetContainer>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Widgets));
