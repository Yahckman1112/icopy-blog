import React from "react";
import CopyLand from "./copyLand/copyLand";
import CopyBody from "./copyBody/copyBody";
import CopyText from "./copyText/copText";

function CopyWriting(props) {
  return (
    <div>
      <CopyLand />
      <CopyBody />
      <CopyText />
    </div>
  );
}

export default CopyWriting;
