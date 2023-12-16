import React from "react";
import Theme from "../../theme/Theme";
import {
  Content,
  Header,
  InfoCard,
  InfoCardContent,
  InfoCardHeader,
  InfoWrapper,
  Wrapper,
} from "./InfoStyle";

import TransmissionLogo from "../../assets/icons/transmission.svg";
import CheckupLogo from "../../assets/icons/checkup.svg";
import PreventionLogo from "../../assets/icons/virus.svg";

function Info() {
  const Transmission = (
    <InfoCard className="card">
      <InfoCardHeader>
        <img
          src={TransmissionLogo}
          alt="Transmission Logo"
          width="84"
          height="84"
        />
        <h2>Transmission</h2>
        <h4>Via Respiratory Droplets</h4>
      </InfoCardHeader>
      <InfoCardContent>
        <span>2-14</span> days <br /> estimated incubation period
      </InfoCardContent>
    </InfoCard>
  );

  const Symptoms = (
    <InfoCard className="card">
      <InfoCardHeader>
        <img src={CheckupLogo} alt="Symptomps Logo" width="84" height="84" />
        <h2>Symptoms</h2>
        <h4>Most Common</h4>
      </InfoCardHeader>
      <InfoCardContent>
        <ul>
          <li>Fever</li>
          <li>Cough</li>
          <li>Difficulty Breathing</li>
          <li>Muscle Pain</li>
          <li>Fatigue</li>
        </ul>
      </InfoCardContent>
    </InfoCard>
  );

  const Prevention = (
    <InfoCard className="card">
      <InfoCardHeader>
        <img
          src={PreventionLogo}
          alt="Prevention Logo"
          width="84"
          height="84"
        />
        <h2>Prevention</h2>
        <h4>Is better than a cure</h4>
      </InfoCardHeader>
      <InfoCardContent>
        <ul>
          <li>Wear a mask</li>
          <li>Wash your hands</li>
          <li>Keep a safe distance</li>
        </ul>
      </InfoCardContent>
    </InfoCard>
  );

  return (
    <Theme>
      <Wrapper id="covid-info">
        <Header>Covid 19</Header>
        <Content>
          COVID-19 or Coronavirus is a disease caused by the SARS-CoV-2 virus.
          The Coronaviruses are viruses that{" "}
          <span>circulate among animals</span> but some of them are also known
          to affect humans. The 2019 novel coronavirus was first identified in
          China at the end of 2019 and is a new strain that has not previously
          been <span>seen in humans</span>. For more detailed information and
          global tracking of the virus, visit the{" "}
          <a
            href="https://coronavirus.jhu.edu/map.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Johns Hopkins University Coronavirus Resource Center
          </a>
          .<br />
          <br />
        </Content>

        <InfoWrapper>
          {Transmission}
          {Symptoms}
          {Prevention}
        </InfoWrapper>
      </Wrapper>
    </Theme>
  );
}

export default Info;
