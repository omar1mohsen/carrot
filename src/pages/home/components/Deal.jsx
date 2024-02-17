import React from "react";
import Countdown from "react-countdown";
import AnimateBox from "../../../shared-components/AnimateBox";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
  } else {
    // Render a countdown
    return (
      <div className="tre-counter-wrap">
        <h4>
          <span>{days}</span>Days
        </h4>
        <span>:</span>
        <h4>
          <span>{hours}</span>Hrs
        </h4>
        <span>:</span>
        <h4>
          <span>{minutes}</span>Min
        </h4>
        <span>:</span>
        <h4>
          <span>{seconds}</span>Sec
        </h4>
      </div>
    );
  }
};

function Deal() {
  return (
    <AnimateBox>
      <main className="tre-section">
        <div className="tre-deal-contanier">
          <div className="tre-deal-card">
            <AnimateBox delay={0.2}>
              <span>
                <code>40%</code> OFF
              </span>
            </AnimateBox>

            <AnimateBox delay={0.3}>
              <h4 className="tre-deal-title">Great deal on Womens Fashion.</h4>
            </AnimateBox>

            <AnimateBox delay={0.4}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                maecenas accumsan lacus vel facilisis.
              </p>
            </AnimateBox>
            <AnimateBox delay={0.5}>
              <div className="tre-deal-countdown">
                <Countdown
                  date={Date.now() + 10000 * 200000}
                  renderer={renderer}
                />
              </div>
            </AnimateBox>
          </div>
        </div>
      </main>
    </AnimateBox>
  );
}

export default Deal;
