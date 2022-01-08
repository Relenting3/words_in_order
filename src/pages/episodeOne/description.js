import React, {Fragment} from "react"
import { FlexRelative, TextMd, TextXl } from "../../styles/generalStyles";

export const Description = (props) => {

  function render(){
    let expressions = []
    expressions.push(
      <FlexRelative key="description" data-testid="description" column="true" width={'60%'} className="mt-5">
        <div className="px-5">
          <TextXl>Let's practice</TextXl>
          <TextMd className="mt-2">Put the words in order to make a<br/>correct sentence.</TextMd>
        </div>
      </FlexRelative>
    )
    return expressions
  }

  return <Fragment>{render()}</Fragment>
};