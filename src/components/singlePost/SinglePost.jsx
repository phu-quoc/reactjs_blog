import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://wallpaperaccess.com/full/31228.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          One two three four five.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Safak</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">One two three four five six seven eight nine ten one two three four five six seven eight nine ten</p>
      </div>
    </div>
  );
}
