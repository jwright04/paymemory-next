import React, { useState } from 'react';
import { CardIcon } from '../types';
import Card from './Card';
import {
  cardIconsArray,
  handleSelectedCard,
  isAllMatched,
  resetCards,
  resetGame,
} from './utilities';

type Props = {};

function CardContainer({}: Props) {
  const [displayWinMessage, setDisplayWinMessage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const onHandleSelected = (card: CardIcon) => {
    handleSelectedCard(card);
  };
  const onHandleResetCards = () => {
    resetCards();
  };
  const onHandleCheckPair = () => {};
  const onHandleCheckIsAllMatched = () => {
    if (isAllMatched(cardIconsArray)) {
      window.scroll(0, 0);
      setDisplayWinMessage(true);
    }
  };
  const onHandleDisabled = () => {};

  const onResetGame = (): void => {
    resetGame();
    setDisplayWinMessage(false);
    // this.showJumbotron = true;
  };

  return (
    <div className="my-0 mx-auto w-[80%] flex justify-center flex-wrap">
      CardContainer <br />I have a card{' '}
      <Card
        card={card}
        isDebug={false}
        isMatched={isMatched}
        isDisabled={isDisabled}
        handleSelected={onHandleSelected}
        handleResetCards={onHandleResetCards}
        handleCheckPair={onHandleCheckPair}
        handleCheckIsAllMatched={onHandleCheckIsAllMatched}
        handleDisabled={onHandleDisabled}
      />
    </div>
  );
}

export default CardContainer;
