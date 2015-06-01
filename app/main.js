// Required Library
var React = require('react');

// Related Control
var PostBox = require('./components/post/postbox');

React.render(
    <PostBox url="/api/posts" />,
    document.getElementById('content')
);
