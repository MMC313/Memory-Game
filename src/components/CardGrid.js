import React, { useEffect, useState } from "react";
import Card from './Card'
import '../styles/CardGrid.css'


function CardGrid(props){
    console.log("render")
    const scores = props.scores
    const setScores = props.setScores

    const [chars,setChars] = useState(["spongebob","patrick","squidward","mrKrabs","plankton","gary","sandy","pearl","larry","karen","doodlebob","fred"])
    const [picked,setPicked] = useState([])
    let cards = []

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    useEffect(()=>{
        setChars(shuffle(chars))
    },[scores.score])

    function checkCards(event){
        console.log(event.target.alt)
        if(picked.includes(event.target.alt)){
            if(scores.score>scores.hiscore) setScores.setHiscore(scores.score)
            setScores.setScore(0)
            setPicked([])
        }else{
            picked.push(event.target.alt)
            console.log(picked)
            setScores.setScore(scores.score+1)
        }
    }
    
    // for(let i=0;i<chars.length;i++){
    //     cards.push(<Card chars={chars[i]} key={i} functions={{checkCards}} />)
    // }
    
    return(
        <div className="cards">
            {chars.map(char =>{
                return <Card chars={char} key={chars.indexOf(char)} functions={{checkCards}} />
            })}
        </div>
    )

}

export default CardGrid;


