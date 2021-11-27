import { useState } from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.png'

const OuterContainer = styled.div`
  width: 100%;
  padding-top: 20px;
`

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonWrapper = styled.div`
display: flex;
align-items: center;
`

const Button = styled.button`
  background: ${(p) => p.isActive ? p.theme.primaryColor : 'grey'};
  padding: 5px 20px;
  border-radius: 4px;
  border: 1px solid #c7c7c7;
  color: white;

  &:hover {
    cursor: pointer;
  }
`

const ButtonRight = styled(Button)`
  margin-right: 5px;
`

const ButtonLeft = styled(Button)`
`

const LogoWrapper = styled.div`
`

const LogoImage = styled.img`
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  } 
`



export default function Commandments() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  return (
    <OuterContainer>
      <InnerContainer>
        <ButtonWrapper>
          <ButtonRight
            onClick={() => setIsDarkTheme(true)}
            isActive={isDarkTheme}>
            Dark
          </ButtonRight>
          <ButtonLeft
            onClick={() => {
              setIsDarkTheme(false)
              setTimeout(() => { setIsDarkTheme(true) }, 300)
            }}
            isActive={!isDarkTheme}>
            Light
          </ButtonLeft>
        </ButtonWrapper>

        <LogoWrapper>
          <LogoImage src={Logo} alt="" width={80} height={80} />
        </LogoWrapper>

      </InnerContainer>
    </OuterContainer>
  );
}