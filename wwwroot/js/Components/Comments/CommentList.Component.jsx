import Comment from './Comment.Component.jsx';

export { CommentList as default };

class CommentList extends React.Component {
    constructor(props) {
        super(props);

        this.data = [];
    }

    render() {
        const commentNodes = this.props.data.map(comment => {
            console.log(comment);
            return (
                <Comment author={comment.author || ''} key={comment.id || -1}>
                    {comment.text}
                </Comment>
            );
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}