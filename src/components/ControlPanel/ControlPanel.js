import './ControlPanel.scss';
import ElButton from '../Button/Button';

function Buttons({actions, status}) {
  const { handleStart: start, handleStop: stop, handleReset: reset, handleWait: wait} = actions;
  return (
      <div className='panel'>
          {(status === 0) ?
            <div className='panel-holder'>
              <ElButton className="btn btn-white" clickEvent={start} name="Start"/>
            </div> : ""
          }

          {(status === 1) ?
            <div className='panel-holder'>
              <ElButton className="btn btn-white" clickEvent={wait} name="Wait"/>
              <ElButton className="btn btn-red" clickEvent={stop} name="Stop"/>
              <ElButton className="btn btn-yellow" clickEvent={reset} name="Reset"/>
            </div> : ""
          }

      </div>
  );
}

export default Buttons;