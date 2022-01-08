import styled, { css, keyframes } from 'styled-components'
/*------------------> Animations <-------------------*/
const shake = keyframes`
	0% { transform: translate(1px, 1px) rotate(0deg); }
	10% { transform: translate(-1px, -2px) rotate(-1deg); }
	20% { transform: translate(-3px, 0px) rotate(1deg); }
	30% { transform: translate(3px, 2px) rotate(0deg); }
	40% { transform: translate(1px, -1px) rotate(1deg); }
	50% { transform: translate(-1px, 2px) rotate(-1deg); }
	60% { transform: translate(-3px, 1px) rotate(0deg); }
	70% { transform: translate(3px, 1px) rotate(-1deg); }
	80% { transform: translate(-1px, -1px) rotate(1deg); }
	90% { transform: translate(1px, 2px) rotate(0deg); }
	100% { transform: translate(1px, -2px) rotate(-1deg); }
`
/*----------------------------------------------*/

/*------------------> Text <-------------------*/
export const TextXl = styled.p`
	color: ${props => props.first ? props.theme.colors.first : props.second ? props.theme.colors.second : props.white ? 'white' : props.theme.colors.text};
	font-size: calc(2.5rem + 0.5vw);
`
export const TextLg = styled.p`
	color: ${props => props.first ? props.theme.colors.first : props.second ? props.theme.colors.second : props.white ? 'white' : props.theme.colors.text};
	font-size: calc(1.75rem + 0.5vw);
`
export const TextMd = styled.p`
	color: ${props => props.first ? props.theme.colors.first : props.second ? props.theme.colors.second : props.white ? 'white' : props.theme.colors.text};
	font-size: calc(1.5rem + 0.4vw);
  line-height: 3rem;
`
export const TextSm = styled.p`
	color: ${props => props.first ? props.theme.colors.first : props.second ? props.theme.colors.second : props.white ? 'white' : props.theme.colors.text};
	font-size: calc(1rem + 0.3vw);
`
export const TextXs = styled.p`
	color: ${props => props.first ? props.theme.colors.first : props.second ? props.theme.colors.second : props.white ? 'white' : props.theme.colors.text};
	font-size: calc(0.7rem + 0.2vw);
`
/*----------------------------------------------*/

/*---------------------> Layout <-------------- */
export const ColumnCenterXY = styled.div`
	width: ${props => props.w ? props.w : '100'}%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const Row100 = styled.div`
	width: 100%;
	display: flex;
	margin: 0.5rem 0;
`
export const RowCenterXY = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0.5rem 0;
`
export const Surface = styled.div`
	display: flex;
	height: min-content;
	flex-direction: column;
	background-color: ${props => props.bg ? props.bg : 'white'};
	padding: 1.5rem;
	border-radius: 7px;
	box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
	${props => props.width ? `width: ${props.width};`:''}
	${props => props.minHeight ? `min-height: ${props.minHeight};`:''}
`
export const FlexRelative = styled.div`
	width: ${props => props.widthXs ? props.widthXs : '100%'};
	display: flex;
	flex-direction: ${props => (props.column || props.breakSm) ? 'column':'row'};
	@media(min-width: 768px){
		width: ${props => props.width ? props.width:'100%'};
		${props => props.breakSm ? 'flex-direction: row;':''}
	}
`
export const WrapperNav = styled.div`
  position: absolute;
  display: flex;
  padding: 12px 0;
  align-items: center;
  width: 100%;
  height: 70px;
  z-index: 10;
`
export const WrapperEpisodeOne = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.url_mobile ? props.url_mobile:''});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  background-attachment: fixed;
  @media(min-width: 768px){
    background-image: url(${props => props.url ? props.url:''});
  }
`
export const LifesContainer = styled.div`
	${props => props.handleShake ? css`animation: ${shake} .5s;`:''}
	display: flex;
	align-items: center;
`
/*----------------------------------------------*/

/*------------------> Buttons <-----------------*/
export const ButtonGeneral = styled.button`
  background-color: ${props => props.bg ? props.bg : props.first ? props.theme.colors.first : 'transparent'};
  color: ${props => props.colorLetter ? props.colorLetter : `${props.theme.colors.text}`};
  border: 1px solid ${props => props.borderColor ? props.borderColor : 'transparent'};
  font-size: ${props => props.fontSize ? props.fontSize : '1rem'};
  cursor: pointer;
  border-radius: 4px;
  height: min-content;
  width: fit-content;
  padding: 6px 16px;
  transition: all .1s ease-in;
  &:hover{
    background-color: ${props => props.first ? props.theme.colors.buttons.hoverFirst : props.theme.colors.lightGray};
		transform: scale(1.1);
	}
  &:disabled{
    opacity: 0.5;
		cursor: initial;
  }
`
export const IconBtn = styled.a`
  background-color: transparent;
  border-radius: 50%;
  border: 0px;
  padding: 0.75rem 0.75rem 0.5rem 0.75rem;
  cursor: pointer;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  svg{
		fill: ${props => props.fill ? props.fill : props.theme.colors.first};
		width: 2rem;
		height: 2rem;
	}
  &:hover{
		background-color: ${props => props.theme.colors.strongGray};
		border-color: transparent;
	}
`
/*----------------------------------------------*/
