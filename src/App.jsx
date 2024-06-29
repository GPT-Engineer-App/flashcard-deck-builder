import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateDeck from "./pages/CreateDeck.jsx";
import ViewDecks from "./pages/ViewDecks.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/create-deck" element={<CreateDeck />} />
        <Route exact path="/view-decks" element={<ViewDecks />} />
      </Routes>
    </Router>
  );
}

export default App;