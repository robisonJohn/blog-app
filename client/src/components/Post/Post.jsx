import { Link } from 'react-router-dom';
import './Post.css';

const Post = (props) => {
    return (
        <div>
            <Link className="post" to={`api/posts/${props._id}`}>
                <img className="post-image" src={props.imgURL} alt={props.name} />
                <div className="post-name">{props.name}</div>
            </Link>
        </div>
    )
}
export default Post