import React, {Fragment} from "react"
import { FlexRelative, Row100, WrapperNav } from "../../../styles/generalStyles";
import { Avatar } from "./avatar";
import { Lifes } from "./lifes";
import { Logo } from "./logo";
import { Sound } from "./sound";

export const Nav = (props) => {

  function render(){
    let expressions = []
    expressions.push(
      <WrapperNav key="nav">
        <Row100 className="px-4">
          <FlexRelative widthXs={'80%'} width={'50%'}>
            <Logo />
            <div className="d-flex ml-auto align-items-center">
              <Lifes />
              <Avatar />
            </div>
          </FlexRelative>
          <FlexRelative widthXs={'20%'} width={'50%'} className="justify-content-end">
            <Sound />
          </FlexRelative>
        </Row100>
      </WrapperNav>
    )
    return expressions
  }

  return <Fragment>{render()}</Fragment>
};