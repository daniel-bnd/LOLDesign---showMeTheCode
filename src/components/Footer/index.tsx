import { NextPage } from 'next'
import React from 'react'
import * as S from './styles'

const Footer: NextPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <S.Container>
      <S.Content>
        <S.Text>© LolDesign 2011-2019 · Todos os direitos reservados</S.Text>

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
          <S.LinkStyled
            href="#"
            onClick={() => {
              scrollToTop()
            }}
          >
            <S.ArrowUp />
          </S.LinkStyled>
        </S.Social>
      </S.Content>
    </S.Container>
  )
}

export default Footer
