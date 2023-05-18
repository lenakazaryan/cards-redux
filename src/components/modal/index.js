import { useSelector, useDispatch } from "react-redux";
import {
  closeModal,
  addCard,
  addCardTitle,
  cardTitleSelector,
  cardIdSelector,
  addCardId,
} from "../../redux/slices";
import "./style.css";

const Modal = () => {
  const dispatch = useDispatch();
  const cardContent = useSelector(cardTitleSelector);
  const cardTitle = useSelector(cardTitleSelector);
  const cardId = useSelector(cardIdSelector);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleCreateCard = (e) => {
    dispatch(addCardId());
    dispatch(addCard({ id: cardId, title: cardTitle }));
    dispatch(addCardTitle(""));
  };

  return (
    <div className="container">
      <div className="modal">
        <p>Create cart</p>
        <input
          placeholder="Add text..."
          value={cardContent}
          onChange={(e) => dispatch(addCardTitle(e.target.value))}
        />
        <button onClick={() => handleCreateCard()}>Add</button>
        <br />
        <button onClick={() => handleCloseModal()}>close</button>
      </div>
    </div>
  );
};

export default Modal;
