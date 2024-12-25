/* eslint-disable react/prop-types */
import { useState } from "react";

//!MUI Imports 
import { Button, ButtonGroup,Box} from "@mui/material";
import { green, red} from "@mui/material/colors";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import CodeIcon from "@mui/icons-material/Code";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import "./TextMenu.css";

const MenuBar = ({ editor }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageWidth, setImageWidth] = useState(250);
  const [imageHeight, setImageHeight] = useState(300);
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
          HTMLAttributes: {
            class: "video-container",
          },
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


          <Box className="yt-control">
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
            <Button sx={{ backgroundColor: red['A200'], '&:hover': { backgroundColor: red['A700'] } }} onClick={addYoutubeVideo}><VideoCallIcon color="error"/></Button>
          </Box>
        </div>
      </div>
      <ButtonGroup variant="contained" color="inherit" className="format">
        <Button  onClick={() => editor.chain().focus().toggleBold().run()}>
          <FormatBoldIcon/>
        </Button>

        <Button onClick={() => editor.chain().focus().toggleItalic().run()}>
          <FormatItalicIcon />
        </Button>

        <Button onClick={() => editor.chain().focus().toggleStrike().run()}>
          <FormatUnderlinedIcon />
        </Button>

        <Button onClick={() => editor.chain().focus().toggleCode().run()}>
          <CodeIcon />
        </Button>

        <Button onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <FormatListBulletedIcon />
        </Button>

        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          <strong>H1</strong>
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        >
          <strong>H2</strong>
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
        >
         <strong>H3</strong>
        </Button>
        <Button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
        >
          <FormatAlignLeftIcon/>
        </Button>

        <Button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
          }
        >
          <FormatAlignCenterIcon/>
        </Button>
        <Button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
        >
          <FormatAlignRightIcon/>
        </Button>
        <Button
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={
            editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
          }
        >
          <FormatAlignJustifyIcon/>
        </Button>
      </ButtonGroup>


      <Box sx={{ display: "flex", gap: 0.2 }}>
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
        <Button variant="contained"  sx={{ 
          backgroundColor: green['A200'], 
          '&:hover': { backgroundColor: green['A700'],
           } }} disableElevation onClick={insertImage} disabled={!imageUrl}>
           <AddPhotoAlternateIcon />
        </Button>
      </Box>
    </div>
  );
};

export default MenuBar;
