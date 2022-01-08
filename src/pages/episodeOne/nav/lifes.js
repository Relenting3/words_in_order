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
        hearts.push(
          <HeartUnfilledIcon 
            key={`heart_${i}`} 
            style={{marginRight:'.15rem',width: '24px', height: '24px', fill: '#f40707'}} 
          />
        )
      } else {
        hearts.push(
          <HeartFilledIcon 
            key={`heart_${i}`}  
            data-testid="heart_filled" 
            style={{marginRight:'.15rem',width: '24px', height: '24px', fill: '#f40707'}} 
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