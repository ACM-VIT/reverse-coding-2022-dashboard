/* eslint-disable react/react-in-jsx-scope */
import Count from "react-countdown";
import "./CountDown.css";

const Countdown = () => {
  const renderer = ({ hours, minutes, seconds }) => {
    const addZero = (num) => {
      let time = num.toString();
      if (time.length === 1) {
        time = `0${time}`;
      }
      return time;
    };
    return (
      <div>
        {addZero(hours) === "00" &&
        addZero(minutes) === "00" &&
        addZero(seconds) === "00" ? (
          <h1 className="text-white mt-20 2xl:mt-24 pb-16 2xl:pb-24 font-700">
            Round 2 has ended!
          </h1>
        ) : (
          <>
            <h1 className="primary-purple mt-16 text-xl 3xl:text-3xl 3xl:mt-20 2xl:text-3xl 2xl:mt-20 pb-1 2xl:pb-3">
              Round 2 ends in
            </h1>
            <span>
              {addZero(hours)}
              <span className=" mx-2">:</span>
              {addZero(minutes)}
              <span className=" mx-2">:</span>
              {addZero(seconds)}
            </span>
            <div className="flex flex-row text-white font-mono text-base 2xl:text-2xl pt-1 2xl:pt-2 pl-0.5 mb-8 2xl:mb-16">
              <div className="mx-5 2xl:mx-7">HRS</div>
              <div className="mx-4 2xl:mx-6">MINS</div>
              <div className="mx-4 2xl:mx-6">SECS</div>
            </div>
          </>
        )}
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="grad pt-3 text-3xl 2xl:text-5xl 2xl:pt-7 font-mono">
        <Count
          date="2022-02-09T01:00:00"
          renderer={renderer}
          intervalDelay={0}
        />
      </div>
    </div>
  );
};

export default Countdown;
