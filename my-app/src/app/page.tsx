"use client";
import { useState } from "react";

const LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SPECIALS = "!@#$%^&*()_+-=[]{}|;:',.<>/?";

export default function PasswordGenerator() {
  const [useLetters, setUseLetters] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSpecials, setUseSpecials] = useState(false);
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  function generatePassword() {
    let chars = "";
    if (useLetters) chars += LETTERS;
    if (useNumbers) chars += NUMBERS;
    if (useSpecials) chars += SPECIALS;
    if (!chars) return setPassword("");
    let pwd = "";
    for (let i = 0; i < length; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pwd);
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-8 bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2 text-black dark:text-zinc-50">Password Generator</h1>
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={useLetters} onChange={() => setUseLetters(v => !v)} />
            Letters
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={useNumbers} onChange={() => setUseNumbers(v => !v)} />
            Numbers
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={useSpecials} onChange={() => setUseSpecials(v => !v)} />
            Special Characters
          </label>
          <label className="flex items-center gap-2">
            Length:
            <input
              type="number"
              min={6}
              max={18}
              value={length}
              onChange={e => setLength(Math.max(6, Math.min(18, Number(e.target.value))))}
              className="w-16 px-2 py-1 border rounded"
            />
          </label>
          <button
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            onClick={generatePassword}
            disabled={!useLetters && !useNumbers && !useSpecials}
          >
            Generate Password
          </button>
        </div>
        <div className="mt-4 w-full max-w-xs">
          <input
            type="text"
            readOnly
            value={password}
            className="w-full px-3 py-2 border rounded text-lg text-center bg-zinc-100 dark:bg-zinc-800 text-black dark:text-zinc-50"
            placeholder="Your password will appear here"
          />
        </div>
      </main>
    </div>
  );
}
