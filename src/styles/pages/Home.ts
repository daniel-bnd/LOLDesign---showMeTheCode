import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 83px;
  background: ${props => props.theme.colors.bg};
`

export const Content = styled.main`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 6px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font: 300 42px/50px Lato, sans-serif;
  color: #444444;
  margin: 40px auto;
  text-align: center;

  @media (max-width: 460px) {
    font-size: 36px;
  }
`

export const CardContainer = styled.div`
  max-width: 1116px;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  @media (max-width: 1070px) {
    flex-direction: column;
    align-items: center;
  }
`

export const MinutesCard = styled.div`
  width: 300px;
  height: 304px;
  padding-top: 25px;
  margin-right: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.lightGray};
  box-shadow: 0px 0px 10.0505px rgba(0, 0, 0, 0.25);

  @media (max-width: 1070px) {
    margin-right: 0;
  }
`

export const MinutesCardTitle = styled.h3`
  font: 700 31px/40px Dosis, sans-serif;
  color: ${props => props.theme.colors.primary};
`

export const MinutesCardTable = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
`

export const MinutesCardTableTitle = styled.div`
  background: #fff;
  border: 1px solid ${props => props.theme.colors.lightGray};
  padding: 10px;
  text-align: center;
  font: 500 18px/20px Roboto, sans-serif;
  color: ${props => props.theme.colors.gray};
`

export const MinutesCardTableItem = styled(MinutesCardTableTitle)`
  padding-top: 5px;
  padding-bottom: 6px;
  font-size: 17px;
  line-height: 20px;
`
