import { ImageIcon, Plus, Save, Square, Type, Zap } from 'lucide-react';
import useStore from '../../store/useStore';

export function Toolbar() {
  const addNode = useStore((s) => s.addNode);
  const nodesCount = useStore((s) => s.nodes.length);
  const edgesCount = useStore((s) => s.edges.length);

  const nodeTypes = [
    { type: 'text', label: 'Text', icon: <Type size={18} /> },
    { type: 'image', label: 'Image', icon: <ImageIcon size={18} /> },
    { type: 'shape', label: 'Shape', icon: <Square size={18} /> },
  ];

  return (
    <div className="w-72 h-full bg-tg-white border-r border-slate-200 flex flex-col z-10 shadow-sm shrink-0 font-sans">
      <div className="p-4 border-b border-slate-100 bg-tg-white">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-tg-blue rounded-full flex items-center justify-center text-white">
            <Zap size={18} fill="currentColor" />
          </div>
          <h2 className="text-[15px] font-bold text-tg-text">DT Mindmapper</h2>
        </div>
        {/* <div className="bg-[#f1f1f2] rounded-lg px-3 py-1.5 flex items-center gap-2 text-tg-hint">
          <span className="text-[13px]">Search tools...</span>
        </div> */}
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        <p className="px-3 py-2 text-[11px] select-none font-bold text-tg-hint uppercase tracking-wider">
          Add
        </p>

        {nodeTypes.map((item) => (
          <button
            key={item.type}
            onClick={() => addNode(item.type)}
            className="w-full cursor-pointer select-none flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 text-tg-text transition-colors group"
          >
            <div className="text-tg-blue group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <span className="text-[14px] font-medium">{item.label}</span>
            <Plus size={14} className="ml-auto text-slate-300 opacity-0 group-hover:opacity-100" />
          </button>
        ))}

        <div className="my-4 border-t border-slate-100" />

        <p className="px-3 py-2 text-[11px] select-none font-bold text-tg-hint uppercase tracking-wider">
          Actions
        </p>
        <button
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 opacity-60 grayscale"
          disabled
        >
          <Save size={18} />
          <div className="flex flex-col items-start text-left">
            <span className="text-[14px] font-medium leading-none">Export JSON</span>
            <span className="text-[10px] text-tg-blue font-bold uppercase mt-1">Soon</span>
          </div>
        </button>
        <button
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 opacity-60 grayscale"
          disabled
        >
          <Save size={18} />
          <div className="flex flex-col items-start text-left">
            <span className="text-[14px] font-medium leading-none">Export PNG</span>
            <span className="text-[10px] text-tg-blue font-bold uppercase mt-1">Soon</span>
          </div>
        </button>
      </div>

      <div className="p-4 select-none bg-slate-50 border-t border-slate-100">
        <div className="flex justify-between items-center text-[11px] text-slate-400 font-medium">
          <span>Nodes: {nodesCount}</span>
          <span>Edges: {edgesCount}</span>
        </div>
        <div className="mt-2 text-[10px] text-center  text-slate-300 italic">dertopf</div>
      </div>
    </div>
  );
}
