/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { usePrefix } from '../../internal/usePrefix';

export interface FluidDropdownSkeletonProps {
  /**
   * Specify an optional className to add.
   */
  className?: string;
}

const FluidDropdownSkeleton: React.FC<FluidDropdownSkeletonProps> = ({
  className,
  ...rest
}) => {
  const prefix = usePrefix();
  const wrapperContainerClasses = cx(
    className,
    `${prefix}--list-box__wrapper--fluid`
  );
  const wrapperClasses = cx(`${prefix}--skeleton`, `${prefix}--list-box`);

  return (
    <div className={wrapperContainerClasses}>
      <div className={wrapperClasses} {...rest}>
        <span className={`${prefix}--list-box__label`} />
        <div className={`${prefix}--list-box__field`} />
      </div>
    </div>
  );
};

FluidDropdownSkeleton.propTypes = {
  /**
   * Specify an optional className to add.
   */
  className: PropTypes.string,
};

export default FluidDropdownSkeleton;
