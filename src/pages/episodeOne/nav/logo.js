import React, {Fragment} from "react"
import { useWindowSize } from "../../../hooks/useWindowsSize";
import { TextMd, TextSm } from "../../../styles/generalStyles";
import { NominisLogo } from "../../../styles/icons";

export const Logo = (props) => {

  const windowSize = useWindowSize()

  function render(){
    let expressions = []
    expressions.push(
      <Fragment key="logo">
        { windowSize.width >= 768 ? 
          <div className="d-flex flex-column">
            <TextMd lh="3.3rem" first="true"><b>Story Title</b></TextMd>
            <TextSm fontBase="1.35rem" first="true">Episode 1</TextSm>
          </div>
        :
          <div className="d-flex justify-content-center align-items-center mr-4">
            <div style={{width: '80px'}}>
              <NominisLogo style={{objectFit: 'contain', width: '100%', height: '100%', fill: '#CE0000'}} />
            </div>
          </div>
        }
      </Fragment>
    )
    return expressions
  }

  return <Fragment>{render()}</Fragment>
};