export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100">
      <header className="h-12 border-b border-gray-800 flex items-center px-4 bg-gray-950">
        <h1 className="font-bold text-lg">Vibe Code</h1>
      </header>
      <div className="flex flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
