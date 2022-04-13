import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import * as S from '../styles/pages/Home'

const Home: NextPage = () => {
  return (
    <S.Container>
      <Header />

      <S.Content>
        <S.Title>Planos FaleMais da Telzir</S.Title>
      </S.Content>

      <Footer />
    </S.Container>
  )
}

export default Home
