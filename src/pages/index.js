import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
    <div className="tc-l mt4 mt5-m mt6-l ph3">
        <h1 className="f2 f1-l fw2 black-90 mb0 lh-title">Tucker McKinney</h1>
        <h2 className="fw1 f3 black-80 mt2 mb2">Freelance Web Developer</h2>
        <div className="dib mt2 fw1 center">
            <a className="link dim gray dib h2 w2 br-100 mr2 pa2 bg-near-white ba b--black-10" href="https://www.facebook.com/tucker.mckinney" title="">
                <svg data-icon="facebook" viewBox="0 0 32 32" style={{fill:"currentcolor"}}>
                <title>facebook icon</title>
                <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"></path>
                </svg>
            </a>
            <a className="link dim gray dib br-100 h2 w2 mr2 pa2 bg-near-white ba b--black-10" href="https://github.com/noemata83" title="">
                <svg data-icon="github" viewBox="0 0 32 32" style={{fill:'currentcolor'}}>
                    <title>github icon</title>
                    <path d="M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z"></path>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/tucker-mckinney-906037117/" className="link dim gray dib br-100 h2 w2 pa2 bg-near-white ba b--black-10" title="LinkedIn">
                <svg viewBox="0 0 32 32" style={{fill:'currentcolor'}}>
                    <title>linkedin icon</title>
                    <path d="M25,23.5v-6.2c0-3.3-1.8-4.9-4.2-4.9c-1.9,0-2.8,1.1-3.3,1.8v-1.5h-3.6c0,1,0,10.9,0,10.9h3.6v-6.1 c0-0.3,0-0.7,0.1-0.9c0.3-0.7,0.9-1.3,1.9-1.3c1.3,0,1.8,1,1.8,2.5v5.8L25,23.5L25,23.5z M10.1,11.2c1.3,0,2-0.8,2-1.9	c0-1.1-0.8-1.9-2-1.9s-2,0.8-2,1.9C8.1,10.3,8.9,11.2,10.1,11.2L10.1,11.2z M16,32C7.2,32,0,24.8,0,16C0,7.2,7.2,0,16,0	s16,7.2,16,16C32,24.8,24.8,32,16,32z M11.9,23.5V12.6H8.3v10.9H11.9z"/>
                </svg>
            </a>
        </div>
    </div>
)

export default IndexPage
