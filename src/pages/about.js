import React from 'react';
import PageTitle from '../components/PageTitle/pageTitle';

const About = () => (
    <div className="center mw8 mt4 pv4 ph3 ph2-m">
        <PageTitle title="about" />
        <p className="db lh-copy w-100 black-70 fw1 f4 f3-m mt0">
            I am a freelance full-stack web developer based in Hillsborough, NC. I build web applications using the latest frontend technologies, including React.js and GraphQL, and develop
            backend architectures in Node.js and Django. I enjoy working with a variety of clients, including small businesses, non-profits, and research entities. <br />
            <br />
            Before I became a developer, I taught philosophy at the College of William and Mary in Williamsburg, VA. I lectured about ethics and wrote about the German existentialists. If this interests you, you can read excerpts from my past life <a className="link" href="https://philpapers.org/profile/609">here</a>. I am also <a className="link" href="http://flickr.com/photos/tmckinne83/">a photography enthusiast</a>.<br />
            <br />
        </p>
    </div>
)

export default About