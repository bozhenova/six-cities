import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ActionCreator } from '../../redux/reducer/data/actions';
import { KeyCodes } from '../../constants';

export class Option extends PureComponent {
  static propTypes = {
    sortType: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    setSortType: PropTypes.func.isRequired,
    onSelectOption: PropTypes.func.isRequired,
    onFocusButton: PropTypes.func.isRequired
  };

  handleOptionClick = () => {
    const {
      sortType,
      name,
      setSortType,
      onSelectOption,
      onFocusButton
    } = this.props;

    onSelectOption(sortType, name);
    setSortType(sortType);
    onFocusButton();
  };

  handleKeyPressEnter = e => {
    const {
      onFocusButton,
      name,
      sortType,
      onSelectOption,
      setSortType
    } = this.props;

    if (e.keyCode === KeyCodes.ENTER) {
      onSelectOption(sortType, name);
      setSortType(sortType);
      onFocusButton();
    }
  };

  render() {
    const { isSelected, sortType, name } = this.props;

    return (
      <li
        className={`${isSelected && `places__option--active`} places__option`}
        onKeyPress={this.handleKeyPressEnter}
        onClick={this.handleOptionClick}
        tabIndex={0}
        data-value={sortType}
      >
        {name}
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setSortType: type => dispatch(ActionCreator.setSortType(type))
});

export default connect(null, mapDispatchToProps)(Option);
