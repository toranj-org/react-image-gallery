import React from "react";

export const Popup = (props) => {


  const handelOverlayClick = (e) => {
    if (props.onOverlayClick) {
      props.onOverlayClick();
    }
  }

  return props.isOpen && (
    <div
      onClick={handelOverlayClick}
      className='pct-ui-popup-overlay'>
      {props.children}
    </div>
  );
}