import React from 'react'
import { HeaderStyle } from './style'

function Header () {
  return (
        <HeaderStyle>
            <div className="title">
                Jugaari.com
            </div>
            <div className="image">
                <img src="https://progressiveapp-47c1a.web.app/images/Portrait.jpg" />
            </div>
        </HeaderStyle>
  )
}

export default Header
