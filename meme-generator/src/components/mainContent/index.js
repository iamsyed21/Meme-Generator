import React, { useState, useEffect } from 'react';
import './index.scss';

const MainContent = () => {
    const [memeData, setMemeData] = useState([]);
    const [selectedMemeIndex, setSelectedMemeIndex] = useState(-1);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setMemeData(data.data.memes);
        }
        fetchData();
    }, []);

    function handleClick() {
        if (memeData.length > 0) {
            const newSelectedIndex = Math.floor(Math.random() * memeData.length);
            setSelectedMemeIndex(newSelectedIndex);
        }
    }

    const handleDownloadClick = () => {
        if (selectedMemeIndex !== -1) {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = function () {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                const base64Image = canvas.toDataURL("image/png");
                downloadURI(base64Image, 'meme.png');
            };
            img.src = memeData[selectedMemeIndex].url;
        }
    };

    const downloadURI = (uri, name) => {
        const link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="contentContainer">
            <div>
                <button className="my-button" onClick={handleClick}>
                    Generate a Trending Meme Template
                </button>
            </div>
            <p className='p-2 pb-0 mt-2 fs-3 name'>{selectedMemeIndex !== -1 && memeData[selectedMemeIndex].name}</p>
            {selectedMemeIndex !== -1 && <img className='memeImage' alt="GeneratedMeme" src={memeData[selectedMemeIndex].url} />}
           {selectedMemeIndex !== -1 && <button className="download-button" onClick={handleDownloadClick}>
                        Download Meme Template
                    </button>}
        </div>
    );
}

export default MainContent;
