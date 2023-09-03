import"./post.css";
import logImage from '../assets/logo.png';
export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src={logImage} alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">music</span>
                <span className="postCat">music </span>
                <p className="postTitile">fkjghu</p>
                   
                
            </div>
        </div>

    </div>
  )
}
