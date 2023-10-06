import { useState } from "react";

export default function Entry({ action }) {
  const [content, setContent] = useState("");

  function submit(e) {
    e.preventDefault();
    action(content);
    setContent("");
  }

  return (
    <form onSubmit={submit}>
      <p>What images from NASA do you want to see?</p>
      <p
        className={`queryPrompt ${
          content ? "hiddenQueryPrompt" : "visibleQueryPrompt"
        }`}
      >
        Some of our favorites: Moon, Mars, Earth...
      </p>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
    </form>
  );
}
