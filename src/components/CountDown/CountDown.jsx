/* eslint-disable react/react-in-jsx-scope */
import Count from "react-countdown";
import "./CountDown.css";

const Countdown = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <h1>OK</h1>;
    }
    const addZero = (num) => {
      let time = num.toString();
      if (time.length === 1) {
        time = `0${time}`;
      }
      return time;
    };
    return (
      <span>
        {addZero(days)}
        <span className=" mx-2">:</span>
        {addZero(hours)}
        <span className=" mx-2">:</span>
        {addZero(minutes)}
        <span className=" mx-2">:</span>
        {addZero(seconds)}
      </span>
    );
  };
  return (
    <div className="flex flex-col items-center justify-center text-center text-6xl sm:text-2xl font-mono">
      <div className="grad pt-3 text-2xl">
        <Count
          date="2022-02-05T18:00:00"
          renderer={renderer}
          intervalDelay={0}
        />
      </div>
      <div className="flex flex-row text-white font-mono text-base pt-1 space-x-5 mb-8">
        <div>DAYS</div>
        <div>HRS</div>
        <div>MINS</div>
        <div>SECS</div>
      </div>
    </div>
  );
};

export default Countdown;
