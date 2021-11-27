import styled from 'styled-components'
// import theme from 'styles'
import background from '../../assets/background3.jpg'

const OuterContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background: linear-gradient(to bottom right, #373B44, #73C8A9); */
  /* background: ${(p) => p.theme.primaryBackgroundColor}; */
  display: flex;
  justify-content: center;
`

const InnerContainer = styled.div`
  max-width: ${(p) => p.theme.maxWidth};
  width: 100%;
  padding: 0 10px;
  @media (min-width: ${(p) => p.theme.breakpointMd}) {
    padding: 0 50px;
  }
`
const BackgroundImageFade = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  background: linear-gradient(to bottom right, #373B44, #73C8A9); 
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