import styled from 'styled-components'
// import theme from 'styles'
import background from '../../assets/background.jpg'

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
`
const BackgroundImageFade = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  background: linear-gradient(to bottom right, #373B44, #73C8A9); 
`

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  /* opacity: 0.5; */
`

export default function MainLayout({ children }) {
  return (
    <OuterContainer>
      {/* <BackgroundImageFade /> */}
      <BackgroundImage src={background} />
      <InnerContainer>
        {children}
      </InnerContainer>
    </OuterContainer>
  );
}