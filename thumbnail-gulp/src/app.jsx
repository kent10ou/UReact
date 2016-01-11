  // Initial setup options provided to the Badge component
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

  // options = { thumbnailData: [{}, {}, {}]}

  // Ask react to render this class, the instance (cookie dough cutout)
  // React, please render this class
  var element = React.createElement(ThumbnailList, options);

  // When we ask react to render this class, we will tell it
  // where to place the rendered element in the dom
  // React, after you render this class, please place it in my body tag
  ReactDOM.render(element, document.querySelector(".target"));
