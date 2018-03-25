import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
    <div className="tc-l mt4 mt5-m mt6-l ph3">
        <h1 className="f2 f1-l fw2 black-90 mb0 lh-title">Tucker McKinney</h1>
        <h2 className="fw1 f3 black-80 mt3 mb2">Freelance Web Developer</h2>
        <h2 className="fw1 f4 black-80 mt2 mb4">Hillsborough, NC</h2>
        <Link className="f5 no-underline grow dib v-mid bg-transparent black ba b--black ph3 pv2 mb3 center" to="/">Contact Me</Link>
    </div>
)

export default IndexPage
