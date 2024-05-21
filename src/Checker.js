import { useState } from 'react';
import './Style.css'

function Checker(){
const [enterValue, setValue] = useState('');
const [guess, setGuess] = useState(5)
const [winStatus, setwinStatus] = useState()
const [random, setRandom] = useState('');
const [disabled, setDisabled] = useState(false)
const handleValue = (e) => {
setValue(e.target.value)
// console.log(e.target.value)
}

const handleCheck = () => {
    let randomNumber = Math.floor(Math.random()*10)+1;
    if(enterValue !== '' && enterValue <= 10){
        setValue('')
        if(randomNumber == enterValue){
            setwinStatus('You won the match!!')
            setRandom(randomNumber)
            setDisabled(true)
           }
        else{
            setRandom(randomNumber)
            setGuess(guess-1)
            console.log(guess-1)
            setwinStatus('You entered the wrong match') 
            if(guess-1 === 0){
                setwinStatus('You loss the match!!') 
                setRandom('')
                setDisabled(true)
            }
        }
    }
    }
  

return(
<div className="main-container text-center">

<div className="bg-white rounded-sm">
    <h1 className='bg-[#663399] text-white mx-4 rounded-b-md p-1 text-3xl'>Random Number Checker</h1>
    <p className='p-6 text-xl'>Guess a number between 1 to 10</p>
    <div className='flex justify-center flex-col pb-6'>
    <input value={enterValue} onChange={handleValue} placeholder='Enter the random number' className='p-2 mb-4 border-b-2 border-[#663399] text-center mx-4'/>
   {disabled?<button disabled className='bg-slate-500 p-4 text-white py-2 text-lg mx-4 rounded-md' onClick={handleCheck}>Guess</button>:<button className='bg-[#663399] p-4 text-white py-2 text-lg mx-4 rounded-md' onClick={handleCheck}>Guess</button>}
    
    </div>
    <div className='score p-4 border shadow-[#663399] mx-4 shadow-lg text-lg'>
        <p>The generated random number is <span className='text-[#663399] text-xl font-semibold'>{random}</span></p>
        <p>You have <span className='text-[#663399] text-xl font-semibold'>{guess}</span> chances</p>
    </div>
    <p className='pt-10 pb-6 text-3xl text-[#663399] font-semibold'>{winStatus}</p>
</div>
</div>
)
}

export default Checker;