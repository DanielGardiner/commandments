import { useRef } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import useOnClickOutside from '../hooks/useOnClickOutside'

const Background = styled(motion.div)`
  position: absolute;
  background-color: grey;
  opacity: ${(p) => p.isModalShowing ? 0.8 : 0};
  visibility: ${(p) => p.isModalShowing ? 'visible' : 'hidden'};
  transition: all 0.8s ease-in-out;
  z-index: 100;
  width: 100%;
  height: 100%;
`

const OuterContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

`



const ModalBox = styled(motion.div)`
  background: white;
  opacity: 1;
  padding: 50px 40px;
  border-radius: 10px;
  position: relative;

`

const ModalClose = styled.div`
  top: 10px;
  right: 15px;
  padding: 5px;
  position: absolute;
  &:hover {
    cursor: pointer;
  }
`

const modalVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animateIn: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  },
  animateOut: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.8
    }
  },
}

function Modal({ isModalShowing, setIsModalShowing }) {
  const modalRef = useRef();
  useOnClickOutside(modalRef, () => setIsModalShowing(false));

  return (
    <>
      <Background
        isModalShowing={isModalShowing}
      />
      <AnimatePresence>
        {isModalShowing && (
          <OuterContainer>
            <ModalBox
              ref={modalRef}
              setIsModalShowing={setIsModalShowing}
              variants={modalVariants}
              initial='initial'
              animate={'animateIn'}
              exit={'animateOut'}
            >
              <ModalClose onClick={() => setIsModalShowing(false)}>X</ModalClose>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/hGlyFc79BUE?autoplay=1"
                // src="https://www.youtube.com/embed/hGlyFc79BUE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </ModalBox>
          </OuterContainer>
        )}
      </AnimatePresence>
    </>

  )
}

export default Modal