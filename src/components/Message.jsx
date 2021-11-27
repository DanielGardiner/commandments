import styled from 'styled-components'
import star from '../assets/star.png'

const ImageWrapper = styled.div`
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`

function Message() {
  return (
    <>
      <ImageWrapper>
        <img src={star} />
      </ImageWrapper>

      <p>
        Edward, we will miss you so much! We have tried to capture your spirit and wisdom
        in The Ed Commandments to be our North star. Good luck and stay in touch!
      </p>
    </>
  )

}

export default Message