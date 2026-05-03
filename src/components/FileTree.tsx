import { Tree } from 'react-arborist';
import { FileText, Folder } from 'lucide-react';

const data = [
  { id: '1', name: 'src', children: [{ id: '2', name: 'App.tsx' }, { id: '3', name: 'index.css' }] },
  { id: '4', name: 'package.json' },
];

export function FileTree() {
  return (
    <div className="w-64 border-r border-gray-800 bg-gray-950 p-2">
      <Tree
        initialData={data}
        width={250}
        indent={20}
        rowHeight={30}
      >
        {({ node, style, dragHandle }) => (
          <div style={style} ref={dragHandle} className="flex items-center gap-2 cursor-pointer hover:bg-gray-800 rounded px-2">
            {node.isInternal ? <Folder size={16} /> : <FileText size={16} />}
            <span>{node.data.name}</span>
          </div>
        )}
      </Tree>
    </div>
  );
}
