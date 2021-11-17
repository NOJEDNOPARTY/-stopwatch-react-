function Buttons({ start, stop, reset, wait, status }) {
  return (
      <div className='btn-container'>
          {(status === 0) ?
            <div className='btn-holder'>
              <button className="btn btn-white"
                onClick={start}>Start</button>
            </div> : ""
          }

          {(status === 1) ?
            <div className='btn-holder'>
              <button className="btn btn-white"
                onClick={wait}>Wait</button>
              <button className="btn btn-red"
                onClick={stop}>Stop</button>
              <button className="btn btn-yellow"
                onClick={reset}>Reset</button>
            </div> : ""
          }

      </div>
  );
}

export default Buttons;