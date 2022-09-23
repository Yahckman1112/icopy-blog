import React from "react";
import CopyTextUpper from "./copyTextUpper";
import { upTexts } from "./copyWritingText";
function CopyText(props) {
  return (
    <div>
      <CopyTextUpper
        title="Dear Busiines Owner !!!"
        text={upTexts.map((text) => (
          <p>{text.text}</p>
        ))}
      />
    </div>
  );
}

export default CopyText;
