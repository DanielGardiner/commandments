import styled from 'styled-components'
import { motion } from 'framer-motion'

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
`

const InnerContainer = styled.div`
  width: 60%;
`

const Title = styled.h1`
margin-bottom: 40px;
`

const CommandmentUl = styled(motion.div)`
  
`
const CommandmentLi = styled(motion.div)`
  color: ${(p) => p.theme.textColor};
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
    }
`

export default function Commandments() {

  const commandments = [
    'Vel quam elementum pulvinar etiam',
    'At lectus urna duis convallis',
    'Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt',
    'Augue interdum velit euismod',
  ]

  const commandmentVariants = {
    initial: {
      y: 120,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
        delayChildren: 0.2
      }
    }
  }

  const commandmentItemVariants = {

    initial: {
      y: 120,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },

  }



  return (
    <OuterContainer>
      <InnerContainer>
        <Title>
          The 10 _ Commandments
        </Title>
        <CommandmentUl variants={commandmentVariants}
          initial="initial"
          animate="animate"
        >
          {commandments.map((item) => {
            return (
              <CommandmentLi variants={commandmentItemVariants}>
                {item}
              </CommandmentLi>
            )
          })}
        </CommandmentUl>
      </InnerContainer>
    </OuterContainer>
  );
}