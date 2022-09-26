import React from 'react'
import Home from './components/home/Home'
import SubCategories from './components/subcategories/Subcategories'
import { Routes, Route } from 'react-router-dom'
import { useAtom } from 'jotai'
import { routeAtom, subRouteAtom } from './jotai/jotai'
import DetailCard from './components/detailCard/DetailCard'
function Routing () {
  const [categoryRoute] = useAtom(routeAtom)
  const [subCategoryRoute] = useAtom(subRouteAtom)
  const categoryRouteName = categoryRoute.replace(/\s/, '-')
  const subCategoryRouteName = subCategoryRoute.replace(/\s/, '-')
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${categoryRouteName}`} element={<SubCategories />} />
        {subCategoryRoute
          ? (
          <Route
            path={`/${categoryRouteName}/${subCategoryRouteName}`}
            element={<DetailCard />}
          />
            )
          : null}
      </Routes>
    </>
  )
}

export default Routing
