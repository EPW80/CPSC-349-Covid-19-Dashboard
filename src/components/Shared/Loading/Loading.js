import React from "react";
import { FaSpinner } from "react-icons/fa";
import Theme from "../../../theme/Theme";
import { Loader, Marquee, Wrapper } from "./LoadingStyle";

function Loading() {
  return (
    <Theme>
      <Wrapper id="api-error">
        <Loader>
          <FaSpinner icon="spinner" className="spinner" />
        </Loader>
        <Marquee>
          <h1>Fetching Data...</h1>
        </Marquee>
      </Wrapper>
    </Theme>
  );
}

export default Loading;
