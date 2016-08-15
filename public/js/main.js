var CommentBox = require("./todo.js");
var React   = require('react');
React.renderComponent(
  <CommentBox url="/api/comments" pollInterval={4000} />,
  document.getElementById('example')  
);

