"use strict";
/*
 Joakim Levin, 900820
 AD3897
*/

var Twitter = React.createClass({
	
	render: function(){
		return (
			<div>
				<a href="https://twitter.com/intent/follow?;region=follow_link&amp;screen_name=Joppeloppe&amp;tw_p=followbutton" target="_blank">
					<span>
						Follow <b>@Joppeloppe</b>
					</span>
				</a>
			</div>
		);
	}
});

ReactDOM.render(<Twitter />, document.getElementById('twitter'));