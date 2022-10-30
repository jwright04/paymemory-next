import { ReactNode } from 'react';

export interface CardIcon {
  cardId: string;
  cardIcon: ReactNode;
  selected: boolean;
  matched: boolean;
  disabled?: boolean;
}
