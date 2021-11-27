import styled from 'styled-components'

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
`

const InnerContainer = styled.div`
  background: black;
  padding: 15px 30px 30px;
  border-radius: 15px;
  box-shadow: 5px 5px 15px 5px #fff;
  max-width: 700px;
  width: 80%;
  min-height: 520px;
`


export default function MainContentCard({ children }) {

  return (
    <OuterContainer>
      <InnerContainer>
        {children}
      </InnerContainer>
    </OuterContainer>
  );
}