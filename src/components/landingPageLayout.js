import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import classes from './landingPage.module.css'
import '../utilities/tachyons.min.css';

const Layout = ({ children }) => (
    <div className="avenir">
        <div className={[classes.LandingPage, "vh-100 cover bg-left bg-center-l"].join(' ')}    >
            <Helmet
                title="Tucker McKinney - Web Developer"
                meta={[
                { name: 'description', content: 'Freelance web developer based in Hillsborough, NC with expertise in React.js, Node.js, WordPress, and Django' },
                { name: 'keywords', content: 'Web Developer, Wordpress, Hillsborough NC, Node.js, Django' },
                ]}
            />
            <div className="pb5 pb6-m pb6-l">    
                <Header border="" color="black-70" />
                {children}
            </div>
        </div>
    </div>
)

  
  export default Layout
  
