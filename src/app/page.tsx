
import {Button} from "@/shared/ui/button";
import {prisma} from "@/shared/lib/db";

export default async function Home() {
  const games = await prisma.game.findMany()
  console.log(games)
  return (
      <><Button size="lg">SSSSSS</Button></>
  );
}
