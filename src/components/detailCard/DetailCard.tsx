import React from 'react'
import Header from '../common/header/Header'
import { DetailCardStyle } from './style'
import subCategoriesList from '../subCategories'
import { useAtom } from 'jotai'
import { detailsAtom } from '../../jotai/jotai'

function DetailCard () {
  const [subCategoryId] = useAtom(detailsAtom)
  const data = subCategoriesList.filter((item) => item.id == subCategoryId)[0]
  return (
    <>
      <Header />
      <DetailCardStyle>
        <div className="detail-image">
          <img src={data.image} />
        </div>
        <div className="details-title">{data.name}</div>
        <div className="details-desc">{data.description}</div>
      </DetailCardStyle>
    </>
  )
}

export default DetailCard
