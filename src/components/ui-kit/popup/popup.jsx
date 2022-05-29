import React from "react";
import PropTypes from 'prop-types';
import { classNames, objectUtils } from "../../utils";

const classes = {
  root: "pct-ui-popup-root"
}

export const Popup = React.forwardRef((props, forwardRef) => {

  const handleContainerClick = (e) => {
    e.stopPropagation();
  }

  if (!props.open) return null


  const styles = {
    root: {
      backdropFilter: `blur(${props.backdrop}px)`,
      ...props.styles.root
    }
  }


  const otherProps = objectUtils.removeKeys(props, ["style", "className", "onClick", "classes",
    "styles", "open", "role", "children", "onOverlayClick"]);

  return (
    <div
      data-testid="root"
      style={styles.root}
      onClick={props?.onOverlayClick}
      className={classNames(classes.root, props.classes?.root)}>
      <div
        role={props.role}
        ref={forwardRef}
        style={props.styles?.container}
        className={props.classes?.container}
        onClick={handleContainerClick}
        {...otherProps}>
        {props.children}
      </div>
    </div>
  )
})


Popup.defaultProps = {
  classes: {},
  styles: {},
  open: false,
  role: 'dialog',
  children: null,
  backdrop: 4,
  onOverlayClick: null
};

Popup.propTypes = {
  classes: PropTypes.object,
  styles: PropTypes.object,
  open: PropTypes.bool,
  role: PropTypes.string,
  backdrop: PropTypes.number,
  children: PropTypes.node,
  onOverlayClick: PropTypes.func
}