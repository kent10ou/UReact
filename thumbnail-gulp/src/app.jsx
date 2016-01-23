var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {

  thumbnailData: [{
    title: 'See Tutorials',
    number: 32,
    header: 'Learn React',
    description: 'React is fantastic new library for making fast, dynamic pages. React is fantastic new library for making fast, dynamic pages.',
    imageUrl: 'http://formatjs.io/img/react.svg'
  },{
    title: 'See Tutorials',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
    imageUrl: 'http://brunch.io/images/others/gulp.png'
  }]
};

var element = React.createElement(ThumbnailList, options);
ReactDOM.render(element, document.querySelector(".target"));
