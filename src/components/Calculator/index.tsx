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
    const Minutes: number = parseInt(minutesValue)
    const PlanValue: number = parseInt(planValue)
    const surcharge = 0.1 //10%

    function formatter(amount: number) {
      if (amount < 10) {
        return '0' + amount.toFixed(2)
      } else {
        return amount.toFixed(2)
      }
    }

    function setPrice(price: number) {
      setSemFaleMaisValue(formatter(price * Minutes))

      if (Minutes > PlanValue) {
        setComFaleMaisValue(
          formatter((Minutes - PlanValue) * (price + price * surcharge))
        )
      } else {
        setComFaleMaisValue('00,00')
      }
    }

    switch (`${originValue}to${destinyValue}`) {
      case '011to016':
        setPrice(1.9)
        break
      case '011to017':
        setPrice(1.7)
        break
      case '011to018':
        setPrice(0.9)
        break
      case '016to011':
        setPrice(2.9)
        break
      case '016to017':
        setPrice(2.1)
        break
      case '017to011':
        setPrice(2.7)
        break
      case '018to011':
        setPrice(1.9)
        break
      default:
        alert('Destino inválido')
        break
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
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
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
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
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
