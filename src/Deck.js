import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
import { v4 as uuid } from 'uuid';
import Card from "./Card";

function Deck({isDrawing, deckId}){
    const [cards, setCards] = useState([]);
    
    const addCard = (cardImg) =>{
        setCards(cards => [...cards, {id:uuid(), cardImg}]);
    }
    
    const drawCard = async (deck_id) => {
      const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
      addCard(res.data.cards[0].image);
    }
    
    //This approach makes a request every second, this does not mean that the 
    // card is being mounted in the DOM every second, to achieve that all the cards
    // should be drawn all at once and then being passed every second. 
    const timerId = useRef();
    useEffect(() => {
        if (isDrawing){
        timerId.current = setInterval(async () => {          
          await drawCard(deckId.current);
          }, 1000);
        }
        else{
          clearInterval(timerId.current);
        }
      }, [isDrawing]);
    
    return (
        <div key={uuid()} className='cards-deck'>
            
            {cards.map(({cardImg, id}) => <Card 
                                          id={id}
                                          cardImg={cardImg}
                                          key={id}/> )}
            
        </div>
    )

}
export default Deck;