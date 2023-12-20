'use client';
import axios from 'axios';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    axios.get('/api/dog?a=2');
  }, []);
  return (
    <main>
      {/* <ThemeSwitcher />
      <ChatBox /> */}
      @children
    </main>
  );
}
