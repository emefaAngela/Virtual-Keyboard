import "./App.css";
import Keyboard from "./components/Keyboard";
import { useState, useEffect } from "react";
const words = [
  "arena",
  ".",
  "alien",
  ".",
  "rear",
  ".",
  "near",
  ".",
  "nearer",
  ".",
  "are",
  ".",
  "earn",
  ".",
  "lane",
  ".",
  "area",
  ".",
  "nearer",
  ".",
  "line",
  ".",
  "are",
  ".",
  "real",
  ".",
  "lean",
  ".",
  "arena",
  ".",
  "era",
  ".",
  "earlier",
  ".",
  "linen",
  ".",
  "rare",
  ".",
  "lane",
  ".",
  "line",
  ".",
  "nine",
  ".",
  "line",
];
const combinedWords = words.join("");

function App() {
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [keyPressed, setKeyPressed] = useState('');
  const [matchedChars, setMatchedChars] = useState([]);

  const handleKey = (key) => {
    setKeyPressed(key);
  };

  useEffect(() => {
    if (keyPressed !== '') {
      const expectedChar = combinedWords[currentCharIndex].toUpperCase();

      if (keyPressed === expectedChar) {
        console.log(`Matched: ${keyPressed}`);
        setMatchedChars([...matchedChars, currentCharIndex]);
        setCurrentCharIndex(prevIndex => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= combinedWords.length) {
            console.log('Word complete!');
            return 0; 
          }
          return nextIndex;
        });
      } else {
        console.log(`Expected: ${expectedChar}, but got: ${keyPressed}`);
      }
      setKeyPressed('');
    }
  }, [keyPressed]);
  return (
    <div className="flex flex-col space-y-12 bg-[#F4F0F0] h-full mx-auto py-[134px] w-full items-center justify-center">
      {/* <SingleValuedKey/>
       */}
      <div className="flex flex-col space-y-2">
        <div className="flex flex-row space-x-2">
          <div className="text-[#625E70]">Metrics:</div>
          <div>Speed:</div>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="text-[#625E70]">All keys:</div>
          <div></div>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="text-[#625E70]">Current key:</div>
          <div>Not calibrated,need more samples.</div>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="text-[#625E70]">Accuracy:</div>
          <div>No accuracy streaks.</div>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="text-[#625E70]">Daily goal:</div>
          <div>Speed:</div>
        </div>
      </div>
      <div className="hover:border text-[#26243D] flex flex-row space-x-2 w-2/3 flex-wrap   h-16">
        {combinedWords.split('').map((word,index) => (
          <div style={{
            color: matchedChars.includes(index) ? 'gray' : 'black',
            textDecoration:currentCharIndex===index ? 'underline' : '',
          }}>{word}</div>
        ))}
        <div></div>
      </div>
      <Keyboard onKeyFromKeyboard={handleKey} />
    </div>
  );
}

export default App;
