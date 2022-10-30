import { CardIcon } from '../types';
import {
  FaCcAmex,
  FaCcDinersClub,
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcVisa,
  FaCcApplePay,
  FaCcAmazonPay,
  FaGoogleWallet,
  FaPaypal,
} from 'react-icons/fa';

export const cardIconsArray: CardIcon[] = [
  {
    cardId: 'fa-cc-amex',
    cardIcon: <FaCcAmex />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-diners-club',
    cardIcon: <FaCcDinersClub />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-discover',
    cardIcon: <FaCcDiscover />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-jcb',
    cardIcon: <FaCcJcb />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-mastercard',
    cardIcon: <FaCcMastercard />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-paypal',
    cardIcon: <FaCcPaypal />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-stripe',
    cardIcon: <FaCcStripe />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-visa',
    cardIcon: <FaCcVisa />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-apple-pay',
    cardIcon: <FaCcApplePay />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-amazon-pay',
    cardIcon: <FaCcAmazonPay />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-google-wallet',
    cardIcon: <FaGoogleWallet />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-paypal',
    cardIcon: <FaPaypal />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-amex',
    cardIcon: <FaCcAmex />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-diners-club',
    cardIcon: <FaCcDinersClub />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-discover',
    cardIcon: <FaCcDiscover />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-jcb',
    cardIcon: <FaCcJcb />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-mastercard',
    cardIcon: <FaCcMastercard />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-paypal',
    cardIcon: <FaCcPaypal />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-stripe',
    cardIcon: <FaCcStripe />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-visa',
    cardIcon: <FaCcVisa />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-apple-pay',
    cardIcon: <FaCcApplePay />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-amazon-pay',
    cardIcon: <FaCcAmazonPay />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-cc-google-wallet',
    cardIcon: <FaGoogleWallet />,
    selected: false,
    matched: false,
  },
  {
    cardId: 'fa-paypal',
    cardIcon: <FaPaypal />,
    selected: false,
    matched: false,
  },
];

// mutable array
export let selectedArray: CardIcon[] = [];

export const handleSelectedCard = (selectedCard: CardIcon): CardIcon[] => {
  return cardIconsArray.map((card) => {
    if (selectedCard.cardId === card.cardId) {
      selectedCard.selected = true;
      selectedCard.disabled = true;
    }
    return selectedCard;
  });
};

export const resetCards = (): CardIcon[] => {
  return cardIconsArray.map((card) => {
    card.selected = false;
    card.disabled = false;
    selectedArray = [];
    return card;
  });
};

export const isMatchCheck = (cardsArray: CardIcon[]): boolean => {
  if (cardsArray.length !== 2) {
    return;
  }

  if (cardsArray[0].cardId === cardsArray[1].cardId) {
    cardsArray[0].matched = true;
    cardsArray[1].matched = true;
    return cardsArray[0].cardId === cardsArray[1].cardId;
  }
  return false;
};

export const shuffleArray = (array: CardIcon[]): CardIcon[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const isAllMatched = (cardsArray: CardIcon[]): boolean => {
  return cardsArray.every((card) => card.matched);
};

export const resetGame = (): void => {
  cardIconsArray.map((card) => {
    card.selected = false;
    card.matched = false;
    return card;
  });
};
