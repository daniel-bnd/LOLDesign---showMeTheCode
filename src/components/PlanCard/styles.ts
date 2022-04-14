import styled, { css } from 'styled-components'

type ContainerProps = {
  center?: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 300px;
  height: 281px;
  background: #fafafa;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  padding: 20px 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${props =>
    props.center &&
    css`
      margin: 0 5vw;
      @media (max-width: 1070px) {
        margin: 40px 0;
      }
    `}
`

export const Text = styled.span`
  font: 600 16px/18px Roboto, sans-serif;
  color: ${props => props.theme.colors.gray};

  span {
    font-weight: 900;
  }
`

export const Title = styled.h2`
  font: 600 48px/60px Dosis, sans-serif;
  color: ${props => props.theme.colors.primary};
`

export const PriceTitle = styled.span`
  font: 400 14px/16px Roboto, sans-serif;
  color: ${props => props.theme.colors.gray};
  margin-top: 13px;
`

export const PriceBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  margin-top: 8px;
`

export const PriceCurrency = styled.span`
  font: 600 16px/18px Roboto, sans-serif;
`

export const PriceValue = styled(PriceCurrency)`
  font-size: 48px;
  line-height: 36px;
`

export const PriceFinalBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const PriceCents = styled(PriceCurrency)``

export const PriceTime = styled(PriceCurrency)``

export const Button = styled.button`
  border: none;
  width: 126px;
  height: 30px;
  border-radius: 7px;
  margin-top: 20px;
  background: ${props => props.theme.colors.primary};
  font: 600 14px/16px Roboto, sans-serif;
  color: #fff;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`

export const TextSmall = styled.span`
  margin-top: 20px;
  font: 400 11px/13px Roboto, sans-serif;
  color: ${props => props.theme.colors.gray};
`
