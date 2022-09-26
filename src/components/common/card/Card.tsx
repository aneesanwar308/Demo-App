import React from 'react'
import { CardStyle } from './style'

interface cardProps {
  title: string
  imageSrc: string
  onClick?: () => void
}

function Card (props: cardProps) {
  const { title, imageSrc, onClick } = props
  return (
        <CardStyle onClick={onClick}>
            <div className="card-img">
                <img src={imageSrc} />
            </div>
            <div className="card-title">
                {title}
            </div>
        </CardStyle>
  )
}

export default Card
