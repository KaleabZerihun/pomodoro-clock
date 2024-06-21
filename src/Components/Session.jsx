import moment from 'moment';
const Session = ({
    sessionLength,
    decrementSessionLengthByOneMinute,
    incrementSessionLengthByOneMinute
}) => {

    const sessionLengthInMinutes = moment.duration(sessionLength, 's').asMinutes()
  return (
    <div className='flex flex-col items-center'>
        <p className='text-lg text-green-300' id="session-label">Session</p>
        <p className='text-4xl font-bold text-white' id="session-length">{sessionLengthInMinutes}</p>
        <div className='grid grid-flow-col gap-2 rounded'>
        <button className='mt-2 text-lg text-white px-4 py-2 bg-green-400 rounded' id="session-decrement" onClick={decrementSessionLengthByOneMinute}>-</button>
        <button className='mt-2 text-lg text-white px-4 py-2 bg-green-400 rounded' id="session-increment" onClick={incrementSessionLengthByOneMinute}>+</button>
        </div>
        
    </div>
  )
}

export default Session