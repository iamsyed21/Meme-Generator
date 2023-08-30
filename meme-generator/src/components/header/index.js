import './index.scss';
import memeLogo from '../../Resources/images/Memegenerator.png'

const header = () =>{
    return(
        <div className = "headerContainer">
            <div>
                <img src = {memeLogo} className="memelogo" alt="memelogo"/>
            </div>
            <div className="createdDetails">
                <p className="para">
                    Made with React
                        
                </p>
            </div>
        </div>
    )
}


export default header;