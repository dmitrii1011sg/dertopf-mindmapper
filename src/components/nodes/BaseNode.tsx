import { Handle, Position } from 'reactflow';
import { memo, type ReactNode } from 'react';
import { Settings2, Trash2 } from 'lucide-react';
import useStore from '../../store/useStore';

interface BaseNodeProps {
  id: string;
  title: string;
  selected?: boolean;
  children: ReactNode;
}
export const BaseNode = memo(({ id, title, selected, children }: BaseNodeProps) => {
  const setEditingNodeId = useStore((s) => s.setEditingNodeId);
  const removeNode = useStore((s) => s.removeNode);

  const onDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Вы уверены, что хотите удалить этот блок?')) {
      removeNode(id);
    }
  };

  return (
    <div
      className={`min-w-[220px] bg-tg-white rounded-tg shadow-tg border-2 transition-all
      ${selected ? 'border-tg-blue' : 'border-transparent'}`}
    >
      <div className="px-4 py-3 relative group">
        <button
          onClick={onDelete}
          className=" text-red-400 hover:text-red-600 shadow-sm absolute -top-3 right-3 p-1.5 select-none cursor-pointer bg-white border border-slate-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Trash2 size={14} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setEditingNodeId(id);
          }}
          className="absolute -top-3 -right-3 p-1.5 select-none cursor-pointer bg-white border border-slate-200 rounded-full text-tg-hint hover:text-tg-blue shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Settings2 size={14} />
        </button>

        <h4 className="text-tg-blue text-[13px] font-medium mb-1.5">{title}</h4>
        <div className="text-[14px] text-tg-text">{children}</div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        className="!bg-slate-300 !border-tg-white !w-2.5 !h-2.5 !-top-1.5"
      />

      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-tg-blue !border-tg-white !w-2.5 !h-2.5 !-bottom-1.5"
      />
    </div>
  );
});
