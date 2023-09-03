import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="../../../public/logo.png " alt=""  className="singlePostImg"/>
            <h1 className="singlePostTitle">Lorem, ipsum dolor sit amet c
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, repellat nesciunt at pariatur voluptates, libero necessitatibus, laboriosam dolorem quidem rem voluptatibus dolor fugiat animi non quae porro. Vero, qui beatae.</p>
            </div>
        </div>
    </div>
  )
}
