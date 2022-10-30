import classNames from 'classnames';
import { CardIcon } from '../types';
import { selectedArray } from './utilities';
import { FaPowerOff } from 'react-icons/fa';

type Props = {
  card: CardIcon;
  isDebug: boolean;
  isMatched: boolean;
  isDisabled: boolean;
  classes: string;

  handleSelected: (card: CardIcon) => void;
  handleCheckPair: (selectedArray: CardIcon[]) => void;
  handleDisabled: (isDisabled: boolean) => void;
};

const Card = ({
  card,
  isDebug,
  isDisabled,
  classes,
  handleSelected,
  handleCheckPair,
  handleDisabled,
}: Props) => {
  const checkCount = (card: CardIcon): void => {
    if (card.selected || isDisabled || card.matched) {
      return;
    }

    if (selectedArray.length < 2) {
      handleSelected(card);
      selectedArray.push(card);
    }

    if (selectedArray.length === 2) {
      handleDisabled(true);

      setTimeout(() => {
        handleCheckPair(selectedArray);
        handleDisabled(false);
      }, 1000);
    }
  };

  return (
    <div
      className={classNames(
        card?.matched || card?.selected ? 'cursor-default' : 'cursor-pointer',
        classes
      )}
    >
      <div
        className="flex max-w-[150px] h-[200px] border-2 border-solid border-white rounded-md"
        style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.3)' }}
        onClick={() => checkCount(card)}
      >
        <div className="m-1" style={{ flex: '1 0 20%' }}>
          <div
            className={classNames(
              'card__image flex justify-center items-center w-full h-full text-7xl text-white mb-3 bg-gray-200'
            )}
          >
            <div
              className={
                !card.selected && !card.matched ? 'text-white' : 'text-blue-800'
              }
            >
              {!card.selected && !card.matched ? <FaPowerOff /> : card.cardIcon}
            </div>
          </div>
        </div>
      </div>
      {isDebug && (
        <div className="mb-4">
          {card?.cardId} selected: {card?.selected} matched: {card?.matched}
        </div>
      )}
    </div>
  );
};

export default Card;
