import styled from 'styled-components'

export const HeaderStyle = styled.div`
  background: rgb(27, 58, 104);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 10vh;
  border-bottom: 2px solid rgba(255, 255, 255, 0.19);
  .title {
    font-size: 30px;
    color: white;
  }

  .image {
    height: 40px;
    width: 40px;
    border: white 1px solid;
    object-fit: cover;
    border-radius: 50%;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
    }
  }
`
