export type GameEntity = GameIdleEntity
  | GameInProgressEntity
  | GameOverEntity
  | GameOverDrawEntity;

export type PlayerEntity = {
  id: string;
  login: string;
  rating: number;
};

export type GameIdleEntity = {
  id: string;
  creator: PlayerEntity[];
  status: 'idle';
};

export type GameInProgressEntity = {
  id: string;
  creator: PlayerEntity[];
  field: Field[];
  status: "inProgress";
};

export type GameOverEntity = {
  id: string;
  creator: PlayerEntity[];
  field: Field[];
  status: "gameOver";

  isDraw?: boolean;
  winner?: PlayerEntity[];
};

export type GameOverDrawEntity = {
  id: string;
  creator: PlayerEntity[];
  field: Field[];
  status: "gameOver";

  isDraw?: boolean;
  winner?: PlayerEntity[];
};

export type Field = Cell[];
export type Cell = GameSymbol | null;
export type GameSymbol = string;
