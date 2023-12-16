import React from "react";
import Theme from "../../../theme/Theme";
import { Wrapper } from "./FooterStyle";

function Footer() {
  return (
    <Theme>
      <Wrapper id="footer">
        <p>
          Built by{" "}
          <a
            href="https://github.com/EPW80"
            target="_blank"
            rel="noopener noreferrer"
          >
            Erik Williams
          </a>{" "}
          &#169; {new Date().getFullYear()} | Data Source:{" "}
          <a
            href="https://disease.sh/v3/covid-19/historical/all?lastdays=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Disease Data API
          </a>
        </p>
      </Wrapper>
    </Theme>
  );
}

export default Footer;
