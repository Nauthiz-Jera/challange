import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropDown extends Component {
  static propTypes = {
    categories: PropTypes.array,
    onSelect: PropTypes.func,
    selectedCategory: PropTypes.string.isRequired,
  };
  static defaultProps = {
    onSelect: () => {},
    categories: [],
  };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const selectedValue = e.target.value;

    this.props.onSelect(selectedValue);
  }

  render() {
    const { categories, selectedCategory } = this.props;
    return (
      <select name="category" onChange={this.onChange} value={selectedCategory}>
        {categories.map(category => (
          <option key={category.value} value={category.value}>
            {category.title}
          </option>
        ))}
      </select>
    );
  }
}

export default DropDown;
