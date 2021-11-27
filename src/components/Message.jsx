import styled from 'styled-components'
import sloth from '../assets/sloth.jpeg'


const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`

const MessageText = styled.p`
  font-size: 22px;
  font-family: 'Roboto Mono', monospace;
  line-height: 40px;
`


const ImageWrapper = styled.div`
display: flex;
justify-content:flex-end;
`

const Image = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
`

function Message() {
  return (
    <Container>
      <MessageText>
        Edward, we will miss you so much! We have tried to capture your spirit and wisdom
        in The Ed Commandments to be our North star. Good luck and stay in touch!
    </MessageText>
      <ImageWrapper>
        <Image src={sloth} />
      </ImageWrapper>

    </Container>

  )

}

export default Message