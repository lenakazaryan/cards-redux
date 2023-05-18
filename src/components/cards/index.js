import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  openModalSelector,
  openModal,
  allCardSelector,
  cardIdSelector,
} from "../../redux/slices";
import Modal from "../modal";
import Card from "../Card";

import "./style.css";

const Cards = () => {
  const dispatch = useDispatch();
  const openIsModal = useSelector(openModalSelector);
  const allCards = useSelector(allCardSelector);
  const cardTitle = useSelector(cardIdSelector);

  return (
    <div>
      <div>
        {openIsModal && <Modal />}
        <div className="cards-container">
          <div className="cards-content">
            <button onClick={() => dispatch(openModal())}>Open Modal</button>
            <div>
              {cardTitle &&
                allCards.map(({ id, title }) => (
                  <Card key={id} id={id} title={title} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
