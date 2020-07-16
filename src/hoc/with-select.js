import React, { PureComponent } from 'react';
import { SortOptions, KeyCodes } from '../constants';

const withSelect = Component => {
  class WithSelect extends PureComponent {
    state = {
      isOpen: false,
      selected: `popular`,
      nameSelected: `Popular`
    };

    closeDropdown = () => {
      this.setState({ isOpen: false });
    };

    handleClick = () => {
      const { isOpen } = this.state;
      this.setState({ isOpen: !isOpen });
    };

    handleKeyPressEnter = e => {
      const { isOpen } = this.state;
      if (e.key === KeyCodes.ENTER) {
        this.setState({ isOpen: !isOpen });
      }
    };

    handleKeyDownEsc = e => {
      if (e.key === KeyCodes.ESCAPE) {
        this.setState({ isOpen: false });
      }
    };

    onSelectOption = (sortType, name) => {
      this.setState(currentState => ({
        isOpen: !currentState.isOpen,
        selected: sortType,
        nameSelected: name
      }));
    };

    render() {
      const { selected, nameSelected } = this.state;

      return (
        <Component
          {...this.props}
          options={SortOptions}
          selectedName={nameSelected}
          onClickOpenDropdown={this.handleClick}
          onKeyPressOpenDropdown={this.handleKeyPressEnter}
          onKeyDownCloseDropdown={this.handleKeyDownEsc}
          onCloseDropdown={this.closeDropdown}
          onSelectOption={this.onSelectOption}
          button={this.button}
          dropdown={this.selectList}
          isOpen={this.state.isOpen}
          selected={selected}
        />
      );
    }
  }

  return WithSelect;
};

export default withSelect;
