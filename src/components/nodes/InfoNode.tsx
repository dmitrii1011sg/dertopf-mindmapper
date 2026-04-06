import { Handle, Position, type NodeProps } from 'reactflow';
import { Info } from 'lucide-react';
import { memo } from 'react';

type InfoNodeData = {
  title: string;
  description: string;
};

export const InfoNode = memo(({ data }: NodeProps<InfoNodeData>) => {
  return (
    <div className="min-w-[180px] bg-white border-2 border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <Handle
        type="target"
        position={Position.Top}
        className="!w-3 !h-3 !bg-blue-400 !border-2 !border-white"
      />

      <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border-b border-slate-100">
        <Info size={14} className="text-blue-500" />
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
          Information
        </span>
      </div>

      <div className="p-3">
        <h4 className="text-sm font-semibold text-slate-800">{data.title}</h4>
        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{data.description}</p>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-3 !h-3 !bg-blue-500 !border-2 !border-white"
      />
    </div>
  );
});
