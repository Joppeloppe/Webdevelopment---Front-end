"use strict";
/*
 Joakim Levin, 900820
 AD3897
*/


var Comment = React.createClass({
	getInitialState: function(){
		return {editing: false}
	},
	edit: function(){
		console.log('Editing comment');
		
		this.setState({editing: true})
	},
	remove: function(){
		console.log('Removing comment');
		
		this.props.removeCommentText(this.props.index)
	},
	save: function(){
		console.log('Saving comment');

		var val = this.refs.newText.value;
		this.props.updateCommentText(val, this.props.index)
		
		console.log('New comment: ' + val);
		this.setState({editing: false})
	},
	renderNormal: function(){
		return (
				<div className="commentContainer">
					<div>{this.props.children}</div>
					<button onClick={this.edit} className="button-primary">Edit</button>
					<button onClick={this.remove} className="button-danger">Remove</button>
				</div>
		);
	},
	renderEdit: function(){
		return (
				<div className="commentContainer">
					<textArea ref="newText" defaultValue={this.props.children}></textArea>
					<button onClick={this.save} className="button-success">Save</button>
				</div>
		);
	},
	render: function(){
		if(this.state.editing)
			return this.renderEdit();
		else
			return this.renderNormal();
	}
	
});

var Board = React.createClass({
	getInitialState: function(){
		return {
			comments: []
		}
	},
	addComment: function(text){
		console.log('Adding comment');
		
		var arr = this.state.comments;
		arr.push(text);
		this.setState({comments: arr})
	},
	removeComment: function(i){
		console.log('Removing comment:' + i);
		
		var arr = this.state.comments;
		
		arr.splice(i, 1);
		this.setState({comments: arr})
	},
	updateComment: function(newText, i){
		console.log('Updating comment');
		
		var arr = this.state.comments;
		arr[i] = newText;
		this.setState({comments: arr})
	},
	eachComment: function (text, i){
		return (
				<Comment key={i} index={i} updateCommentText={this.updateComment} removeCommentText={this.removeComment}>
					{text}
				</Comment>
		);
	},
	render: function(){
		return (
				<div>
					<button onClick={this.addComment.bind(null, 'Default text')} className="button-info create">Add comment</button>
					<div className="board">
						{this.state.comments.map(this.eachComment)}
					</div>
				</div>
		);
	}
});

ReactDOM.render(<Board />, document.getElementById('container'));