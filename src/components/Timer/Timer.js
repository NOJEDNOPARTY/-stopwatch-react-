import './Timer.scss';

function Timer({ time }) {
    const hours   = getTimeHelper(time, 1000 * 60 * 60, 24);
    const minutes = getTimeHelper(time, 6000, 1);
    const seconds = getTimeHelper(time, 100, 60);
    return (
      <div className='timer'>
        <span className='timer-item'>{hours}</span>:
        <span className='timer-item'>{minutes}</span>:
        <span className='timer-item'>{seconds}</span>
      </div>
    );
  }
  
  function getTimeHelper(time, x1, x2) {
    return ("0" + Math.floor((time / x1) % x2)).slice(-2);
  }
  
  export default Timer;