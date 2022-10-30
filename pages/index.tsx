import Head from 'next/head';
import { useEffect, useState } from 'react';
import GameInstructions from '../app/components/GameInstructions';
import Nav from '../app/components/Nav';
import styles from '../styles/Home.module.css';
import Loader from '../app/components/Loader';
import Card from '../app/components/Card';
import { CardIcon } from '../app/types';
import {
  cardIconsArray,
  handleSelectedCard,
  isAllMatched,
  isMatchCheck,
  resetCards,
  resetGame,
  shuffleArray,
} from '../app/components/utilities';
import { useRouter } from 'next/router';

export const Home = () => {
  const [showInstructions, setShowInstructions] = useState(true);
  const [showWinMessage, setShowWinMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [cardArray, setCardArray] = useState(cardIconsArray);

  const router = useRouter();
  const year = new Date();

  const onCloseInstructions = () => {
    setShowInstructions(false);
  };

  const onShowHelp = () => {
    setShowInstructions(true);
  };

  const onHandleSelected = (card: CardIcon) => {
    handleSelectedCard(card);
    setCardArray([...cardIconsArray]);
  };

  const onHandleCheckPair = (selectedCardsArray: CardIcon[]) => {
    if (isMatchCheck(selectedCardsArray)) {
      checkIsAllMatched();
    }
    resetCards();
  };

  const checkIsAllMatched = () => {
    if (isAllMatched(cardArray)) {
      window.scroll(0, 0);
      setShowWinMessage(true);
    }
  };

  const onHandleDisabled = (disabled: boolean) => {
    disabled ? setIsLoading(true) : setIsLoading(false);
    setIsDisabled(disabled);
  };

  const onResetGame = (): void => {
    resetGame();
    setShowWinMessage(false);
    onShowHelp();
    setCardArray([...shuffleArray(cardIconsArray)]);
  };

  useEffect(() => {
    setCardArray([...shuffleArray(cardIconsArray)]);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Paymemory Next.jS 13</title>
        <meta
          name="description"
          content="Memory game created using NextJS 13, Tailwind 3, and Typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Nav */}
      <nav>
        <Nav handleShowHelp={onShowHelp} />
      </nav>

      {/* Instructions */}
      {showInstructions && (
        <GameInstructions handleCloseInstructions={onCloseInstructions} />
      )}

      {/* Congratulations */}
      {showWinMessage && (
        <div className="app__message text-center my-5">
          <h2>Congratulations, You Won!</h2>

          <div className="app__start-button mt-4">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={onResetGame}
            >
              Reset
            </button>
          </div>
        </div>
      )}

      {/* Loader */}
      <div
        className={`mt-12 flex justify-center transition-all ease-in-out ${
          isLoading ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Loader />
      </div>

      <main className={styles.main}>
        <div className="my-0 mx-auto w-[80%] flex justify-center flex-wrap">
          {cardArray.map((card: CardIcon, index) => (
            <Card
              key={index}
              classes="m-2 w-[150px]"
              card={card}
              isDebug={router.query.debug === 'true'}
              isMatched={card.matched}
              isDisabled={isDisabled}
              handleSelected={onHandleSelected}
              handleCheckPair={onHandleCheckPair}
              handleDisabled={onHandleDisabled}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-500 text-white w-full text-center text-xs fixed inset-x-0 bottom-0 py-2">
        Copyright {year.getFullYear()}
      </footer>
    </div>
  );
};

export default Home;
