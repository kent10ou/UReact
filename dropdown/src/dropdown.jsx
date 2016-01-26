var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

var ThumbnailList = React.createClass({
	render: function () {
		var list = this.props.thumbnailData.map(function(thumbnailProps) {
			return <Thumbnail {...thumbnailProps} />
		});

		return <div>
			{list}
		</div>
	}
});