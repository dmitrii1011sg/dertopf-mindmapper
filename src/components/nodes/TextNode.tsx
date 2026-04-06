import { type NodeProps } from 'reactflow';
import { BaseNode } from './BaseNode';
import { type TextNodeData } from '../../types/nodes';
import { memo } from 'react';

export const TextNode = memo(({ id, data, selected }: NodeProps<TextNodeData>) => {
  return (
    <BaseNode id={id} title="Text Block" selected={selected}>
      <p className="text-sm text-slate-700 whitespace-pre-wrap">{data.text}</p>
    </BaseNode>
  );
});
