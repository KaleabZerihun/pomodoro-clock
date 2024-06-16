import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);
const TimeLeft = ({
    handleStartStopClick, StartStopButtonLabel, timeLeft, timerLabel
}) => {

    const timeLeftInFormat = moment.duration(timeLeft, 's').format('mm:ss', {trim: false});
  return (
    <div>
    <p className='text-3xl' id="timer-label">{timerLabel}</p>
    <p id="time-left">{timeLeftInFormat}</p>
    <button id="start-stop" onClick={handleStartStopClick}>{StartStopButtonLabel}</button>
    </div>
  )
}

export default TimeLeft