import React, { useState, useEffect, useRef } from 'react';

import Option from '../option';
import { KeyCodes, SortOptions } from '../../constants';

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(`popular`);
  const [nameSelected, setNameSelected] = useState(`Popular`);

  const dropdownRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    window.addEventListener(`click`, handleOutsideClick);
    return () => window.removeEventListener(`click`, handleOutsideClick);
  }, [isOpen]);

  const handleOutsideClick = e => {
    const dropdown = dropdownRef.current.contains(e.target);
    const button = buttonRef.current.contains(e.target);
    if (isOpen && !dropdown && !button) {
      setIsOpen(false);
    }
  };

  const onEnterKeyPress = e => {
    if (e.key === KeyCodes.ENTER) {
      setIsOpen(isOpen => !isOpen);
    }
  };

  const onEscKeyDown = e => {
    if (e.key === KeyCodes.ESCAPE) {
      setIsOpen(false);
    }
  };

  const onButtonClick = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const onOptionSelect = (sortType, name) => {
    setIsOpen(false);
    setSelected(sortType);
    setNameSelected(name);
  };

  return (
    <div className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by </span>
      <span
        type='button'
        className='places__sorting-type'
        onClick={onButtonClick}
        onKeyPress={onEnterKeyPress}
        tabIndex={0}
        ref={buttonRef}
      >
        {nameSelected}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select' />
        </svg>
      </span>
      <ul
        onKeyDown={onEscKeyDown}
        ref={dropdownRef}
        className={`${
          isOpen && `places__options--opened`
        } places__options places__options--custom`}
        tabIndex={-1}
      >
        {SortOptions.map(option => {
          return (
            <Option
              onSelectOption={onOptionSelect}
              isSelected={selected === option.isSelected}
              sortType={option.sortType}
              name={option.name}
              button={buttonRef}
              key={option.sortType}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
