import React from "react"
import Langs from "./components/Langs"
import Letters from "./components/Letters"
import { nanoid } from "nanoid"

export default function App(){
  
  
  const  [count, setCount] = React.useState(1)
  
  const lango =[ 
    {lan:"JavaScript", id: 1, isDead: false},
    {lan:"Css", id: 2 ,isDead: false},
    {lan:"React", id: 3,isDead: false},
    {lan:"DJango", id: 4,isDead: false},
    {lan:"Angular", id: 5,isDead: false},
    {lan:"JQuery", id: 6,isDead: false},
    {lan:"C++", id: 7,isDead: false},
    {lan:"C#", id: 8,isDead: false},
    {lan:"Python", id: 9,isDead: false},
  ]
  
  const [langArr, setLangArr] = React.useState(lango)
  
  
  
  function generateLanguges(){
    return langArr.map(lang => <Langs key={lang.lan} id={lang.id} lan={lang.lan.toUpperCase()} isDead={lang.isDead} className={lang.isDead} />)
  }
  
  
  const lettersArr = Array.from("qwertyuiopasdfghjklzxcvbnm")

  function generateLetters(){
   return lettersArr.map(letter => letter = {letter: letter, able: true})
  }
  const [lettersState, setLettersState] = React.useState(()=>generateLetters())


  function generateKeyboard(){
    return lettersState.map(letter => <Letters val={letter.letter} onClick={handleClick} className={letter.able} key={letter.letter} letter={letter.letter.toUpperCase()}/>)
  }
  
  
  
  const words =["blood","water","cars","food","fire","iron","wood","wolf"]
  
  
  
  function handleClick(e){
    const value = e.currentTarget.value
    let isCorrect = false

    if(e.currentTarget.className === "click"){
      for(let i = 0 ;i < wordLetters.length ; i++){
        if(wordLetters[i].val === value){
          isCorrect = true
          setWordLetters(prev => prev.map(letter => letter.val === value ?letter = {...letter, able: true} : letter))
        } 
      }
      !isCorrect ? setCount(prev=> prev+= 1) : undefined
      setLangArr(prev => prev.map(lang=> lang.id === count && !isCorrect ? lang ={...lang, isDead : true} : lang))
  
      setLettersState(prev => prev.map(letter=> {
        return letter.letter === value ? {...letter, able: false} : letter
      }))
    }
  } 
  

  function lose(){
    return <div className="lose"> Unfotunately, you've lost the game, Click the button downBelow to retry </div>
  }
   function win(){
    return <div className="win"> Great Job!. you've won the game, click New Game to retry</div>
  }
  
  
  function chooseWord(){
    const wordIndex = Math.floor(Math.random() * words.length)
        const word = words[wordIndex]
        return word  
      }
      const word = React.useRef(chooseWord())
      const [wordLetters , setWordLetters] = React.useState(Array.from(word.current).map(el=> el = {val: el, able:false}))
      
      
      
      function generateWord(){
        return wordLetters.map(letter => <span className={letter.able ? "chosen able" : "chosen"} key={nanoid()}>{letter.val.toUpperCase()}</span>)
      }
    const won = React.useRef(false)
    const end = React.useRef(false)
    function endTheGame(){
      if(wordLetters.every(val => val.able)){
        won.current = (true)
        end.current = true
        return win()
      }
      
      if(count >= 10){
        end.current = true
        return lose()
      }

    }
  return (
    <main>
      <p>Choose the correct letter to complete the word, any wrong letter will exclude a language</p>
     {endTheGame()}
      <div className="lang-container">
        {generateLanguges()}
      </div>
      <div className="chosen-container">
        {generateWord()}
      </div>
      <section>
        {generateKeyboard()}
      </section>
      {end.current && <button className="newGame" onClick={()=>location.reload()}>new Game</button> }
    </main>
  )
}