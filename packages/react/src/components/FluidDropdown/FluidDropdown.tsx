/**
 * Copyright IBM Corp. 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React, { ForwardedRef } from 'react';
import classnames from 'classnames';
import Dropdown, { DropdownProps } from '../Dropdown';
import { usePrefix } from '../../internal/usePrefix';
import { FormContext } from '../FluidForm/FormContext';
export interface OnChangeData<ItemType> {
  selectedItem: ItemType | null;
}

export interface FluidDropdownProps<ItemType> extends DropdownProps<ItemType> {
  /**
   * Specify an optional className to be applied to the outer FluidForm wrapper
   */
  className?: string;

  /**
   * Specify the direction of the dropdown. Can be either top or bottom.
   */
  direction?: 'top' | 'bottom';

  /**
   * Specify whether the `<input>` should be disabled
   */
  disabled?: boolean;

  /**
   * Specify a custom `id` for the `<input>`
   */
  id: string;

  /**
   * Allow users to pass in an arbitrary item or a string (in case their items are an array of strings)
   * from their collection that are pre-selected
   */
  initialSelectedItem?: ItemType;

  /**
   * Specify if the currently selected value is invalid.
   */
  invalid?: boolean;

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText?: React.ReactNode;

  /**
   * Specify if the `FluidDropdown` should render its menu items in condensed mode
   */
  isCondensed?: boolean;

  /**
   * Function to render items as custom components instead of strings.
   * Defaults to null and is overridden by a getter
   */
  itemToElement?: React.JSXElementConstructor<ItemType> | null;

  /**
   * Helper function passed to downshift that allows the library to render a
   * given item to a string label. By default, it extracts the `label` field
   * from a given item to serve as the item label in the list.
   */
  itemToString?(item: ItemType | null): string;

  /**
   * We try to stay as generic as possible here to allow individuals to pass
   * in a collection of whatever kind of data structure they prefer
   */
  items: ItemType[];

  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  label: NonNullable<React.ReactNode>;

  /**
   * `onChange` is a utility for this controlled component to communicate to a
   * consuming component what kind of internal state changes are occurring.
   */
  onChange?(data: OnChangeData<ItemType>): void;

  /**
   * An optional callback to render the currently selected item as a react element instead of only
   * as a string.
   */
  renderSelectedItem?(item: ItemType): React.ReactNode;

  /**
   * In the case you want to control the dropdown selection entirely.
   * This value is the selected item from the list of items
   */
  selectedItem?: ItemType;

  /**
   * Provide the title text that will be read by a screen reader when
   * visiting this control
   */
  titleText: React.ReactNode;

  /**
   * Callback function for translating ListBoxMenuIcon SVG title
   */
  translateWithId?: (id: string) => string;

  /**
   * Specify whether the control is currently in warning state
   */
  warn?: boolean;

  /**
   * Provide the text that is displayed when the control is in warning state
   */
  warnText?: React.ReactNode;
}

const FluidDropdown = React.forwardRef(function FluidDropdown<ItemType>(
  { className, isCondensed, ...other }: FluidDropdownProps<ItemType>,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const prefix = usePrefix();
  const classNames = classnames(
    `${prefix}--list-box__wrapper--fluid`,
    className,
    { [`${prefix}--list-box__wrapper--fluid--condensed`]: isCondensed }
  );

  return (
    <FormContext.Provider value={{ isFluid: true }}>
      <Dropdown ref={ref} className={classNames} {...other} />
    </FormContext.Provider>
  );
});

FluidDropdown.propTypes = {
  /**
   * Specify an optional className to be applied to the outer FluidForm wrapper
   */
  className: PropTypes.string,

  /**
   * Specify the direction of the dropdown. Can be either top or bottom.
   */
  direction: PropTypes.oneOf(['top', 'bottom']),

  /**
   * Specify whether the `<input>` should be disabled
   */
  disabled: PropTypes.bool,

  /**
   * Specify a custom `id` for the `<input>`
   */
  id: PropTypes.string.isRequired,

  /**
   * Allow users to pass in an arbitrary item or a string (in case their items are an array of strings)
   * from their collection that are pre-selected
   */
  initialSelectedItem: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
  ]),

  /**
   * Specify if the currently selected value is invalid.
   */
  invalid: PropTypes.bool,

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: PropTypes.node,

  /**
   * Specify if the `FluidDropdown` should render its menu items in condensed mode
   */
  isCondensed: PropTypes.bool,

  /**
   * Function to render items as custom components instead of strings.
   * Defaults to null and is overridden by a getter
   */
  itemToElement: PropTypes.func,

  /**
   * Helper function passed to downshift that allows the library to render a
   * given item to a string label. By default, it extracts the `label` field
   * from a given item to serve as the item label in the list.
   */
  itemToString: PropTypes.func,

  /**
   * We try to stay as generic as possible here to allow individuals to pass
   * in a collection of whatever kind of data structure they prefer
   */
  items: PropTypes.array.isRequired,

  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  label: PropTypes.node.isRequired,

  /**
   * `onChange` is a utility for this controlled component to communicate to a
   * consuming component what kind of internal state changes are occurring.
   */
  onChange: PropTypes.func,

  /**
   * An optional callback to render the currently selected item as a react element instead of only
   * as a string.
   */
  renderSelectedItem: PropTypes.func,

  /**
   * In the case you want to control the dropdown selection entirely.
   */
  selectedItem: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
  ]),

  /**
   * Provide the title text that will be read by a screen reader when
   * visiting this control
   */
  titleText: PropTypes.node,

  /**
   * Callback function for translating ListBoxMenuIcon SVG title
   */
  translateWithId: PropTypes.func,

  /**
   * Specify whether the control is currently in warning state
   */
  warn: PropTypes.bool,

  /**
   * Provide the text that is displayed when the control is in warning state
   */
  warnText: PropTypes.node,
};

export default FluidDropdown;
