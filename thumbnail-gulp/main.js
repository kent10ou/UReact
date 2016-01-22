(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Kentou/git/tutorials/UReact/thumbnail-gulp/src/app.jsx":[function(require,module,exports){
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

},{}]},{},["/Users/Kentou/git/tutorials/UReact/thumbnail-gulp/src/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvS2VudG91L2dpdC90dXRvcmlhbHMvVVJlYWN0L3RodW1ibmFpbC1ndWxwL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBSSxPQUFPLEdBQUc7O0VBRVosYUFBYSxFQUFFLENBQUM7SUFDZCxLQUFLLEVBQUUsZUFBZTtJQUN0QixNQUFNLEVBQUUsRUFBRTtJQUNWLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLFdBQVcsRUFBRSwrSEFBK0g7SUFDNUksUUFBUSxFQUFFLGtDQUFrQztHQUM3QyxDQUFDO0lBQ0EsS0FBSyxFQUFFLGVBQWU7SUFDdEIsTUFBTSxFQUFFLEVBQUU7SUFDVixNQUFNLEVBQUUsWUFBWTtJQUNwQixXQUFXLEVBQUUsNkZBQTZGO0lBQzFHLFFBQVEsRUFBRSx5Q0FBeUM7R0FDcEQsQ0FBQztBQUNKLENBQUMsQ0FBQzs7QUFFRixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMxRCxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIG9wdGlvbnMgPSB7XG5cbiAgdGh1bWJuYWlsRGF0YTogW3tcbiAgICB0aXRsZTogJ1NlZSBUdXRvcmlhbHMnLFxuICAgIG51bWJlcjogMzIsXG4gICAgaGVhZGVyOiAnTGVhcm4gUmVhY3QnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVhY3QgaXMgZmFudGFzdGljIG5ldyBsaWJyYXJ5IGZvciBtYWtpbmcgZmFzdCwgZHluYW1pYyBwYWdlcy4gUmVhY3QgaXMgZmFudGFzdGljIG5ldyBsaWJyYXJ5IGZvciBtYWtpbmcgZmFzdCwgZHluYW1pYyBwYWdlcy4nLFxuICAgIGltYWdlVXJsOiAnaHR0cDovL2Zvcm1hdGpzLmlvL2ltZy9yZWFjdC5zdmcnXG4gIH0se1xuICAgIHRpdGxlOiAnU2VlIFR1dG9yaWFscycsXG4gICAgbnVtYmVyOiAyNSxcbiAgICBoZWFkZXI6ICdMZWFybiBHdWxwJyxcbiAgICBkZXNjcmlwdGlvbjogJ0d1bHAgd2lsbCBzcGVlZCB1cCB5b3VyIGRldmVsb3BtZW50IHdvcmtmbG93LiBHdWxwIHdpbGwgc3BlZWQgdXAgeW91ciBkZXZlbG9wbWVudCB3b3JrZmxvdy4nLFxuICAgIGltYWdlVXJsOiAnaHR0cDovL2JydW5jaC5pby9pbWFnZXMvb3RoZXJzL2d1bHAucG5nJ1xuICB9XVxufTtcblxudmFyIGVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFRodW1ibmFpbExpc3QsIG9wdGlvbnMpO1xuUmVhY3RET00ucmVuZGVyKGVsZW1lbnQsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFyZ2V0XCIpKTtcbiJdfQ==
