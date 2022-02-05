/* eslint-disable react/react-in-jsx-scope */
import Count from "react-countdown";
import "./CountDown.css";

const Countdown = () => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <h1>Event has ended!</h1>;
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
        {addZero(hours)}
        <span className=" mx-2">:</span>
        {addZero(minutes)}
        <span className=" mx-2">:</span>
        {addZero(seconds)}
      </span>
    );
  };
  return (
    <div className="flex flex-col items-center justify-center text-center font-mono">
      <div className="grad pt-3 text-3xl 2xl:text-4xl 2xl:pt-7">
        <Count
          date="2022-02-05T18:00:00"
          renderer={renderer}
          intervalDelay={0}
        />
      </div>
      <div className="flex flex-row text-white font-mono text-base pt-1 pl-0.5 mb-8 2xl:mb-16">
        <div className="mx-5 2xl:mx-6">HRS</div>
        <div className="mx-4 2xl:mx-5">MINS</div>
        <div className="mx-4 2xl:mx-5">SECS</div>
      </div>
    </div>
  );
};

export default Countdown;
