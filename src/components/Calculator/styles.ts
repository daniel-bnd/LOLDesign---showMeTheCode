import styled from 'styled-components'

export const Container = styled.div`
  width: 36.8vw;
  min-width: 550px;
  min-height: 304px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.lightGray};
  box-shadow: 0px 0px 10.0505px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  @media (max-width: 1070px) {
    width: 90vw;
    margin: 40px 0;
    min-width: 350px;
  }
`

export const Title = styled.h3`
  text-align: center;
  font: 700 32px/40px Dosis, sans-serif;
  color: ${props => props.theme.colors.primary};
`

export const Text = styled.p`
  text-align: center;
  max-width: 550px;
  margin-top: 10px;
  font: 200 11px/12px Roboto, sans-serif;
  color: ${props => props.theme.colors.gray};

  @media (max-width: 1070px) {
    max-width: 350px;
    margin-top: 20px;
  }
`

export const Box = styled.div`
  width: 28.6vw;
  max-width: 500px;
  min-width: 500px;
  min-height: 185px;
  margin-top: 15px;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 0 20px 20px;
  overflow: hidden;

  @media (max-width: 1070px) {
    width: 80vw;
    margin-top: 40px;
    min-height: 0;
    min-width: 250px;
  }
`

export const Form = styled.form`
  margin-top: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormFirstColumn = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 1070px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FormSecondColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const Select = styled.select`
  appearance: none;
  outline: none;
  background-color: #fdfdfd;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  margin: 0;
  width: 130px;
  height: 30px;
  padding: 5px;
  font: 400 14px/16px Roboto, sans-serif;
  color: ${props => props.theme.colors.gray};

  background-image: url('/ArrowDown.svg');
  background-position-x: 100%;
  background-position-y: 50%;
  background-repeat: no-repeat;

  &:focus {
    filter: brightness(0.94);
  }

  @media (max-width: 1070px) {
    margin: 10px 0;
  }
`

export const SelectSmall = styled(Select)`
  width: 90px;
`

export const CustomInput = styled.div`
  margin-top: -20px;
  width: 70px;
  height: 50px;
  position: relative;
  overflow-x: hidden;
  font: 400 12px/16px Roboto, sans-serif;
  color: ${props => props.theme.colors.gray};

  @media (max-width: 1070px) {
    margin-top: -10px;
    margin-bottom: 10px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input {
    width: 100%;
    height: 100%;
    color: #595f6e;
    padding-top: 20px;
    border: none;
    outline: none;

    &:focus + .label-minutes .content-minutes,
    &:valid + .label-minutes .content-minutes {
      transform: translateY(-110%);
      font-size: 14px;
      color: ${props => props.theme.colors.primary};
    }

    &:focus + label,
    &:valid + label {
      ::after {
        transform: translateX(0%);
      }
    }
  }

  label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 2px solid ${props => props.theme.colors.gray};

    ::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      height: 100%;
      width: 100%;
      border-bottom: 2px solid ${props => props.theme.colors.primary};
      transform: translateX(-100%);
      transition: transform 0.3s ease;
    }

    .content-minutes {
      position: absolute;
      bottom: 5px;
      left: 0;
      transition: all 0.3s ease;
    }
  }
`

export const Button = styled.button`
  border: none;
  margin-top: 15px;
  width: 100px;
  height: 25px;
  background: ${props => props.theme.colors.primary};
  border-radius: 5px;

  font: 600 14px/16px Roboto, sans-serif;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`

export const FormResult = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const ResultGray = styled.div`
  color: ${props => props.theme.colors.gray};
  text-align: center;
`

export const ResultPrimary = styled(ResultGray)`
  color: ${props => props.theme.colors.primary};
  margin-left: 60px;
  text-align: center;

  @media (max-width: 550px) {
    margin-left: 20px;
  }
`

export const ResultTitle = styled.span`
  font: 500 14px/16px Roboto, sans-serif;
`

export const Result = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: top;
`

export const ResultCurrency = styled.span`
  font: 600 16px/18px Roboto, sans-serif;
  text-align: center;
`

export const ResultValue = styled(ResultCurrency)`
  font-size: 48px;
  line-height: 36px;

  @media (max-width: 550px) {
    font-size: 40px;
  }
`

export const ResultCents = styled(ResultCurrency)``
