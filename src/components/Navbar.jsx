import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <div className="text-lg">Flash Card App</div>
      <div className="space-x-4">
        <Link to="/">
          <Button variant="outline" className="text-white">Home</Button>
        </Link>
        <Link to="/create-deck">
          <Button variant="outline" className="text-white">Create Deck</Button>
        </Link>
        <Link to="/view-decks">
          <Button variant="outline" className="text-white">View Decks</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;