import CommentBox from '../Components/Comments/CommentBox.Component.jsx';

ReactDOM.render(
    <CommentBox
        dataUrl="/comments"
        submitUrl="/comments/new"
        pollInterval={2000}
    />,
    document.getElementById('content'),
);