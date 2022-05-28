import React from "react";

export const Popup = (props) => {


  const handelOverlayClick = (e) => {
    if (props.onOverlayClick) {
      props.onOverlayClick();
    }
  }

  const handleContainerClick = (e) => {
    e.stopPropagation();
  }

  return props.isOpen && (
    <div
      style={props.styles?.overlay}
      onClick={handelOverlayClick}
      className='pct-ui-popup-overlay'>
      <div
        style={props.styles?.container}
        onAnimationEnd={props?.onAnimationEnd}
        onClick={handleContainerClick}>
        {props.children}
      </div>
    </div>
  );
}