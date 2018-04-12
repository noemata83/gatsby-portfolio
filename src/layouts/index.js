import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import '../utilities/tachyons.min.css';

const TemplateWrapper = ({ children }) => (
  <div className="avenir">
    <Helmet
      title="Tucker McKinney - Web Developer"
      meta={[
        { name: 'description', content: 'Freelance web developer based in Hillsborough, NC with expertise in React.js, Node.js, WordPress, and Django' },
        { name: 'keywords', content: 'Web Developer, Wordpress, Hillsborough NC, Node.js, Django' },
      ]}
    />
      <div className="pb5 pb6-m pb6 -l">    
        <Header border="bb" color="black-70" />
      {children()}
      </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper


