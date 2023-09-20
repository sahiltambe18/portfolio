import React from "react";
import './Sahil.css'

const Sahil = () => {
  return (
    <svg viewBox="0 0 960 300" className="w-11/12">
      <symbol id="s-text">
        <text textAnchor="middle" x="50%" y="80%">
          Sahil.{" "}
        </text>
        <text textAnchor="middle" x="52%" y="80%">
          Sahil.{" "}
        </text>
      </symbol>

      <g className="g-ants ">
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
      </g>
    </svg>
  );
};

export default Sahil;