import '../Styles/Playerbase.css'
import React, { useState } from "react";
import Add from './AddModal'; 

function Playerbase(){
    const username = "Sami Saifudin";
    const points = 25;
    const assists = 7;
    const rebounds = 5; 
    const [modalAddOpen, setModalAddOpen] = useState(false);

    const games = [
        { name: "HS Game 1", points, assists, rebounds },
        { name: "HS Game 2", points, assists, rebounds },
        { name: "HS Game 3", points, assists, rebounds },
        { name: "HS Game 4", points, assists, rebounds },
        { name: "HS Game 5", points, assists, rebounds },
        { name: "HS Game 6", points, assists, rebounds },
        { name: "HS Game 7", points, assists, rebounds }
    ];

    return (
        <>
            <h1>Hello <span className="highlight">{username}</span></h1> 

            <h2>Past Games: </h2>
            <div className="games-container">
                
                <button 
                    className='add-game-button'
                    onClick={() => {
                        setModalAddOpen(true);
                    }}
                >+</button>

            </div>
        </>
    );
}

export default Playerbase