import React, { useEffect } from 'react'
import Header from '../common/header/Header'
import categoriesList from '../categories'
import { HomeContainer } from './style'
import Card from '../common/card/Card'
import { Link } from 'react-router-dom'
import { useAtom } from 'jotai'
import { routeAtom } from '../../jotai/jotai'

function Comp () {
  const [route, setRoute] = useAtom(routeAtom)
  console.log(route)
  return (
    <>
      <Header />
      <HomeContainer>
        {categoriesList.map((item) => {
          const routeName = item.name.replace(/\s/g, '-')
          return (
            <Link to={routeName}>
              <Card
                title={item.name}
                imageSrc={item.image}
                onClick={() => setRoute(item.name)}
              />
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export default Comp
