import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import '../utilities/tachyons.min.css';

const TemplateWrapper = ({ children }) => (
    <div className="vh-100 avenir">
        <div className="cover h-100 bg-left bg-center-l" style={{backgroundImage:'url("/static/background.jpg")'}}>
            <Helmet
                title="Tucker McKinney - Web Developer
                "
                meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
                ]}
            />
            <div className="pb5 pb6-m pb6-l">    
                <Header color="black-70" />
                {children()}
            </div>
        </div>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func,
  }
  
  export default TemplateWrapper
  
