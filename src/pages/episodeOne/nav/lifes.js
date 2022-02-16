import React, {Fragment, useContext} from "react"
import { LifesContainer } from "../../../styles/generalStyles";
import { HeartFilledIcon, HeartUnfilledIcon } from "../../../styles/icons";
import { Context } from "../../../utils/providers/context";

export const Lifes = () => {

  const {lifes} = useContext(Context)

  function render(){
    let expressions = [], hearts = []
    for(let i = 1; i <= 5; i++){
      if(lifes < i){
        hearts.unshift(
          <HeartUnfilledIcon 
            key={`heart_${i}`} 
            style={{marginRight:'.35rem',width: '20px', height: '20px', fill: '#CC0000'}} 
          />
        )
      } else {
        hearts.push(
          <HeartFilledIcon 
            key={`heart_${i}`}  
            data-testid="heart_filled" 
            style={{marginRight:'.35rem',width: '20px', height: '20px', fill: '#CC0000'}} 
          />
        )
      }
    }
    expressions.push(
      <LifesContainer key={`lifes_amount_${lifes}`} handleShake={lifes < 5 ? 'true' : undefined}>
        {hearts}
      </LifesContainer>
    )
    return expressions
  }

  return <Fragment>{render()}</Fragment>
};