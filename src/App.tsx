import { useContext } from "react";
import { Layout } from "./components/layouts";
import { UIContext } from "./context";
import AllPostPage from "./pages/AllPostPage";
import { FavPostPage } from "./pages/FavPostPage";

const App = () => {
  const { pageActive } = useContext(UIContext);

  return (
    <Layout>
      {pageActive === "all" && <AllPostPage />}

      {pageActive === "favs" && <FavPostPage />}
    </Layout>
  );
};

export default App;
