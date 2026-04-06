import { X, Image as ImageIcon, Type, Shapes, Link } from 'lucide-react';
import useStore from '../../store/useStore';
import { useShallow } from 'zustand/react/shallow';

// Пресеты цветов для фигур
const SHAPE_COLORS = ['#31b545', '#3390ec', '#f06292', '#fb8c00', '#7467f0', '#94a3b8'];

export function EditNodeDialog({
  nodeId,
  onClose,
}: {
  nodeId: string | null;
  onClose: () => void;
}) {
  const node = useStore(useShallow((s) => s.nodes.find((n) => n.id === nodeId)));
  const updateNodeData = useStore((s) => s.updateNodeData);

  if (!node || !nodeId) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="px-6 py-5 border-b border-slate-50 flex justify-between items-center bg-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-tg-blue/10 rounded-xl text-tg-blue">
              {node.type === 'text' && <Type size={20} />}
              {node.type === 'image' && <ImageIcon size={20} />}
              {node.type === 'shape' && <Shapes size={20} />}
            </div>
            <div>
              <h3 className="font-bold text-tg-text text-lg leading-none">Settings</h3>
              <p className="text-[11px] text-tg-hint font-medium uppercase mt-1 tracking-wider">
                ID: {nodeId.slice(0, 8)}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 cursor-pointer hover:bg-slate-50 rounded-full text-tg-hint transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh]">
          <section className="space-y-2">
            <label className="text-[12px] font-bold text-tg-hint uppercase ml-1">Block Label</label>
            <input
              className="w-full bg-slate-50 border-2 border-transparent focus:border-tg-blue focus:bg-white rounded-2xl px-4 py-3 outline-none transition-all text-tg-text font-medium"
              placeholder="Enter title..."
              value={node.data.title || ''}
              onChange={(e) => updateNodeData(nodeId, { title: e.target.value })}
            />
          </section>

          {node.type === 'text' && (
            <section className="space-y-2">
              <label className="text-[12px] font-bold text-tg-hint uppercase ml-1">
                Message Content
              </label>
              <textarea
                className="w-full bg-slate-50 border-2 border-transparent focus:border-tg-blue focus:bg-white rounded-2xl px-4 py-3 outline-none transition-all text-sm min-h-[120px] resize-none"
                placeholder="Type your message here..."
                value={node.data.text || ''}
                onChange={(e) => updateNodeData(nodeId, { text: e.target.value })}
              />
            </section>
          )}

          {node.type === 'image' && (
            <section className="space-y-4">
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-tg-hint uppercase ml-1 flex items-center gap-2">
                  <Link size={14} /> Image URL
                </label>
                <input
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-tg-blue focus:bg-white rounded-2xl px-4 py-3 outline-none transition-all text-sm"
                  placeholder="https://example.com/image.png"
                  value={node.data.url || ''}
                  onChange={(e) => updateNodeData(nodeId, { url: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-tg-hint uppercase ml-1">
                  Alt Description
                </label>
                <input
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-tg-blue focus:bg-white rounded-2xl px-4 py-3 outline-none transition-all text-sm"
                  placeholder="What is on the image?"
                  value={node.data.alt || ''}
                  onChange={(e) => updateNodeData(nodeId, { alt: e.target.value })}
                />
              </div>
            </section>
          )}

          {node.type === 'shape' && (
            <section className="space-y-5">
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-tg-hint uppercase ml-1">
                  Geometry
                </label>
                <div className="flex gap-2">
                  {['circle', 'square'].map((shape) => (
                    <button
                      key={shape}
                      onClick={() => updateNodeData(nodeId, { shape })}
                      className={`flex-1 py-2 rounded-xl border-2 transition-all capitalize font-medium
                        ${
                          node.data.shape === shape
                            ? 'border-tg-blue bg-tg-blue/5 text-tg-blue'
                            : 'border-slate-100 text-tg-hint hover:border-slate-200'
                        }`}
                    >
                      {shape}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-bold text-tg-hint uppercase ml-1">
                  Accent Color
                </label>
                <div className="flex flex-wrap gap-3 p-1">
                  {SHAPE_COLORS.map((c) => (
                    <button
                      key={c}
                      onClick={() => updateNodeData(nodeId, { color: c })}
                      className={`w-8 h-8 rounded-full transition-transform hover:scale-110 active:scale-95 shadow-sm
                        ${node.data.color === c ? 'ring-4 ring-offset-2 ring-slate-200' : ''}`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                  <input
                    type="color"
                    className="w-8 h-8 rounded-full overflow-hidden border-none p-0 bg-transparent cursor-pointer"
                    value={node.data.color || '#94a3b8'}
                    onChange={(e) => updateNodeData(nodeId, { color: e.target.value })}
                  />
                </div>
              </div>
            </section>
          )}
        </div>

        <div className="p-6 bg-slate-50 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-tg-blue cursor-pointer text-white font-bold py-3 rounded-2xl shadow-lg shadow-tg-blue/20 hover:bg-tg-blue-hover transition-all active:scale-95"
          >
            Apply changes
          </button>
        </div>
      </div>
    </div>
  );
}
