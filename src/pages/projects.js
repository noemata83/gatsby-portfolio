import React from 'react';
import PageTitle from '../components/PageTitle/pageTitle';

import Project from '../components/Project/Project';

const Projects = () => (
        <div className="center mw8 mt4 pv4 ph3 ph2-m">
            <div className="db">
                <div className="tc v-mid fl h3 w-100 black-70 mb3 mr5" style={{backgroundImage:'url("/static/background.jpg")', backgroundSize: '100%', backgroundOrigin: 'border-box', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
                    <div className="h-100 w-100 relative">
                        <div className="absolute dib" style={{border:"1px solid white", height: '90%', width: '98%', top: '5%', left: '1%'}}>
                            <h1 className="dib absolute fw3 white ma0" style={{top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>projects</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="db f3 w-100 flex-ns justify-between">
                <Project 
                    title="Rosspens.com"
                    description="A site for lovers of vintage fountain pens."
                    img="/static/landing-crop-2.jpg"
                    alt="Rosspens.com"
                    />
                <Project
                    title="Omnivorous"
                    description="A recipe manager and shopping list app"
                    img="/static/omnivorous.jpg"
                    alt="Omnivorous"
                    />
                <Project
                    title="Lambda Land"
                    description="A suite of apps in a functional style"
                    img="/static/lambda.png"
                    alt="Lambda Land"
                    />
            </div>
        </div>
)

export default Projects