import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import * as S from './styles'

const Header: NextPage = () => {
  const router = useRouter()
  const [navBarSize, setNavBarSize] = useState('normal')
  const [isMenuActive, setisMenuActive] = useState(false)

  if (typeof window !== 'undefined') {
    let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset
      if (prevScrollpos > 166) {
        setNavBarSize('small')
      } else {
        setNavBarSize('normal')
      }
      prevScrollpos = currentScrollPos
    }
  }

  return (
    <S.Container>
      <S.ActionBar>
        <S.Content>
          <S.Contact>
            <S.PhoneContainer>
              <S.Phone />
              <S.Text>+55 11 2694-7504</S.Text>
            </S.PhoneContainer>
            <S.EmailContainer>
              <S.Email />
              <S.Text>contato@loldesign.com.br</S.Text>
            </S.EmailContainer>
          </S.Contact>
          <S.Social>
            <S.LinkStyled href="https://www.facebook.com/LolDesign-158739404171769/?fref=ts">
              <S.FB />
            </S.LinkStyled>
            <S.LinkStyled href="https://twitter.com/LolDesign_BR">
              <S.Twitter />
            </S.LinkStyled>
            <S.LinkStyled href="https://www.linkedin.com/company/loldesign">
              <S.Linkedin />
            </S.LinkStyled>
            <S.LinkStyled href="https://www.instagram.com/loldesign_/">
              <S.IG />
            </S.LinkStyled>
          </S.Social>
        </S.Content>
      </S.ActionBar>

      <S.TopBarPlaceHolder size={navBarSize} />
      <S.TopBar size={navBarSize} isMenuActive={isMenuActive}>
        <S.Content>
          <S.Logo src="/Logo.png" alt="logo LOLDesign" size={navBarSize} />
          <S.MobileMenu
            onClick={() => setisMenuActive(!isMenuActive)}
            status={isMenuActive ? 'open' : 'close'}
          >
            <S.MobileMenuLines />
          </S.MobileMenu>
          <S.Menu size={navBarSize}>
            <ul>
              <li className={router.pathname == '/home' ? 'active' : ''}>
                <a href="https://www.loldesign.com.br/">
                  <S.MenuText>HOME</S.MenuText>
                </a>
              </li>
              <li className={router.pathname == '/' ? 'active' : ''}>
                <a href="#">
                  <S.MenuText>TELZIR</S.MenuText>
                </a>
              </li>
              <li>
                <a href="#pll_switcher">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}
                  >
                    <S.BrazilFlag />
                    <S.MenuText>Português</S.MenuText>
                  </div>
                </a>
              </li>
            </ul>
          </S.Menu>
        </S.Content>
      </S.TopBar>
    </S.Container>
  )
}

export default Header
