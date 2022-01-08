import { Routes, Route } from "react-router-dom";
import Theme from "./utils/providers/theme";
import '../src/styles/app.scss';
import { EpisodeOne } from "./pages/episodeOne";
import { Finished } from "./pages/finished";
import { NotFound } from "./pages/notFound";

function App() {
  const Pages = () => {
    return <Routes>
      <Route exact path="/" element={<EpisodeOne />} />
      <Route exact path="/finished" element={<Finished />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  }

  return (
    <Theme>
      <Pages />
    </Theme>
  );
}

export default App;
