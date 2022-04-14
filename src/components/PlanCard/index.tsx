import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import * as S from './styles'

type PlanCard = {
  minutes: number
  price: number
  quantity: string
  center?: boolean
}

const PlanCard: NextPage<PlanCard> = ({ minutes, price, quantity, center }) => {
  const router = useRouter()

  return (
    <S.Container center={center}>
      <S.Text>
        Fale até <span>{minutes} minutos</span> grátis!
      </S.Text>

      <S.Title>FaleMais {minutes}</S.Title>

      <S.PriceTitle>Plano {quantity} a partir de:</S.PriceTitle>

      <S.PriceBox>
        <S.PriceCurrency>$</S.PriceCurrency>
        <S.PriceValue>{price}</S.PriceValue>

        <S.PriceFinalBox>
          <S.PriceCents>,99</S.PriceCents>
          <S.PriceTime>/mês</S.PriceTime>
        </S.PriceFinalBox>
      </S.PriceBox>

      <S.Button
        onClick={() => {
          router.push('https://www.loldesign.com.br/')
        }}
      >
        Compre Online
      </S.Button>

      <S.TextSmall>Pague apenas os minutos excedentes.</S.TextSmall>
    </S.Container>
  )
}

export default PlanCard
