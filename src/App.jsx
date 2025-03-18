import { Header } from "./common/components/Header/Header"
import { CharacterPage } from "./pages/CharactersPage/CharacterPage/CharacterPage"
import { CharactersPage } from "./pages/CharactersPage/CharactersPage"
import { HomePage } from "./pages/HomePage/HomePage"
import { Route, Routes } from "react-router"
import { LocationsPage } from "./pages/LocationsPage/LocationsPage"
import { EpisodesPage } from "./pages/EpisodesPage/EpisodesPage"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
      </Routes>
    </>
  )
}

export default App