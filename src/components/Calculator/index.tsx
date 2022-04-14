import { NextPage } from 'next'
import React, { useState } from 'react'
import * as S from './styles'

const Calculator: NextPage = () => {
  const [planValue, setPlanValue] = useState('default')
  const [originValue, setOriginValue] = useState('default')
  const [destinyValue, setDestinyValue] = useState('default')

  return (
    <S.Container>
      <S.Title>Restou dúvidas? Calcule o preço total</S.Title>

      <S.Box>
        <S.Form>
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
              <option value="faleMais30">FaleMais 30</option>
              <option value="faleMais60">FaleMais 60</option>
              <option value="faleMais120">FaleMais 120</option>
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
              <input type="number" name="minutes" required />
              <label htmlFor="minutes" className="label-minutes">
                <span className="content-minutes">Minutos</span>
              </label>
            </S.CustomInput>
          </S.FormFirstColumn>

          <S.FormSecondColumn>
            <S.Button>Calcular</S.Button>
          </S.FormSecondColumn>
        </S.Form>
        <S.FormResult>
          <S.ResultGray>
            <S.ResultTitle>Sem FaleMais</S.ResultTitle>
            <S.Result>
              <S.ResultCurrency>$</S.ResultCurrency>
              <S.ResultValue>00</S.ResultValue>
              <S.ResultCents>,00</S.ResultCents>
            </S.Result>
          </S.ResultGray>
          <S.ResultPrimary>
            <S.ResultTitle>Com FaleMais</S.ResultTitle>
            <S.Result>
              <S.ResultCurrency>$</S.ResultCurrency>
              <S.ResultValue>00</S.ResultValue>
              <S.ResultCents>,00</S.ResultCents>
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
