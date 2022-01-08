import React, {Fragment, useContext} from "react"
import { useNavigate } from "react-router-dom";
import { ButtonGeneral, ColumnCenterXY, TextXl } from "../../styles/generalStyles";
import { HappyFaceIcon, SadFaceIcon } from "../../styles/icons";
import { Context } from "../../utils/providers/context";
import { NotFound } from "../notFound";

export const Finished = (props) => {

  const {isGameFinished, handleIsGameFinished} = useContext(Context)
	let navigate = useNavigate()

  function handlePlayAgain(){
    handleIsGameFinished('reset')
    navigate("/")
  }

  function render(){
    let expressions = []
    if(!isGameFinished) return <NotFound />
    expressions.push(
      <ColumnCenterXY key="finished" className="min-vh-100 text-center">
        <TextXl>{isGameFinished.msg}</TextXl>
        {isGameFinished.state === 'won' ? <HappyFaceIcon className="svgLg" />:<SadFaceIcon className="svgLg" />}
        <ButtonGeneral className="mt-5" onClick={handlePlayAgain} first colorLetter={'#fff'}>Play again</ButtonGeneral>
      </ColumnCenterXY>
    )
    return expressions
  }

  return <Fragment>{render()}</Fragment>
};