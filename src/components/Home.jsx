import HomeCarousel from "./HomeCarousel";
import ChiaraLashmaker from "./ChiaraLashmaker";
import ScopriServizi from "./ScopriTrattamenti";

export default function Home() {
  return (
    <div className="home-background">
      <ChiaraLashmaker />
      <HomeCarousel />
      <ScopriServizi />
    </div>
  );
}
