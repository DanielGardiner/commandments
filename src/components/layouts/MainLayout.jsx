import styled from 'styled-components'
import background from '../../assets/background3.jpg'

const OuterContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`

const InnerContainer = styled.div`
  position: relative;
  max-width: ${(p) => p.theme.maxWidth};
  width: 100%;
  padding: 0 10px;
  @media (min-width: ${(p) => p.theme.breakpointMd}) {
    padding: 0 50px;
  }
`

const BackgroundImageWrapper = styled.div`
background: black;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  min-height: 100vh;
`
const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
`

export default function MainLayout({ children }) {
  return (
    <OuterContainer>
      <BackgroundImageWrapper>
        <BackgroundImage src={background} />
      </BackgroundImageWrapper>
      <InnerContainer>
        {children}
      </InnerContainer>
    </OuterContainer>
  );
}