function DisplayComponent({ time }) {
  const hours = ('0' + Math.floor((time / (1000 * 60 * 60)) % 24)).slice(-2);
  const minutes = ('0' + Math.floor(time / 6000)).slice(-2);
  const seconds = ('0' + Math.floor((time / 100) % 60)).slice(-2);
  return (
    <div className='stopwatch-timer'>
      <span className='stopwatch-timer__item'>{hours}</span>:
      <span className='stopwatch-timer__item'>{minutes}</span>:
      <span className='stopwatch-timer__item'>{seconds}</span>
    </div>
  );
}

export default DisplayComponent;