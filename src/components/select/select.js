import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import withSelect from '../../hoc/with-select';
import Option from '../option';

export class Select extends PureComponent {
  static propTypes = {
    onKeyPressOpenDropdown: PropTypes.func.isRequired,
    onClickOpenDropdown: PropTypes.func.isRequired,
    onCloseDropdown: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    selected: PropTypes.string.isRequired,
    onSelectOption: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    selectedName: PropTypes.string.isRequired,
    onKeyDownCloseDropdown: PropTypes.func.isRequired
  };

  dropdown = createRef();
  button = createRef();

  componentDidMount() {
    document.addEventListener(`click`, this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener(`click`, this.handleOutsideClick);
  }

  handleOutsideClick = e => {
    const { isOpen, onCloseDropdown } = this.props;
    const dropdown = this.dropdown.current.contains(e.target);
    const button = this.button.current.contains(e.target);

    if (isOpen && !dropdown && !button) {
      onCloseDropdown();
    }
  };

  onFocusButton = () => {
    this.button.current.focus();
  };

  render() {
    const {
      onKeyPressOpenDropdown,
      onClickOpenDropdown,
      isOpen,
      selected,
      onSelectOption,
      options,
      selectedName,
      onKeyDownCloseDropdown
    } = this.props;
    return (
      <div className='places__sorting' action='#' method='get'>
        <span className='places__sorting-caption'>Sort by </span>
        <span
          type='button'
          className='places__sorting-type'
          onClick={onClickOpenDropdown}
          onKeyPress={onKeyPressOpenDropdown}
          tabIndex={0}
          ref={this.button}
        >
          {selectedName}
          <svg className='places__sorting-arrow' width='7' height='4'>
            <use xlinkHref='#icon-arrow-select' />
          </svg>
        </span>
        <ul
          onKeyDown={onKeyDownCloseDropdown}
          ref={this.dropdown}
          className={`${
            isOpen && `places__options--opened`
          } places__options places__options--custom`}
          tabIndex={-1}
        >
          {options.map(option => {
            return (
              <Option
                onSelectOption={onSelectOption}
                isSelected={selected === option.isSelected}
                onFocusButton={this.onFocusButton}
                sortType={option.sortType}
                name={option.name}
                button={this.button}
                key={option.sortType}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

const SelectWrapped = withSelect(Select);
export default SelectWrapped;
