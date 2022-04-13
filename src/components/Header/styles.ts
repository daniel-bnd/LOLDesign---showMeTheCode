import styled, { css } from 'styled-components'
import brazilSVG from '../../assets/Brazil.svg'
import emailSVG from '../../assets/Email.svg'
import fbSVG from '../../assets/FB.svg'
import igSVG from '../../assets/IG.svg'
import linkedinSVG from '../../assets/Linkedin.svg'
import phoneSVG from '../../assets/Phone.svg'
import twitterSVG from '../../assets/Twitter.svg'

export const Container = styled.header`
  position: relative;
  width: 100%;
  height: 100%;
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

//---------------------ActionBar------------------------

export const ActionBar = styled.div`
  width: 100%;
  height: 46px;
  background: #2c2c2c;
`

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
`

export const Text = styled.span`
  font: 300 12px/21px Roboto, sans-serif;
  color: #bbbbbb;
  margin-left: 5px;
`

export const PhoneContainer = styled.div`
  margin-right: 13px;
`

export const Phone = styled(phoneSVG)``

export const EmailContainer = styled.div``

export const Email = styled(emailSVG)``

export const Social = styled.div`
  width: 95px;
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

//----------------------TopBar--------------------------

type TopBarProps = {
  size: string
}

export const TopBar = styled.div<TopBarProps>`
  width: 100%;
  height: 120px;
  background: #0c0c0c;

  ${props =>
    props.size === 'small' &&
    css`
      height: 0;
      top: 0;
      position: fixed;
      overflow: hidden;
      animation: changeHeight 0.7s forwards;
    `}

  @keyframes changeHeight {
    100% {
      height: 60px;
      overflow: visible;
    }
  }
`

export const Logo = styled.img<TopBarProps>`
  ${props =>
    props.size === 'normal' &&
    css`
      width: 134px;
    `}
  ${props =>
    props.size === 'small' &&
    css`
      width: 78px;
    `}
`

export const Menu = styled.nav<TopBarProps>`
  ul li {
    display: inline-block;
  }
  a {
    display: inline-block;
    position: relative;
    text-decoration: none;
    height: 100%;
    color: #fff;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: ${props => props.theme.colors.primary};
    }

    ${props =>
      props.size === 'normal' &&
      css`
        padding: 50px 25px;
      `}

    ${props =>
      props.size === 'small' &&
      css`
        padding: 18px 25px;
      `}
  }

  li {
    ${props =>
      props.size === 'normal' &&
      css`
        ::before {
          content: '';
          opacity: 0;
          width: 100%;
          height: 4px;
          background: ${props => props.theme.colors.primary};
          left: 0;
          position: relative;
          display: block;
          top: -4px;
          transition: opacity 0.3s ease-in-out;
        }
      `}

    ${props =>
      props.size === 'small' &&
      css`
        ::after {
          content: '';
          opacity: 0;
          width: 100%;
          height: 4px;
          background: ${props => props.theme.colors.primary};
          left: 0;
          position: relative;
          display: block;
          bottom: -4px;
          transition: opacity 0.3s ease-in-out;
        }
      `}
    &:hover {
      ::before {
        opacity: 1;
      }
      ::after {
        opacity: 1;
      }
    }
  }

  .active {
    a {
      color: ${props => props.theme.colors.primary};
    }
    ::before {
      opacity: 1;
    }
    ::after {
      opacity: 1;
    }
  }
`

export const MenuText = styled.span`
  font: 400 14px/19px 'Open Sans', sans-serif;
`

export const BrazilFlag = styled(brazilSVG)`
  margin-right: 5px;
`
