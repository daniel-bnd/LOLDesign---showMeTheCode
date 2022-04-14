import type { NextPage } from 'next'
import Calculator from '../components/Calculator'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PlanCard from '../components/PlanCard'
import * as S from '../styles/pages/Home'

const Home: NextPage = () => {
  return (
    <S.Container>
      <Header />

      <S.Content>
        <S.Title>Planos FaleMais da Telzir</S.Title>

        <S.CardContainer>
          <PlanCard minutes={30} price={30} quantity="mensal" />
          <PlanCard minutes={60} price={49} quantity="anual" center={true} />
          <PlanCard minutes={120} price={99} quantity="anual" />
        </S.CardContainer>

        <S.CardContainer>
          <S.MinutesCard>
            <S.MinutesCardTitle>Custo por minuto</S.MinutesCardTitle>
            <S.MinutesCardTable>
              <S.MinutesCardTableTitle>Origem</S.MinutesCardTableTitle>
              <S.MinutesCardTableTitle>Destino</S.MinutesCardTableTitle>
              <S.MinutesCardTableTitle>$/min</S.MinutesCardTableTitle>
              <S.MinutesCardTableItem>011</S.MinutesCardTableItem>
              <S.MinutesCardTableItem>016</S.MinutesCardTableItem>
              <S.MinutesCardTableItem>1.90</S.MinutesCardTableItem>
              <S.MinutesCardTableItem>011</S.MinutesCardTableItem>
              <S.MinutesCardTableItem>017</S.MinutesCardTableItem>
              <S.MinutesCardTableItem>1.70</S.MinutesCardTableItem>
              <S.MinutesCardTableItem>011</S.MinutesCardTableItem>
              <S.MinutesCardTableItem>018</S.MinutesCardTableItem>
              <S.MinutesCardTableItem>0.90</S.MinutesCardTableItem>
              <S.MinutesCardTableItem>016</S.MinutesCardTableItem>
              <S.MinutesCardTableItem>011</S.MinutesCardTableItem>
              <S.MinutesCardTableItem>2.90</S.MinutesCardTableItem>
              <S.MinutesCardTableItem>017</S.MinutesCardTableItem>
              <S.MinutesCardTableItem>011</S.MinutesCardTableItem>
              <S.MinutesCardTableItem>2.70</S.MinutesCardTableItem>
              <S.MinutesCardTableItem>018</S.MinutesCardTableItem>
              <S.MinutesCardTableItem>011</S.MinutesCardTableItem>
              <S.MinutesCardTableItem>1.90</S.MinutesCardTableItem>
            </S.MinutesCardTable>
          </S.MinutesCard>

          <Calculator />
        </S.CardContainer>
      </S.Content>

      <Footer />
    </S.Container>
  )
}

export default Home
