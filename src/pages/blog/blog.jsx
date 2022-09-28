import React from 'react';
import BlogBanner from './blogBanner/blogbanner';
import BlogBody from './blogBody/blogBody';
function Blog(props) {
    return (
        <div>
            < BlogBanner />
            < BlogBody/>
        </div>
    );
}

export default Blog;