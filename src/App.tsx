/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Layout } from './components/Layout';
import { FileTree } from './components/FileTree';
import { CodeEditor } from './components/Editor';
import { TerminalComponent } from './components/Terminal';
import { ChatInterface } from './components/Chat';
import { useState } from 'react';

export default function App() {
  const [code, setCode] = useState('console.log("Hello, Vibe Code!");');

  const handleSendPrompt = (prompt: string) => {
    console.log('User sent prompt:', prompt);
    // Future integration with backend/AI logic
  };

  return (
    <Layout>
      <FileTree />
      <div className="flex-1 flex flex-col">
        <CodeEditor code={code} onChange={setCode} />
        <TerminalComponent />
        <ChatInterface onSend={handleSendPrompt} />
      </div>
    </Layout>
  );
}

