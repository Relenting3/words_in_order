import React, {Fragment} from "react"
import { FlexRelative, WrapperEpisodeOne } from "../../styles/generalStyles";
import { Description } from "./description";
import { Nav } from "./nav";
import { Words } from "./words";

export const EpisodeOne = (props) => {

  function render(){
    let expressions = []
    expressions.push(
      <WrapperEpisodeOne key="EpisodeOne" url={"/bg.png"} url_mobile={"/bg_mobile.png"}>
        <Nav />
        <FlexRelative className="mt-nav" breakSm>
          <Description />
          <Words />
        </FlexRelative>
      </WrapperEpisodeOne>
    )
    return expressions
  }

  return <Fragment>{render()}</Fragment>
};