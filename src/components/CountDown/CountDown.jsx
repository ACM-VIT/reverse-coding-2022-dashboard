/* eslint-disable react/react-in-jsx-scope */
import Count from "react-countdown";
import "./CountDown.css";

const Countdown = () => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <h1 className=""> </h1>;
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
          date="2022-02-06T01:30:00"
          renderer={renderer}
          intervalDelay={0}
        />
      </div>
    </div>
  );
};

export default Countdown;
