import { useState } from "react";

export default function SearchBox({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 rounded text-black outline-none w-60"
        placeholder="Enter city name..."
      />
      <button className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
}
