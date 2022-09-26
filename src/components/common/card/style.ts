import styled from 'styled-components'

export const CardStyle = styled.div`
  background: rgb(18, 45, 85);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 6px 0px;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  .card-img {
    height: 100px;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .card-title {
    font-size: 14px;
    color: white;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
  }
`
