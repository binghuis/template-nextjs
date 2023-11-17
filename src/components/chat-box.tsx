'use client';

import { Card, Input, Kbd } from '@nextui-org/react';
import { useChat } from 'ai/react';

export function ChatBox() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  return (
    <div>
      <ul>
        {messages.map((m, index) => (
          <Card key={index} className="p-4">
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </Card>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="flex items-start space-x-4">
        <Input
          placeholder="hi"
          value={input}
          onChange={handleInputChange}
          endContent={<Kbd keys={['enter']}></Kbd>}
        />
      </form>
    </div>
  );
}
