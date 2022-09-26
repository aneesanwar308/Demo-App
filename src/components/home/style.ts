import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 90vh;
  max-height: 90vh;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  grid-auto-rows: 170px;
  gap: 15px;
  background: rgb(27, 58, 104);
  padding: 30px 20px;
  a {
    text-decoration: none;
  }
`
