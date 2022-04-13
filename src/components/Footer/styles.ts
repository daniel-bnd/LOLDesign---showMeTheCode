import styled from 'styled-components'
import arrowUpSVG from '../../assets/ArrowUp.svg'
import fbSVG from '../../assets/FB.svg'
import igSVG from '../../assets/IG.svg'
import linkedinSVG from '../../assets/Linkedin.svg'
import twitterSVG from '../../assets/Twitter.svg'

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 83px;
  background: #737373;
`

export const Content = styled.div`
  width: 1194px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Text = styled.span`
  font: 300 15px/18px Roboto, sans-serif;
  color: #cccccc;
`

export const Social = styled.div`
  width: 126px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const LinkStyled = styled.a`
  padding-top: 5px;
  &:hover {
    cursor: pointer;
    path {
      fill: ${props => props.theme.colors.primary};
      transition: fill 0.2s ease-in, transform 0.2s ease-in;
    }
  }
`

export const FB = styled(fbSVG)``
export const Twitter = styled(twitterSVG)``
export const Linkedin = styled(linkedinSVG)``
export const IG = styled(igSVG)``
export const ArrowUp = styled(arrowUpSVG)``
