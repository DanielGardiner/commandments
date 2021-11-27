import { useEffect, useState } from 'react'
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
  position: relative;
  &:before {
    opacity: ${(p) => p.isEdDisapproving ? 1 : 0};
    transition: all 0.5s ease-in-out;
    color: red;
    content: 'No...';
    position: absolute;
    left: -22px;
    top: 45px;
    background: white;
    padding: 3px 5px;
    border-radius: 4px;
    border-top-right-radius: 30px;
  }
`

const LogoImage = styled.img`
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  } 
`



export default function Commandments({ setIsModalShowing }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const [isEdDisapproving, setIsEdDisapproving] = useState(false);
  const EdDisapprovingDuration = 1500;

  useEffect(() => {
    if (isDarkTheme) return
    setIsEdDisapproving(true)
    setTimeout(() => {
      setIsEdDisapproving(false)
    }, EdDisapprovingDuration)
  }, [isDarkTheme])

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

        <LogoWrapper isEdDisapproving={isEdDisapproving} onClick={() => setIsModalShowing(true)}>
          <LogoImage src={Logo} alt="" width={80} height={80} />
        </LogoWrapper>
      </InnerContainer>
    </OuterContainer >
  );
}