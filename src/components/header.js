import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div className='header'>
    <div className='grid-container'>
      <div className='grid-x grid-padding-x align-center'>
        <div className='cell medium-12'>
          <h1 className='header__site-name'>
            <Link to="/" className='header__link'>
              {siteTitle}
            </Link>
          </h1>
        </div>
      </div>
      
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
