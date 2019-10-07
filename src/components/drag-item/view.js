import React, { forwardRef } from "react";
import './style.css';

export default forwardRef(({ data, classValue }, ref) => {
  return (
    <div className={`item ${classValue}`} ref={ref}>
      {data.text}
    </div>
  );
});
