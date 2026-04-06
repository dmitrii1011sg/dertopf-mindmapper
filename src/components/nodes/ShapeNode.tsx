import { type NodeProps, Handle, Position } from 'reactflow';
import { type ShapeNodeData } from '../../types/nodes';
import { memo } from 'react';

export const ShapeNode = memo(({ data, selected }: NodeProps<ShapeNodeData>) => {
  const isCircle = data.shape === 'circle';

  return (
    <div
      className={`relative flex items-center justify-center transition-all shadow-sm
        ${isCircle ? 'rounded-full' : 'rounded-xl'} 
        ${selected ? 'ring-4 ring-blue-400/50 scale-105' : ''}`}
      style={{
        width: 120,
        height: 120,
        backgroundColor: data.color || '#94a3b8',
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="!w-3 !h-3 !bg-white/80 border-none"
      />
      <span className="text-xs font-bold text-white uppercase tracking-wider drop-shadow-md">
        {data.shape}
      </span>
      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-3 !h-3 !bg-white/80 border-none"
      />
    </div>
  );
});
