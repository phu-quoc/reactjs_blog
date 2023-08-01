import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        src="https://wallpaperaccess.com/full/31228.jpg"
        alt=""
        className="headerImg"
      />
    </div>
  );
}
