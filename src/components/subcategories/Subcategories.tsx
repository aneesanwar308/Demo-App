import React from 'react'
import Header from '../common/header/Header'
import subCategoriesList from '../subCategories'
import { useAtom } from 'jotai'
import { detailsAtom, routeAtom, subRouteAtom } from '../../jotai/jotai'
import { Container } from './style'
import { Link } from 'react-router-dom'
import Card from '../common/card/Card'

function SubCategories () {
  const [category] = useAtom(routeAtom)
  const [subCategory, setSubCategory] = useAtom(subRouteAtom)
  const [id, setId] = useAtom(detailsAtom)
  const data = subCategoriesList.filter((item) => item.route == category)
  return (
    <>
      <Header />
      <Container>
        {data.map((item) => {
          const routeName = item.name.replace(/\s/g, '-')
          return (
            <Link to={routeName}>
              <Card
                title={item.name}
                imageSrc={item.image}
                onClick={() => {
                  setSubCategory(item.name)
                  setId(item.id)
                }}
              />
            </Link>
          )
        })}
      </Container>
    </>
  )
}

export default SubCategories
