import styled from 'styled-components'
import { motion } from 'framer-motion'

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
  max-width: 750px;
`

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 40px;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
`

const CommandmentUl = styled(motion.div)`
  
`
const CommandmentLi = styled(motion.div)`
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  color: ${(p) => p.theme.textColor};
  margin-bottom: 20px;
  &:first-child {
    margin-top: 40px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`

export default function Commandments() {

  const commandments = [
    'Thou shalt not work past 17:30.' ,
    'Thou shalt not deploy after 16:00.' ,
    'Thou shalt meme at least once a day.' ,
    'Thou shalt play the deployment playlist for major deployment.' ,
    'Thou shalt always make time for WOGA.' ,
    'Thou shalt always use dark theme.' ,
    'Thou shalt only eat cereal after sunset.' ,
    'Thou shalt always French exit.' ,
    'Thou shalt not age.' ,
    'Thou shalt aim to get a bit wiser every day.' ,
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
          The 10 Ed Commandments
        </Title>
        <CommandmentUl variants={commandmentVariants}
          initial="initial"
          animate="animate"
        >
          {commandments.map((item, i) => {
            return (
              <CommandmentLi variants={commandmentItemVariants}>
                {i + 1}&nbsp; &nbsp;{item}
              </CommandmentLi>
            )
          })}
        </CommandmentUl>
      </InnerContainer>
    </OuterContainer>
  );
}