import { type NodeProps } from 'reactflow';
import { BaseNode } from './BaseNode';
import { type ImageNodeData } from '../../types/nodes';
import { memo } from 'react';

export const ImageNode = memo(({ id, data, selected }: NodeProps<ImageNodeData>) => {
  return (
    <BaseNode id={id} title="Image" selected={selected}>
      {data.url ? (
        <img
          src={data.url}
          alt={data.alt || 'node content'}
          className="w-full max-w-[200px] h-auto rounded-md object-cover"
        />
      ) : (
        <div className="w-[150px] h-[100px] bg-slate-100 flex items-center justify-center text-xs text-slate-400 rounded-md border border-dashed border-slate-300">
          No Image URL
        </div>
      )}
    </BaseNode>
  );
});
