import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { ActionCreator } from '../../redux/reducer/data/actions';
import { KeyCodes } from '../../constants';

const Option = ({ sortType, name, onSelectOption, isSelected }) => {
  const dispatch = useDispatch();

  const onOptionClick = () => {
    onSelectOption(sortType, name);
    dispatch(ActionCreator.setSortType(sortType));
  };

  const onEnterKeyPress = e => {
    if (e.key === KeyCodes.ENTER) {
      onSelectOption(sortType, name);
      dispatch(ActionCreator.setSortType(sortType));
    }
  };

  return (
    <li
      className={`${isSelected && `places__option--active`} places__option`}
      onKeyPress={onEnterKeyPress}
      onClick={onOptionClick}
      tabIndex={0}
      data-value={sortType}
    >
      {name}
    </li>
  );
};

Option.propTypes = {
  sortType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSelectOption: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default Option;
