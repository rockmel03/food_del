
import { DisplayFood, ExploreMenu, Header } from "../components";
import DownloadApp from "../components/DownloadApp";

const Home = () => {
  return (
    <main>
      <Header />
      <ExploreMenu />
      <DisplayFood />
      <DownloadApp />
    </main>
  );
};

export default Home;
