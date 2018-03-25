import React from 'react';

const About = () => (
    <div className="center mw8 mt4 pv4 ph3 ph2-m">
        <div className="tc v-mid fl h5 w5 black-70 mb3 mr5" style={{backgroundImage:'url("/static/background.jpg', backgroundSize: '100%', backgroundOrigin: 'border-box', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
            <div className="h-100 w-100 relative">
                <div className="absolute dib w-90" style={{border:"1px solid white", height: '90%', top: '5%', left: '5%'}}>
                    <h1 className="dib absolute fw3 white ma0" style={{top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>about</h1>
                </div>
            </div>
        </div>
        <p className="db lh-copy w-100 black-70 fw1 f4 f3-m mt0">
            I am a freelance full-stack web developer based in Hillsborough, NC. I build web applications using the latest frontend technologies, including React.js, and develop
            backend architectures in Node.js and Django. I enjoy working with a variety of clients, including small businesses and non-profits. But I am especially eager to help research entities use the power of the web to convey
            their findings to the general public. <br />
            <br />
            Before I became a developer, I taught philosophy at the College of William and Mary in Williamsburg, VA. I lectured about ethics and wrote about the German existentialists. I am also
            a sometime enthusiast photographer.<br />
            <br />
        </p>
    </div>
)

export default About