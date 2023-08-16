import React,{useEffect} from 'react'
import img1 from '../images/firstui.png'
import {useNavigate} from 'react-router-dom'
function GetStart() {
      const navigate = useNavigate();
    const GotoHome = () =>{
    navigate('/home');
    } ;
      
    useEffect(() => {
        // Define the delay before starting the animation in milliseconds
        const animationDelay = 3500; // 3500 milliseconds = 3.5 seconds (adjust as needed)
    
        // Delay the start of the animation
        const delayTimer = setTimeout(() => {
          // Define the target position you want to scroll to (e.g., bottom of the page)
          const targetPosition = document.body.scrollHeight;
    
          // Define the duration of the scroll animation in milliseconds
          const duration = 1000; // Adjust as needed
    
          // Calculate the starting time for the animation
          const startTime = performance.now();
    
          // Define the scroll animation function
          const scrollAnimation = (timestamp) => {
            const currentTime = timestamp - startTime;
            const progress = Math.min(currentTime / duration, 1); // Ensure progress doesn't exceed 1
            const scrollDistance = progress * targetPosition;
    
            window.scrollTo(0, scrollDistance);
    
            if (currentTime < duration) {
              requestAnimationFrame(scrollAnimation);
            }
          };
    
          // Start the animation
          requestAnimationFrame(scrollAnimation);
        }, animationDelay);
    
        // Clean up the delay timer when the component unmounts
        return () => {
          clearTimeout(delayTimer);
        };
      }, []);
    



    return (
        <>
<div className='Loder'>
        <div className='waviy'>
          <span className='letter-animation'>T</span>
          <span className='letter-animation'>o</span>
          <span className='letter-animation'>D</span>
          <span className='letter-animation'>o</span>
        </div>
      </div>
{/* ==================getstart part====================== */}
            <div className='GetStart'>
                <div className='main'>
                <div className='todo'>
                    <span id='t'>t</span>
                    <span id='o'>o</span>
                    <span id='d'>d</span>
                    <span id='O'>o</span>
                </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br></br>
                     Voluptatibus voluptas autem fugit corrup mghh kyy fg.</p>
                        <button id='btn' onClick={GotoHome}>Get Started</button>
                        <img src={img1} alt='img'/>
                    </div>
            </div>
        </>
    )
}

export default GetStart