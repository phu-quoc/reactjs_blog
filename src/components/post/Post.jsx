import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://wallpaperaccess.com/full/31228.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          One two three four five six seven eight night ten
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        One two three four five six seven eight night ten one two three four
        five six seven eight night ten One two three four five six seven eight
        night ten one two three four five six seven eight night ten One two
        three four five six seven eight night ten one two three four five six
        seven eight night ten One two three four five six seven eight night ten
        one two three four five six seven eight night ten
        One two three four five six seven eight night ten one two three four
        five six seven eight night ten
        One two three four five six seven eight night ten one two three four
        five six seven eight night ten
        One two three four five six seven eight night ten one two three four
        five six seven eight night ten
        One two three four five six seven eight night ten one two three four
        five six seven eight night ten
        One two three four five six seven eight night ten one two three four
        five six seven eight night ten
        One two three four five six seven eight night ten one two three four
        five six seven eight night ten
      </p>
    </div>
  );
}
