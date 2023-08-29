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
                    This App was created by <a rel="noreferrer" target="_blank" href = "https://syedmoinahmed.dev/"> Syed Moin Ahmed</a>
                        
                </p>
            </div>
        </div>
    )
}


export default header;