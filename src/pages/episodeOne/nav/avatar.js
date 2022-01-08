import React, {Fragment} from "react"
import { useWindowSize } from "../../../hooks/useWindowsSize";
import AvatarImg from'../../../assets/png/avatar.png';

export const Avatar = (props) => {

  const windowSize = useWindowSize()
  if(windowSize.width < 768) return <Fragment />
  return <div className="d-flex justify-content-center align-items-center mr-4 ml-2">
    <div style={{width: '48px', height: '48px'}}>
      <img alt="logo" src={AvatarImg} style={{objectFit: 'contain', width: '100%', height: '100%'}} />
    </div>
  </div>
};