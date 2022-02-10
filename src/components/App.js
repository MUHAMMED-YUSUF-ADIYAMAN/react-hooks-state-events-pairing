import { useState } from "react";
import video from "../data/video.js";

function App() {
  console.log("Here's your data:", video);
  const [toggle, setToggle] = useState(true);
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
      <div>
        <button name="upvotes" onClick={() => setUpvotes(upvotes+1)}>
          {upvotes}👍
        </button>
        <button name="downvotes" onClick={() => setDownvotes(downvotes+1)}>
          {downvotes}👎
        </button>
      </div>
      <div className="comment">
        <button name="comment" onClick={() => setToggle(!toggle)}>
          {toggle ? "Hide Comments" : "Show Comments"}
        </button>
      </div>
      <hr />
      <h2>{video.comments.length} Comments</h2>
      <div className={toggle ? "Hide" : "Show"}>
        {video.comments.map((e) => (
          <div>
            <b>{e.user}</b>
            <p>{e.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
