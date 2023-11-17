import { ChatBox } from '@src/components/chat-box';
import { ThemeSwitcher } from '@src/components/theme-switcher';

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ThemeSwitcher />
      <ChatBox/>
    </main>
  );
}
