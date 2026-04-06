import ReactFlow, { Background, BackgroundVariant, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import { Toolbar } from './components/panels/Toolbar';
import useStore from './store/useStore';
import { appNodeTypes } from './components/nodes';
import { EditNodeDialog } from './components/dialogs/EditNodeDialog';

export default function App() {
  const editingNodeId = useStore((s) => s.editingNodeId);
  const setEditingNodeId = useStore((s) => s.setEditingNodeId);

  const onNodesChange = useStore((state) => state.onNodesChange);
  const onEdgesChange = useStore((state) => state.onEdgesChange);
  const onConnect = useStore((state) => state.onConnect);

  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  return (
    <div className="flex w-screen h-screen bg-tg-bg overflow-hidden font-sans">
      <Toolbar />

      <div className="flex-1 relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={appNodeTypes}
          fitView
        >
          <Background color="#b1c3d5" gap={24} variant={BackgroundVariant.Dots} />
          <Controls className="fill-tg-blue" />
          <MiniMap nodeStrokeWidth={3} />
        </ReactFlow>
      </div>

      {editingNodeId && (
        <EditNodeDialog nodeId={editingNodeId} onClose={() => setEditingNodeId(null)} />
      )}
    </div>
  );
}
