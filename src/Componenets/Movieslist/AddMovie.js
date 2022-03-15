import { Rating, Stack } from "@mui/material";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AddMovie({ movies, setMovies }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const handleAdd = () => {
    setMovies([
      ...movies,
      { rating, name, description, image, type, date, id: Math.random() },
    ]);
    setShow(false);
  };

  console.log(handleAdd);
  return (
    <>
      <Button
        style={{ backgroundColor: "black", border: "none" }}
        onClick={handleShow}
      >
        Add a movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Image</label>
            <input
              type="text"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
            <label>Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <label>Type</label>
            <input
              type="text"
              onChange={(e) => setType(e.target.value)}
              value={type}
            />
            <label>Date</label>
            <input
              type="text"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />

            <label>Description</label>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <Stack spacing={1}>
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
              />
            </Stack>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            style={{ backgroundColor: "black", border: "none" }}
            onClick={handleAdd}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
