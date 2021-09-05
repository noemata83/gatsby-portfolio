import React from 'react'
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle/pageTitle'

const About = () => (
  <Layout>
    <div className="center mw8 mt4 pv4 ph3">
      <PageTitle title="about" />
      <p className="db lh-copy w-100 black-70 fw1 f4 f3-m mt0">
        I am a Full Stack developer at{' '}
        <a href="https://daysmart.com">DaySmart Software</a>. I am primarily
        interested in developing domain-driven workflows that are easy to reason
        about and easy to extend. To do this, I draw upon and evangelize for the
        abstractions of the FP (functional programming) paradigm and
        domain-driven design. In my day-to-day, I work with TypeScript, Node.js,
        Angular, and C#, but I have also worked with React, Python, Haskell, and
        Rust in other contexts. (I strive to be tech-stack agnostic)
      </p>
      <p className="db lh-copy w-100 black-70 fw1 f4 f3-m mt0">
        Before I became a developer, I taught philosophy at the College of
        William and Mary in Williamsburg, VA. I lectured about ethics and wrote
        about the German existentialists. If this interests you, you can read
        excerpts from my past life{' '}
        <a href="https://philpapers.org/profile/609">here</a>. I am also{' '}
        <a href="http://flickr.com/photos/tmckinne83/">
          a hobbyist photographer
        </a>
        .
      </p>
      <p className="db lh-copy w-100 black-70 fw1 f4 f3-m mt0">
        In my spare time, I tinker with everything.
      </p>
    </div>
  </Layout>
)

export default About
