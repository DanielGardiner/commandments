import styled from 'styled-components'
// import theme from 'styles'

const OuterContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(p) => p.theme.primaryBackgroundColor};
  /* display: flex; */
  /* justify-content: center; */
`

const InnerContainer = styled.div`
  max-width: ${(p) => p.theme.maxWidth};
`

export default function MainLayout({ children }) {
  return (
    <OuterContainer>
      <InnerContainer>
        {children}
      </InnerContainer>
    </OuterContainer>
  );
}