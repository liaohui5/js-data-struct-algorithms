interface GraphInterface<T> {
  vertexes: Array<T>,
  edges: Map<T, Array<T>>;
  addVertex(vertex: T): void;
  removeVertex(vertex: T): void;
  addEdge(vertex: T, vertex: T): void;
  removeEdge(targetVertex: T, targetEdge: T): void;
  bfs(startVertex: T, handler: (vertex: T) => void | false): void;
  dfs(startVertex: T, handler: (vertex: T) => void | false): void;
  toString(): string;
}
