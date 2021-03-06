import React, {Fragment, useContext, useState} from "react"
import { ButtonGeneral, FlexRelative, IconBtn, Row100, RowCenterXY, Surface, TextLg } from "../../../styles/generalStyles";
import { ReloadIcon } from "../../../styles/icons";
import sentences from '../../../utils/constants/json/sentences.json'
import { Context } from "../../../utils/providers/context";
import { randomNumber } from "../../../utils/scripts/data";
import { useNavigate } from "react-router-dom"
  
export const Words = () => {
  
  let navigate = useNavigate()
  const { lifes, handleLifes, handleIsGameFinished } = useContext(Context)
  const [randomSentence] = useState(sentences[randomNumber(0, 5)])
  const [sentence, setSentence] = useState([])
  const [words, setWords] = useState(randomSentence.words)

  function reloadWord(){
    setWords(prev => prev = randomSentence.words)
    setSentence(prev => prev = [])
  }

  function gameFinished(state){
    if(state === 'won'){
      handleIsGameFinished('won', 'Congratulations! You have won')
    } else{
      handleIsGameFinished('lost', 'You lost!')
    }
    return navigate("/finished")
  }

  function checkLifes(){
    let _lifes = lifes
    _lifes--
    if(_lifes === 0) { return gameFinished('lost') }
    handleLifes(_lifes)
  }

  function handleWord(word){
    let _sentence = [...sentence]
    _sentence.push(word)
    if(_sentence.length === words.length){
      let sentenceStr = _sentence.join(' ')
      if(sentenceStr === randomSentence.sentence){ return gameFinished('won')}
      checkLifes()
      let incorrect = new Audio("/sound/incorrect.mp3")
      incorrect.play()
      return reloadWord()
    }
    setSentence(prev => prev = _sentence)
  }

  const WordsOfSentence = () => {
    let _words = words.map((value, index)=>{
      let isWordInSentence = sentence.find(element => element === value)
      return <ButtonGeneral 
        key={`${value}_${index}`}
        className="m-words"
        bg="#F2F3F4"
        fontSize="1.75rem"
        onClick={()=>{handleWord(value)}} 
        disabled={isWordInSentence}
      >
        {value}
      </ButtonGeneral>
    })
    return <Row100 className="flex-wrap mt-3">
      {_words}
    </Row100>
  }

  const Sentence = () => {
    let words = sentence.join(' ')
    return <RowCenterXY>
      <Surface width={'100%'} minHeight="2.8rem" bg={'#F2F3F4'}>
        <TextLg>
          {words}
        </TextLg>
      </Surface>
    </RowCenterXY>
  }

  function render(){
    let expressions = []
    expressions.push(
      <FlexRelative key="description" column="true" width={'40%'} className="mt-25-xs mt-5">
        <div className="d-flex flex-column px-words">
          <Row100 className="justify-content-end mb-0">
            <IconBtn fill={'#fff'} onClick={reloadWord}><ReloadIcon /></IconBtn>
          </Row100>
          <Sentence />
          <WordsOfSentence />
        </div>
      </FlexRelative>
    )
    return expressions
  }

  return <Fragment>{render()}</Fragment>
};