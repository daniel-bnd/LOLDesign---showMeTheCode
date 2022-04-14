import { NextPage } from 'next'
import React, { useState } from 'react'
import * as S from './styles'

const Calculator: NextPage = () => {
  const [planValue, setPlanValue] = useState<string>('default')
  const [originValue, setOriginValue] = useState('default')
  const [destinyValue, setDestinyValue] = useState('default')
  const [minutesValue, setMinutesValue] = useState('')
  const [semFaleMaisValue, setSemFaleMaisValue] = useState<string | number>(
    '00,00'
  )
  const [comFaleMaisValue, setComFaleMaisValue] = useState<string | number>(
    '00,00'
  )

  function calcValues() {
    const plan = parseInt(planValue)
    const minutes: any = parseInt(minutesValue)

    const origin011to016 = 1.9
    const origin011to017 = 1.7
    const origin011to018 = 0.9
    const origin016to011 = 2.9
    const origin017to011 = 2.7
    const origin018to011 = 1.9
    const surcharge = 0.1 //10%

    const formatter = (amount: number) => {
      if (amount < 10) {
        return '0' + amount.toFixed(2)
      } else {
        return amount.toFixed(2)
      }
    }

    function semFaleMais(origin: number) {
      const data = origin * minutes
      setSemFaleMaisValue(formatter(data))
      console.log({ semFaleMaisValue })
    }

    function comFaleMais(origin: number) {
      if (minutes > plan) {
        const data = (minutes - plan) * (origin + origin * surcharge)
        setComFaleMaisValue(formatter(data))
      } else {
        setComFaleMaisValue('00,00')
      }
      console.log({ comFaleMaisValue })
    }

    function invalidDestiny() {
      alert('Destino inválido')
    }

    if (originValue === 'origin011') {
      if (destinyValue === 'destiny016') {
        semFaleMais(origin011to016)
        comFaleMais(origin011to016)
      } else if (destinyValue === 'destiny017') {
        semFaleMais(origin011to017)
        comFaleMais(origin011to017)
      } else if (destinyValue === 'destiny018') {
        semFaleMais(origin011to018)
        comFaleMais(origin011to018)
      } else {
        invalidDestiny()
      }
    }
    if (originValue === 'origin016') {
      if (destinyValue === 'destiny011') {
        semFaleMais(origin016to011)
        comFaleMais(origin016to011)
      } else {
        invalidDestiny()
      }
    }
    if (originValue === 'origin017') {
      if (destinyValue === 'destiny011') {
        semFaleMais(origin017to011)
        comFaleMais(origin017to011)
      } else {
        invalidDestiny()
      }
    }
    if (originValue === 'origin018') {
      if (destinyValue === 'destiny011') {
        semFaleMais(origin018to011)
        comFaleMais(origin018to011)
      } else {
        invalidDestiny()
      }
    }
  }

  function handleSubmitForm(e: any) {
    e.preventDefault()
    calcValues()
  }

  return (
    <S.Container>
      <S.Title>Restou dúvidas? Calcule o preço total</S.Title>

      <S.Box>
        <S.Form action="submit" onSubmit={handleSubmitForm}>
          <S.FormFirstColumn>
            <S.Select
              name="planoFaleMais"
              defaultValue={planValue}
              onChange={e => setPlanValue(e.target.value)}
              required
            >
              <option value="default" disabled hidden>
                Plano FaleMais
              </option>
              <option value="30">FaleMais 30</option>
              <option value="60">FaleMais 60</option>
              <option value="120">FaleMais 120</option>
            </S.Select>
            <S.SelectSmall
              name="origin"
              defaultValue={originValue}
              onChange={e => setOriginValue(e.target.value)}
              required
            >
              <option value="default" disabled hidden>
                Origem
              </option>
              <option value="origin011">011</option>
              <option value="origin016">016</option>
              <option value="origin017">017</option>
              <option value="origin018">018</option>
            </S.SelectSmall>
            <S.SelectSmall
              name="destiny"
              defaultValue={destinyValue}
              onChange={e => setDestinyValue(e.target.value)}
              required
            >
              <option value="default" disabled hidden>
                Destino
              </option>
              <option value="destiny011">011</option>
              <option value="destiny016">016</option>
              <option value="destiny017">017</option>
              <option value="destiny018">018</option>
            </S.SelectSmall>
            <S.CustomInput>
              <input
                value={minutesValue}
                onChange={e => setMinutesValue(e.target.value)}
                type="number"
                name="minutes"
                required
              />
              <label htmlFor="minutes" className="label-minutes">
                <span className="content-minutes">Minutos</span>
              </label>
            </S.CustomInput>
          </S.FormFirstColumn>

          <S.FormSecondColumn>
            <S.Button type="submit">Calcular</S.Button>
          </S.FormSecondColumn>
        </S.Form>
        <S.FormResult>
          <S.ResultGray>
            <S.ResultTitle>Sem FaleMais</S.ResultTitle>
            <S.Result>
              <S.ResultCurrency>$</S.ResultCurrency>
              <S.ResultValue>
                {semFaleMaisValue.toString().slice(0, -3)}
              </S.ResultValue>
              <S.ResultCents>
                ,{semFaleMaisValue.toString().slice(-2)}
              </S.ResultCents>
            </S.Result>
          </S.ResultGray>
          <S.ResultPrimary>
            <S.ResultTitle>Com FaleMais</S.ResultTitle>
            <S.Result>
              <S.ResultCurrency>$</S.ResultCurrency>
              <S.ResultValue>
                {comFaleMaisValue.toString().slice(0, -3)}
              </S.ResultValue>
              <S.ResultCents>
                ,{comFaleMaisValue.toString().slice(-2)}
              </S.ResultCents>
            </S.Result>
          </S.ResultPrimary>
        </S.FormResult>
      </S.Box>

      <S.Text>
        * Com algum plano FaleMais os minutos excedentes tem um acréscimo de 10%
        sobre a tarifa normal do minuto.
      </S.Text>
    </S.Container>
  )
}

export default Calculator
