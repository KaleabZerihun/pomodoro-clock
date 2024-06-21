import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);
const TimeLeft = ({
    handleStartStopClick, handleRestButtonClick, StartStopButtonLabel, timeLeft, timerLabel
}) => {

    const timeLeftInFormat = moment.duration(timeLeft, 's').format('mm:ss', {trim: false});
  return (
    <div className='flex flex-col justify-evenly w-64 h-72 rounded-full  items-center imageTom'>
    <p className='text-2xl text-red-950' id="timer-label">{timerLabel}</p>
    <p className='orbitron text-4xl font-bold text-black' id="time-left">{timeLeftInFormat}</p>
    <div className='grid grid-flow-col gap-2'>
    <button className='text-red-400 font-semibold bg-green-900 px-4 py-1 rounded-lg' id="start-stop" onClick={handleStartStopClick}>{StartStopButtonLabel}</button>
    <button className='border-2 text-green-900 rounded border-green-900 border-solid px-3 py-1' id="reset" onClick={handleRestButtonClick}>Reset</button>
    </div>
   
    </div>
  )
}

export default TimeLeft