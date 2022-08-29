import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from 'layouts/PageLayout';
import Home from 'pages/Home';
import Entities from 'pages/Entities';
import NotFound from 'pages/NotFound';
import CharacterPage from 'pages/CharacterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/characters" element={<PageLayout />}>
          <Route index element={<Entities name="characters" />} />
          <Route
            path="/characters/:id"
            element={<CharacterPage name="characters" />}
          />
        </Route>
        <Route path="/films" element={<PageLayout />}>
          <Route index element={<Entities name="films" />} />
          <Route path="/films/:id" element={<CharacterPage name="films" />} />
        </Route>
        <Route path="/planets" element={<PageLayout />}>
          <Route index element={<Entities name="planets" />} />
          <Route
            path="/planets/:id"
            element={<CharacterPage name="planets" />}
          />
        </Route>
        <Route path="/starships" element={<PageLayout />}>
          <Route index element={<Entities name="starships" />} />
          <Route
            path="/starships/:id"
            element={<CharacterPage name="starships" />}
          />
        </Route>
        <Route path="/vehicles" element={<PageLayout />}>
          <Route index element={<Entities name="vehicles" />} />
          <Route
            path="/vehicles/:id"
            element={<CharacterPage name="vehicles" />}
          />
        </Route>
        <Route path="/species" element={<PageLayout />}>
          <Route index element={<Entities name="species" />} />
          <Route
            path="/species/:id"
            element={<CharacterPage name="species" />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
