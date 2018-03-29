import React from 'react'
import Link from 'gatsby-link'

const Header = (props) => {
  return (
  <nav className={[props.border, "dt w-100 mw8 center"].join(' ')}>
    <div className="db dtc-l dtc-m w2 v-mid pa3">
      <Link to="/" className={[props.color, "dib f2 pa1 ba dn no-underline grow-large border-box"].join(' ')}>
        TM
      </Link>
    </div>
    <div className="db dtc-l dtc-m v-mid tl-s tr-m tr-l pa3-l">
      <Link className="f5 f4-m f4-l fw4 hover-yellow no-underline black-70 dib pv2 ph3" to="/about" >About</Link> 
      <Link className="f5 f4-m f4-l fw4 hover-yellow no-underline black-70 dib pv2 ph3" to="/projects" >Projects</Link> 
      <Link className="f5 f4-m f4-l fw4 hover-yellow no-underline black-70 dib pv2 ph3" to="/blog" >Blog</Link>
      <Link className="f5 f4-m f4-l fw4 hover-yellow no-underline black-70 dib pv2 ph3" to="/" >Contact</Link>
    </div>
  </nav>
  )};

export default Header


