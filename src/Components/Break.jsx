import moment from 'moment';
const Break = ({
    breakLength,
    decrementBreakLengthByOneMinute,
    incrementBreakLengthByOneMinute
}) => {

  const breakLengthInMinutes = moment.duration(breakLength, 's').asMinutes()
  return (
    <div className='flex flex-col items-center'>
        <p className='text-lg text-indigo-400' id="break-label">Break</p>
        <p className='text-4xl font-bold text-white' id="break-length">{breakLengthInMinutes}</p>
        <div className='grid grid-flow-col gap-2 rounded'>
        <button className='mt-2 text-lg text-white px-4 py-2 bg-green-900' id="break-decrement" onClick={decrementBreakLengthByOneMinute}>-</button>
        <button className='mt-2 text-lg text-white px-4 py-2 bg-green-900' id="break-increment" onClick={incrementBreakLengthByOneMinute}>+</button>
        </div>
        
    </div>
  )
}

export default Break