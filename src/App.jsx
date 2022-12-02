import { useState } from "react";
import Input from "./components/Input";

const emojis = ["😞", "😐", "😃"];

function App() {
  const [emoji, setEmoji] = useState(emojis[1]);

  const handleChange = (event) => {
    setEmoji(emojis[event.target.value]);
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Input handleChange={handleChange} />
      <p className="my-8 text-9xl">{emoji}</p>
    </main>
  );
}

export default App;
