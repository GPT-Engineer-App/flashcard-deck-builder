import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl mb-4">Welcome to Flash Card App</h1>
        <p className="mb-8">Create, edit, and manage your flash card decks with ease.</p>
        <div className="space-x-4">
          <Link to="/create-deck">
            <Button variant="outline">Create Deck</Button>
          </Link>
          <Link to="/view-decks">
            <Button variant="outline">View Decks</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;