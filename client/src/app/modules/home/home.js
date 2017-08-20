import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../nav/nav';
import Widgets from '../widgets/widgets';
import Quantity from '../quantity/quantity';
import AddWidgets from '../addWidgets/addWidgets';
import Order from '../order/order';
import Menu from '../menu/menu';
import { toggleMenu } from '../../state/actions/toggle';

const MainViewContainer = styled.div`
  display: block;
  width: ${props => (props.isOpen ? 'calc(100% - 175px)' : '100%')};
  float: right;
`;

const mapStateToProps = state => ({
  toggle: state.toggle.toggle,
});

const mapDispatchToProps = dispatch => ({
  toggleMenu: toggle => dispatch(toggleMenu(toggle)),
});

class Home extends Component {
  render() {
    const { toggle, toggleMenu } = this.props;
    return (
      <Router>
        <div>
          <Nav isOpen={toggle} onClick={toggleMenu} />
          <Menu isOpen={toggle} />
          <MainViewContainer isOpen={toggle}>
            <Route exact path="/" component={Widgets} />
            <Route exact path="/quantity" component={Quantity} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/add" component={AddWidgets} />
          </MainViewContainer>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
