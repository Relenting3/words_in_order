import React, {Fragment, useContext} from "react"
import { IconBtn } from "../../../styles/generalStyles";
import { NoSoundIcon, SoundIcon } from "../../../styles/icons";
import { Context } from "../../../utils/providers/context";

export const Sound = (props) => {

  const {playingMusic, toggleMusic} = useContext(Context)

  function render(){
    let expressions = []
    expressions.push(
      <div key="sound" className="d-flex align-items-center">
				{playingMusic && <audio src={`/sound/background.mp3`} loop autoPlay/>}
        <IconBtn onClick={toggleMusic}>
          {playingMusic ? <SoundIcon className="svgSound" /> : <NoSoundIcon className="svgSound" /> }
        </IconBtn>
      </div>
    )
    return expressions
  }

  return <Fragment>{render()}</Fragment>
};