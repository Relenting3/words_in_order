import React from "react"
import { useNavigate } from "react-router-dom";
import { ColumnCenterXY, TextLg, ButtonGeneral } from "../../styles/generalStyles";
import { NotFoundIcon } from "../../styles/icons";

export const NotFound = (props) => {

	let navigate = useNavigate()
  const handleHome = () => navigate('/')

  return <ColumnCenterXY className="min-vh-100">
    <TextLg primary>Ups! There's nothing here.</TextLg>
    {/*Illustration*/}
    <NotFoundIcon className="svgLg text-center" />
    <ButtonGeneral colorLetter="#fff" className="mt-5" first="true" onClick={handleHome}>Go to home</ButtonGeneral>
  </ColumnCenterXY>
};