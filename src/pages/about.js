import React from 'react';
import PageTitle from '../components/PageTitle/pageTitle';
import Link from 'gatsby-link';

const About = () => (
    <div className="center mw8 mt4 pv4 ph3">
        <PageTitle title="about" />
        <p className="db lh-copy w-100 black-70 fw1 f4 f3-m mt0">
            I am a freelance full-stack web developer based in Hillsborough, NC. I work on a wide variety of projects: from elegant, user-friendly websites for trusted platforms like Wordpress, to complex, custom-built single page applications using the latest technologies, including React.js, Node.js, and GraphQL. I enjoy working with a variety of clients, including small businesses, non-profits, and research institutions. If you are looking for a web developer for an upcoming project, please <Link to="/contact" className="link black">contact me</Link>. <br />
            <br />
            Before I became a developer, I taught philosophy at the College of William and Mary in Williamsburg, VA. I lectured about ethics and wrote about the German existentialists. If this interests you, you can read excerpts from my past life <a className="link black" href="https://philpapers.org/profile/609">here</a>. I am also <a className="link black" href="http://flickr.com/photos/tmckinne83/">a hobbyist photographer</a>. In my spare time, I tinker with everything.<br />
            <br />
        </p>
    </div>
)

export default About