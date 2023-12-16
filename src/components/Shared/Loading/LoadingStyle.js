import styled from "styled-components";

/* eslint-disable */
export const Wrapper = styled.div`
  height: 81vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #db0f0f;
  font-family: ${(props) => props.theme.font.heading};
  font-weight: 600;
  display: flex;
  flex-direction: column;
`;

export const Loader = styled.div`
  font-size: 3.5rem;
  margin-bottom: 0.8rem;
  
  .spinner {
    animation: spin infinite 2s linear;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    } to {
      transform: rotate(360deg);
    }
  }
`;

export const Marquee = styled.div`
  width: 20%;
  white-space: nowrap;
  line-height: 50px;
  overflow: hidden;
  box-sizing: border-box;
  h1 {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 3.5s linear infinite;
    font-size: 1.7rem;
    color: #000000;
  }
  @keyframes marquee {
      0% {transform: translate(0, 0); }
      100% {transform: translate(-100%, 0);}
  }

  @media screen and (max-width: 992px) {
    width: 50%;
    h1 {
      font-size: 1.4rem;
    }
  }
`