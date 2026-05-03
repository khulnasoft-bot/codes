import { useEffect, useRef } from 'react';
import { Terminal as XTerm } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

export function TerminalComponent() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermInstance = useRef<XTerm | null>(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    // Use a small timeout to let the UI settle before initializing the terminal
    const timer = setTimeout(() => {
      if (!terminalRef.current) return;
      
      const term = new XTerm({ theme: { background: '#09090b' } });
      const fitAddon = new FitAddon();
      term.loadAddon(fitAddon);
      term.open(terminalRef.current);
      fitAddon.fit();

      term.writeln('Welcome to Vibe Code terminal');
      term.write('$ ');
      xtermInstance.current = term;
    }, 150);

    return () => {
      clearTimeout(timer);
      if (xtermInstance.current) {
        xtermInstance.current.dispose();
      }
    };
  }, []);

  return <div ref={terminalRef} className="h-40 border-t border-gray-800 p-2 overflow-hidden" />;
}
