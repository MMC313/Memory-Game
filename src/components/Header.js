import React from "react";
import '../styles/Header.css'

function Header(props){
    let scores = props.scores

    return(
        <div className="header">
            <div className="title">
                <h1>Bikini Bottom Bonanza</h1>
                <div>Get points by clicking on a character but don't click on each character more than once!</div>
            </div>
            <div className="scoreBoxes">
                <div className="score">
                    <div>Score</div>
                    <div>{scores.score}</div>
                </div>
                <div className="hiscore">
                    <div>HiScore</div>
                    <div>{scores.hiscore}</div>
                </div>
            </div>
        </div>
    )

}

export default Header