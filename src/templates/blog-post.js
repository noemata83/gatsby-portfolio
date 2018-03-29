import React from 'react';
import Link from 'gatsby-link';

import './blog-post.css';

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <div className="center mw8 mt4 pv4 ph2-m">
            <h1>{post.frontmatter.title}<span className="fr gray">{post.frontmatter.date}</span></h1>
            <div dangerouslySetInnerHTML={{__html: post.html }} />
            <Link to="/blog" className="db mt5 f4 link">Return to blog index</Link>
        </div>
    )
}

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } } ) {
            html
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
            }
        }
    }
`;