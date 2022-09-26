import styled from 'styled-components'

export const DetailCardStyle = styled.div`
  height: 90vh;
  max-height: 90vh;
  overflow: auto;
  background: rgb(27, 58, 104);
  padding: 30px 20px;
  color: #fff;
  .detail-image {
    height: 40vh;
    text-align: center;
    img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  }
  .details-title {
    margin: 30px 0 10px 0;
    font-size: 26px;
    font-weight: 600;
    text-transform: capitalize;
  }
  .details-desc {
    font-size: 14px;
    font-weight: 400;
  }
`
