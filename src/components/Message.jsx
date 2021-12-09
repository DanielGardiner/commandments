import { motion } from 'framer-motion'
import styled from 'styled-components'
import sloth from '../assets/sloth.jpeg'
import useHover from '../hooks/useHover'

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


const ImageOuterWrapper = styled.div`
display: flex;
justify-content:flex-end;
`
const ImageInnerWrapper = styled(motion.div)`
  border-radius: 50%;
  width: 200px;
  height: 200px;
`

const Image = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
`

function Message() {
  const [hoverRef, isHovered] = useHover();

  return (
    <Container>
      <MessageText>
        Edward, we will miss you so much! We have tried to capture your spirit and wisdom
        in The Ed Commandments to be our North Star. Good luck and stay in touch!
    </MessageText>
      <ImageOuterWrapper >
        <ImageInnerWrapper
          ref={hoverRef}
          animate={{
            rotate: isHovered ? 90 : 0
          }}
        >
          <Image src={sloth} />
        </ImageInnerWrapper>
      </ImageOuterWrapper>
    </Container>

  )

}

export default Message
