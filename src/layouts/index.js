import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import '../utilities/tachyons.min.css';

const TemplateWrapper = ({ children }) => (
  <div className="avenir">
    <Helmet
      title="Tucker McKinney - Web Developer
      "
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
      <div className="pb5 pb6-m pb7-l">    
        <Header />
      {children()}
      </div>
    </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper



