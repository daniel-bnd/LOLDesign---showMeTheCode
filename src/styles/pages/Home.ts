import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 133px;
  background: ${props => props.theme.colors.bg};
`

export const Content = styled.main`
  width: 1194px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.div`
  font: 300 42px/50px Lato, sans-serif;
  color: #444444;
  margin: 40px auto;
`
