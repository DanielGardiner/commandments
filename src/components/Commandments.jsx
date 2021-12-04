import styled from 'styled-components'
import { motion } from 'framer-motion'

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 40px;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
`

const CommandmentUl = styled(motion.div)`
  overflow-y: hidden;
`
const CommandmentLi = styled(motion.div)`
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  color: ${(p) => p.theme.textColor};
  margin-bottom: 20px;
  &:first-child {
    margin-top: 20px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`

export default function Commandments() {

  const commandments = [
    'Thou shalt not work past 17:30.',
    'Thou shalt not deploy after 16:00 or on Friday.',
    'Thou shalt meme at least once a day.',
    'Thou shalt play the deployment playlist for major deployment.',
    'Thou shalt always make time for WOGA.',
    'Thou shalt always use dark theme.',
    'Thou shalt only eat cereal after sunset.',
    'Thou shalt always French exit.',
    'Thou shalt not age.',
    'Thou shalt aim to get a bit wiser every day.',
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
        staggerChildren: 0.5,
        delayChildren: 0.1
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
    <>
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
    </>
  );
}