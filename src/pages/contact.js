import React from 'react';

import PageTitle from '../components/PageTitle/pageTitle';
import Layout from '../components/layout';

export default () => (
    <Layout>
        <div className="center mw8 mt4 pv4 ph3">
        <PageTitle title="contact" align="left" />
        <p className="f4 lh-copy black-70 fw1">If you are interested in working with me on your next project, I would love to talk. Please write to me at the email address below: </p>
        <a href="mailto:tucker@tuckermckinney.com" className="f4 fw1 link">tucker@tuckermckinney.com</a>
        </div>
    </Layout>
)