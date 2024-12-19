/* eslint-disable react/prop-types */
import { useState } from "react";
import './TextMenu.css'

const MenuBar = ({ editor }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageWidth, setImageWidth] = useState("");
  const [imageHeight, setImageHeight] = useState("");
  const [height, setHeight] = useState(480);
  const [width, setWidth] = useState(640);

  if (!editor) return null;

  const addYoutubeVideo = () => {
    const url = prompt("Enter YouTube URL");
    if (url) {
      const videoWidth = Math.max(320, parseInt(width, 10)) || 640;
      const videoHeight = Math.max(180, parseInt(height, 10)) || 480;

      editor
        .chain()
        .focus()
        .setYoutubeVideo({
          src: url,
          width: videoWidth,
          height: videoHeight,
        })
        .run();
    }
  };

  const insertImage = () => {
    if (!imageUrl || !isValidImageUrl(imageUrl)) {
      alert("Please enter a valid image URL.");
      return;
    }
    editor
      .chain()
      .focus()
      .setImage({
        src: imageUrl,
        width: imageWidth || 250,
        height: imageHeight || 300,
      })
      .run();

    setImageUrl("");
    setImageWidth("");
    setImageHeight("");
  };

  const isValidImageUrl = (url) => /\.(jpeg|jpg|gif|png)$/i.test(url);

  return (
    <div className="menu-bar">
      <div className="control-group">
        <div className="button-group">

          <div className="yt-control">
          <input
            type="number"
            min="320"
            max="1024"
            placeholder="width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
          <input
            type="number"
            min="180"
            max="720"
            placeholder="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <button onClick={addYoutubeVideo}>Add YouTube video</button>
          </div>
         

        </div>
      </div>
      <div className="format">
      <button onClick={() => editor.chain().focus().toggleBold().run()}>
        Bold
      </button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()}>
        Italic
      </button>
      <button onClick={() => editor.chain().focus().toggleStrike().run()}>
        Strike
      </button>
      <button onClick={() => editor.chain().focus().toggleCode().run()}>
        Code
      </button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
        Bullet List
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        Clear marks
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        Clear nodes
      </button>
      <button onClick={() => editor.chain().focus().setParagraph().run()}>
        Paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        H3
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        Paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={editor.isActive("highlight") ? "is-active" : ""}
      >
        Highlight
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
      >
        Left
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={editor.isActive({ textAlign: "center" }) ? "is-active" : ""}
      >
        Center
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
      >
        Right
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={editor.isActive({ textAlign: "justify" }) ? "is-active" : ""}
      >
        Justify
      </button>
      </div>
     

      <div className="image-uploader">
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <input
          type="number"
          placeholder="Width (px)"
          value={imageWidth}
          onChange={(e) => setImageWidth(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (px)"
          value={imageHeight}
          onChange={(e) => setImageHeight(e.target.value)}
        />
        <button onClick={insertImage} disabled={!imageUrl}>
          Insert Image
        </button>

      </div>
    </div>
  );
};

export default MenuBar;
