import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Input from "@mui/material/Input";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BlogModal = () => {
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [quillText, setQuillText] = useState("");

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        ["link"],
        ["clean"],
      ],
      handlers: {},
    },
  };

  const handleTextChange = (value) => {
    setQuillText(value);
  };

  const handleHeadingChange = (event) => {
    setHeading(event.target.value);
    setQuillText(`**${event.target.value}**\n${description}\n${image}`);
  };
  
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    setQuillText(`${heading}\n**${event.target.value}**\n${image}`);
  };
  

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Assuming you want to display a preview of the selected image
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Blog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Ceate Blogs here?"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Heading"
            value={heading}
            onChange={handleHeadingChange}
            fullWidth
            margin="normal"
          />

          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            fullWidth
            margin="normal"
          />
          {image && (
            <img
              src={image}
              alt="Preview"
              style={{ maxWidth: "100%", marginTop: 10 }}
            />
          )}
          <br />
          <br />
          <ReactQuill
            value={quillText}
            onChange={handleTextChange}
            theme="snow"
            modules={modules}
            placeholder="Write something neat..."
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BlogModal;