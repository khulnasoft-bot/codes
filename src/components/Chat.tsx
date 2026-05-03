import { useState } from 'react';
import { Send } from 'lucide-react';

export function ChatInterface({ onSend }: { onSend: (prompt: string) => void }) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    onSend(prompt);
    setPrompt('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800 bg-gray-950">
      <div className="flex gap-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="What would you like to build?"
          className="flex-1 bg-gray-900 border border-gray-700 rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded p-2">
          <Send size={16} />
        </button>
      </div>
    </form>
  );
}
