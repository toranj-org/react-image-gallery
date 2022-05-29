import React from "react";
import PropTypes from 'prop-types';
import { classNames } from "../utils";

const classes = {
  root: "pct-ui-popup-root"
}

export const Popup = React.forwardRef((props, forwardRef) => {

  const handleContainerClick = (e) => {
    e.stopPropagation();
  }

  if (!props.isOpen) return null

  return (
    <div
      style={props.styles?.root}
      onClick={props?.onOverlayClick}
      className={classNames(classes.root, props.classes?.root)}>
      <div
        ref={forwardRef}
        style={props.styles?.container}
        className={props.classes?.container}
        onClick={handleContainerClick}>
        {props.children}
      </div>
    </div>
  )
})


Popup.defaultProps = {
  classes: {},
  styles: {},
  children: null,
  isOpen: false,
  onOverlayClick: null
};

Popup.propTypes = {
  classes: PropTypes.object,
  styles: PropTypes.object,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onOverlayClick: PropTypes.func
}