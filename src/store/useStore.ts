import { create } from 'zustand';
import {
  type Connection,
  type Edge,
  type EdgeChange,
  type Node,
  type NodeChange,
  addEdge,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';
import { nanoid } from 'nanoid';

export type RFState = {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  updateNodeData: (nodeId: string, newData: object) => void;
  removeNode: (nodeId: string) => void;
  addNode: (type?: string) => void;
  editingNodeId: string | null;
  setEditingNodeId: (id: string | null) => void;
};

const useStore = create<RFState>((set, get) => ({
  nodes: [
    {
      id: '1',
      type: 'text',
      position: { x: 250, y: 100 },
      data: { text: 'Empty' },
    },
    {
      id: '2',
      type: 'text',
      position: { x: 260, y: 160 },
      data: { text: 'Zustand Node' },
    },
  ],
  edges: [],

  editingNodeId: null,

  setEditingNodeId: (id) => set({ editingNodeId: id }),

  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },

  updateNodeData: (nodeId: string, newData: object) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          return { ...node, data: { ...node.data, ...newData } };
        }

        return node;
      }),
    });
  },

  addNode: (type?: string) => {
    const newNode = {
      id: nanoid(),
      type: type || 'text',
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: {
        text: type === 'text' ? 'Новый текст' : '',
        title: 'Новый узел',
      },
    };

    set({
      nodes: [...get().nodes, newNode],
    });
  },

  removeNode: (nodeId: string) => {
    set({
      nodes: get().nodes.filter((node) => node.id !== nodeId),
      edges: get().edges.filter((edge) => edge.source !== nodeId && edge.target !== nodeId),
    });
  },
}));

export default useStore;
