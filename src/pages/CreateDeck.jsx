import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CreateDeck = () => {
  const [deckName, setDeckName] = useState("");
  const [cards, setCards] = useState([{ question: "", answer: "" }]);

  const handleAddCard = () => {
    setCards([...cards, { question: "", answer: "" }]);
  };

  const handleCardChange = (index, field, value) => {
    const newCards = [...cards];
    newCards[index][field] = value;
    setCards(newCards);
  };

  const handleSaveDeck = () => {
    // Save deck logic here
    console.log("Deck saved:", { deckName, cards });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Create a New Deck</h1>
      <div className="mb-4">
        <Input
          placeholder="Deck Name"
          value={deckName}
          onChange={(e) => setDeckName(e.target.value)}
        />
      </div>
      {cards.map((card, index) => (
        <div key={index} className="mb-4">
          <Textarea
            placeholder="Question"
            value={card.question}
            onChange={(e) => handleCardChange(index, "question", e.target.value)}
            className="mb-2"
          />
          <Textarea
            placeholder="Answer"
            value={card.answer}
            onChange={(e) => handleCardChange(index, "answer", e.target.value)}
          />
        </div>
      ))}
      <Button onClick={handleAddCard} className="mb-4">Add Card</Button>
      <Button onClick={handleSaveDeck}>Save Deck</Button>
    </div>
  );
};

export default CreateDeck;