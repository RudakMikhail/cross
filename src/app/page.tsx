import { prisma } from "@/shared/lib/db";
import { GamesList } from "@/features/games-list/server";


export default async function Home() {
  const games = await prisma.game.findMany();
  console.log(games);
  return (
    <>
      <GamesList/>
    </>
  );
}
