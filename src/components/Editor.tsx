import Editor from '@monaco-editor/react';

export function CodeEditor({ code, onChange }: { code: string; onChange: (value: string | undefined) => void }) {
  return (
    <Editor
      height="100%"
      defaultLanguage="typescript"
      theme="vs-dark"
      value={code}
      onChange={onChange}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        fontFamily: 'JetBrains Mono, monospace',
      }}
    />
  );
}
