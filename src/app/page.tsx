import ScrollyCanvas from "@/components/ScrollyCanvas";
import NoahPortfolio from "@/components/NoahPortfolio";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground">
      <ScrollyCanvas numFrames={120} />
      <NoahPortfolio />
    </main>
  );
}
