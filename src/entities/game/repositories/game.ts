import { prisma } from "@/shared/lib/db";
import { GameEntity, GameIdleEntity, GameOverEntity } from "../domain";
import { Game, User } from "@prisma/client";
import {z} from 'zod'

async function gamesList(): Promise<GameEntity[]> {
  const games = await prisma.game.findMany({
    include: {
      winner: true,
      players: true,
    },
  });

  return games.map(dbGameToGameEntity);
}

const fieldSchema = z.array(z.union([z.string(), z.null()]));

function dbGameToGameEntity (game: Game & {players: User[]; winner?: User | null;},): GameEntity {
  switch (game.status){
    case "idle": {
      return {
        id: game.id,
        players: game.players,
        status: game.status,
        field: fieldSchema.parse(game.field),
      } satisfies GameIdleEntity
    }
    case "inProgress":
    case "gameOverDraw": {
      return {
        id: game.id,
        players: game.players,
        status: game.status,
        field: fieldSchema.parse(game.field),
      };
    }

    case "gameOver": {
      if (!game.winner){
        throw new Error ("Winner must be in game!")
      }
      return {
        id: game.id,
        players: game.players,
        status: game.status,
        winner: game.winner,
        field: fieldSchema.parse(game.field),
      } satisfies GameOverEntity
    }
    default: {
      throw new Error(`Unknown game status: ${game.status}`);
    }
  }
}

export const gameRepository = {
  gamesList
}