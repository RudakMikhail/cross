export type GameEntity =
  | GameIdleEntity
  | GameInProgressEntity
  | GameOverEntity
  | GameOverDrawEntity

export type PlayerEntity = {
  id: string;
  login: string;
  rating: number;
};

export type GameIdleEntity = {
  id: string;
  players: PlayerEntity[];
  field: Field;
  status: 'idle';
};

export type GameInProgressEntity = {
  id: string;
  players: PlayerEntity[];
  field: Field;
  status: "inProgress";
};

export type GameOverEntity = {
  id: string;
  players: PlayerEntity[];
  field: Field;
  status: "gameOver";
  isDraw?: boolean;
  winner?: PlayerEntity;
};

export type GameOverDrawEntity = {
  id: string;
  players: PlayerEntity[];
  field: Field;
  status: "gameOverDraw";
  isDraw?: boolean;
};

export type Field = (GameSymbol | null)[];
export type GameSymbol = string;
