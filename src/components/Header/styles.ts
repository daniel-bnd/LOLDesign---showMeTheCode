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
  z-index: 99;
`

export const Content = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 6px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

//---------------------ActionBar------------------------

export const ActionBar = styled.div`
  width: 100%;
  height: 46px;
  background: #2c2c2c;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #0c0c0c;
  }
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

  @media (max-width: 768px) {
    margin: 0 auto;
  }
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
  isMenuActive?: boolean
}

export const TopBarPlaceHolder = styled.div<TopBarProps>`
  @media (min-width: 769px) {
    ${props =>
      props.size === 'small' &&
      css`
        height: 120px;
      `}
  }
`

export const TopBar = styled.div<TopBarProps>`
  width: 100%;
  height: 120px;
  background: #0c0c0c;
  transition: height 0.5s ease;

  @media (min-width: 769px) {
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
  }

  @media (max-width: 768px) {
    height: 90px;
    overflow: hidden;
    padding: 20px 0;
    transition: all 0.5s ease;

    ${props =>
      props.isMenuActive === true &&
      css`
        height: 240px;
      `}
  }
`

export const Logo = styled.img<TopBarProps>`
  width: 134px;
  ${props =>
    props.size === 'small' &&
    css`
      width: 78px;
    `}

  @media (max-width: 768px) {
    margin: 0 auto 10px auto;
  }
`

export const MobileMenuLines = styled.div`
  width: 22px;
  height: 1px;
  background: ${props => props.theme.colors.primary};
  box-shadow: 0 2px 5px rgba(241, 99, 15, 0.2);
  transition: all 0.5s ease-in-out;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 22px;
    height: 1px;
    background: ${props => props.theme.colors.primary};
    box-shadow: 0 2px 5px rgba(241, 99, 15, 0.2);
    transition: all 0.5s ease-in-out;
  }
  &:before {
    transform: translateY(-7px);
  }
  &:after {
    transform: translateY(7px);
  }
`

type MobileMenuProps = {
  status: string
}

export const MobileMenu = styled.div<MobileMenuProps>`
  display: none;
  position: absolute;
  width: 50px;
  height: 31px;
  right: -10px;
  top: 30px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    display: block;
  }
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
    padding: 50px 25px;

    @media (min-width: 769px) {
      ${props =>
        props.size === 'small' &&
        css`
          padding: 18px 25px;
        `}
    }
  }

  li {
    @media (min-width: 769px) {
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
            top: 2px;
            transition: opacity 0.3s ease-in-out;
          }
        `}
    }
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

  @media (max-width: 768px) {
    ul li {
      display: block;
    }

    li {
      width: 100%;
    }

    a {
      padding: 12px 600px 12px 20px;
    }
  }
`

export const MenuText = styled.span`
  font: 400 14px/19px 'Open Sans', sans-serif;
`

export const BrazilFlag = styled(brazilSVG)`
  margin-right: 5px;
`
