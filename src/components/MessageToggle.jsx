import styled from 'styled-components'
import star from '../assets/star.png'

const ImageWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50px;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`

function MessageToggle({ isMessageShowing, setIsMessageShowing }) {
  return (
    <ImageWrapper onClick={() => setIsMessageShowing(!isMessageShowing)}>
      <img src={star} />
    </ImageWrapper>
  )

}

export default MessageToggle