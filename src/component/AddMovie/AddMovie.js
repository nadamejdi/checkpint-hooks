import "./AddMovie.css";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

const AddMovie = ({addMovie}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [rating, setRating] = useState('')
  const [image, setImage] = useState('')
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  const handleClick = () => {
    const newMovie = {
      id : Math.random(),
      name,
      rating: +rating,
      date,
      image,
      type,
      description,
    };

    addMovie(newMovie)

    setModalIsOpen(false)
    setName('');
    setDate('');
    setRating('');
    setImage('');
    setType('');
    setDescription('');
  }

  return (
    <div className="Add-btn-container">
      <button className="Add-btn" onClick={openModal}>
        +
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input type="text" name="name" value={name} onChange={(event)=> setName(event.target.value) } />
          
          <label>Movie Rate</label>
          <input type="number" name="rating" value={rating} onChange={(event)=> setRating(event.target.value) } />
          
          <label>Movie Release Date</label>
          <input type="number" name="date" value={date} onChange={(event)=> setDate(event.target.value) } />

          <label>Movie Image</label>
          <input type="url" name="image" value={image} onChange={(event)=> setImage(event.target.value) } />

          <label>Movie Type</label>
          <input type="text" name="type" value={type} onChange={(event)=> setType(event.target.value) } />

          <label>Movie Summary</label>
          <textarea name="description" value={description} onChange={(event)=> setDescription(event.target.value)}></textarea>
          <button className="Modal-btn" onClick={handleClick}>Submit</button>
          <button className="Modal-btn" onClick={closeModal}>close</button>
        </form>
      </Modal>
    </div>
  );
};

export default AddMovie;
