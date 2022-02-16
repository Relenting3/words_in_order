import React, {Fragment} from "react"
import { useWindowSize } from "../../../hooks/useWindowsSize";
import AvatarImg from'../../../assets/png/avatar.png';

export const Avatar = (props) => {

  const windowSize = useWindowSize()
  if(windowSize.width < 768) return <Fragment />
  return <div className="d-flex justify-content-center align-items-center mr-4 ml-3">
    <div className="shadow" style={{width: '58px', height: '58px', borderRadius: '50%'}}>
      <img alt="logo" src={AvatarImg} style={{objectFit: 'contain', width: '100%', height: '100%'}} />
    </div>
  </div>
};