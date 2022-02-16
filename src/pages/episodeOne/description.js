import React, {Fragment} from "react"
import { useWindowSize } from "../../hooks/useWindowsSize";
import { FlexRelative, TextMd, TextXl } from "../../styles/generalStyles";

export const Description = (props) => {
  
  const windowSize = useWindowSize()

  function render(){
    let expressions = []
    expressions.push(
      <FlexRelative key="description" data-testid="description" column="true" width={'60%'} className="mt-5">
        <div className="px-5">
          <TextXl>Let's practice</TextXl>
          <div className="px-05">
            <TextMd lh="3.75rem" ls="1px" className="mt-2">Put the words in order to make {windowSize.width >= 768 && <br/>}a correct sentence.</TextMd>
          </div>
        </div>
      </FlexRelative>
    )
    return expressions
  }

  return <Fragment>{render()}</Fragment>
};