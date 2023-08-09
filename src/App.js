import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";

import Deck from './Deck';
import Button from './Button';

function App() {
  //This two variables are used to toggle true/false
  const [isDrawing, setIsDrawing] = useState(false);
  const clickHandler = () => {
    setIsDrawing(!isDrawing);
  }
  //The function runs once at the beginning and stores the "deck_id" in deckInfo, with the help of "useRef()"  
  const deckId = useRef();
  useEffect(() => {
      async function getDeckInfo(){
          const res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
          deckId.current = res.data.deck_id;
          }
          getDeckInfo();
          return () => null;
  }, [])

  return (
    <div className="App">
      <h1>Deck of cards</h1>
      <Button clickHandler={clickHandler} 
              isDrawing={isDrawing} />
      <Deck isDrawing={isDrawing}
            deckId={deckId} />
    </div>
  );
}

export default App;
