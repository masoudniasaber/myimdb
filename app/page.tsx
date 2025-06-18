'use client';

import { useState } from 'react';

export default function Home() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/add?a=${a}&b=${b}`);
    const text = await res.text();
    setResult(text);
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🧮 Add Two Numbers</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="A"
          value={a}
          onChange={(e) => setA(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="B"
          value={b}
          onChange={(e) => setB(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
      {result && <p>{result}</p>}
    </main>
  );
}
