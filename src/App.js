import React, { useState, useEffect } from 'react';
import './App.css';
import Break from './Components/Break';
import Session from './Components/Session';
import TimeLeft from './Components/TimeLeft';
import { useRef } from 'react';

function App() {
    const audioElement = useRef(null)
    const [currentSessionType, setCurrentSessionType] = useState('Session');
    const [intervalId, setItervalId] = useState(null);
    const [sessionLength, setSessionLength] = useState(60 * 25);
    const [breakLength, setBreakLength] = useState(300);
    const [timeLeft, SetTimeLeft] = useState(sessionLength);
   
    
    useEffect(()=>{
        SetTimeLeft(sessionLength);
    }, [sessionLength]);

    //listen to timeleft changes
    //if it is zero play audio
    //change session to break or break to session
    useEffect(()=>{
        if(timeLeft === 0){
            audioElement.current.play()
            if(currentSessionType === 'Session'){
                setCurrentSessionType('Break')
                SetTimeLeft(breakLength)
            }else if(currentSessionType === 'Break'){
                setCurrentSessionType('Session')
                SetTimeLeft(sessionLength)
            }
        }
    }, [breakLength, currentSessionType, sessionLength, timeLeft])


    const decrementSessionLengthByOneMinute = () => {
      const newSessionLength = sessionLength - 60;
      if(newSessionLength > 0)
      {
        setSessionLength(newSessionLength);
      }
  };

  const incrementSessionLengthByOneMinute = () => {
    const newSessionLength = sessionLength + 60
    if(newSessionLength <= 60 * 60)
        {
            setSessionLength(sessionLength + 60);
        }
      

  };


    const decrementBreakLengthByOneMinute = () => {
        const newBreakLength = breakLength - 60;
        if(newBreakLength >= 0){
            setBreakLength(newBreakLength)
        }
    };

    const incrementBreakLengthByOneMinute = () => {
        const newBreakLength = breakLength + 60
        if(newBreakLength <= 60 * 60)
            {
                setBreakLength(breakLength + 60);
            }
        

    };
    const isstarted = intervalId !== null;

    const handleStartStopClick = () => 
    {
        if(isstarted)
        {
            //if we are in start mode
            //we want to use the stop button
            // incase we want to stop
            clearInterval(intervalId);
            setItervalId(null);
        }
        else
        {
            //if we are in stopped mode
            //decrement time left by one second
            //use set interval function
            const setNewIntervalId = setInterval(()=>{
                SetTimeLeft(prevTimeLeft => prevTimeLeft -1);
            }, 1000);
            setItervalId(setNewIntervalId);
        }   
        
    };

    const handleRestButtonClick =() =>{

        //reset the audio

        audioElement.current.load()
        //clear the timeout interval
        clearInterval(intervalId)


        //set the intervalId null
        setItervalId(null)


        //set the sessiontype to 'Session'
        setCurrentSessionType('Session')


        //reset the session length to 25 minutes
        setSessionLength(60 * 25)

        //reset the break length to 5 minutes
        setBreakLength(60 * 5)


        //reset the timer to 25 minutes
        SetTimeLeft(60 * 25)
    }
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-indigo-950">
      <div className='block justify-around w-auto'>

      <TimeLeft
      handleRestButtonClick={handleRestButtonClick}
      breakLength={breakLength}
      handleStartStopClick={handleStartStopClick}
       timerLabel={currentSessionType}
       sessionLength={sessionLength}
       StartStopButtonLabel={isstarted ? 'Stop' : 'Start'}
       timeLeft={timeLeft}
       />
       <div className='grid grid-flow-col gap-2'>
       <Session
      sessionLength={sessionLength}
      decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
      incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
       /> 
    <Break 
      breakLength={breakLength}
      decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
      incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
      />

       </div>
      
       </div>  
       <audio id="beep" ref={audioElement}>
        <source src="https://onlineclock.net/audio/options/default.mp3" type='audio/mpeg' />
       </audio>
      </div>
  );
}

export default App;
