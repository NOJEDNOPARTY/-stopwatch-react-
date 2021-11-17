import './Stopwatch.scss';
import React, { useState, useEffect } from 'react';
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import Timer from './Timer/Timer';
import Buttons from './Buttons/Buttons';


function Stopwatch() {

  const [time, setTime] = useState(0);
  const [watchOn, setWatchOn] = useState(false);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const unsubscribe = new Subject();
    interval(10)
        .pipe(takeUntil(unsubscribe))
        .subscribe(() => {
          if (watchOn) {
            setTime(val => val + 1);
          }
        });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, [watchOn]);

  const handleStart = () => {
    setWatchOn(prevState => !prevState);
    setStatus(1);
  }

  const handleWait = (event) => {
    if (event.detail % 2 === 0) {
      if (time !== 0) {
        setWatchOn(false);
      }
      setStatus(0);
    }
  }

  const handleStop = () => {
    setTime(0);
    setWatchOn(false);
    setStatus(0);
  }

  const handleReset = () => {
    if (time !== 0) {
      setTime(0);
    }
  }

  return (
    <div className="app">
      <div className='main'>
        <div className='wrapper'>
          <div className='stopwatch-wrap'>
            <h1 className='title'>Stopwatch</h1>
            <div className='stopwatch'>
              <Timer
                  time={time}
              />
              <Buttons
                  start={handleStart}
                  stop={handleStop}
                  wait={handleWait}
                  reset={handleReset}
                  status={status}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;