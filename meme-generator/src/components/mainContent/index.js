import React, {useState} from 'react'
import './index.scss'; 
import Data from './data.js'

const MainContent = () =>{
    const [MemeData, setMemeData] = useState(null);
    const [FirstInput, setFirstInput] = useState("");
    const [SecondInput, setSecondInput] = useState("");
   
function handleClick(){
    const randomNumber = Math.floor(Math.random()*Data.length);
    const url = Data[randomNumber].url;
    setMemeData(url);
}

function handleChange1(){
    setFirstInput("Done");
}

function handleChange2(){
    setSecondInput("Done");
}

    return(
        <div className="contentContainer">
            <div>
                <form className="my-form">
                    <div>
                    <input
                    type = "text"
                    placeholder= "first prompt"
                    onChange={handleChange1}
                    className="myInput"
                    />
                    <input
                    type = "text"
                    onChange={handleChange2}
                    placeholder= "second prompt"
                    className="myInput"
                    />
                    </div>
                    <div className="myButton">
                  
                    </div>
                </form>

                <button className="my-button" onClick={handleClick}>
                    Generate Meme!!
                    </button>
            </div>
            {
                MemeData && <img className='memeImage' alt="GeneratedMeme" src={MemeData} />    
            }


        
            
        </div>
    )
}


export default MainContent;