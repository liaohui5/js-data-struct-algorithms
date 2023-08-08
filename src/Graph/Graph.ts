/**
 * 无向图
 */
export default class Graph<T> implements GraphInterface<T> {
  // 顶点
  public vertexes: T[] = [];

  // 边
  public edges = new Map<T, T[]>();

  /**
   * 添加顶点
   * @param vertex
   */
  public addVertex(vertex: T): void {
    if (this.vertexes.includes(vertex)) {
      throw new Error(`[addVertex]vertex '${vertex}' is already exists in graph`);
    }
    this.vertexes.push(vertex);
    this.edges.set(vertex, []);
  }

  /**
   * 移除顶点
   * @param targetVertex
   */
  public removeVertex(targetVertex: T): void {
    if (!this.vertexes.includes(targetVertex)) {
      throw new Error(`[addVertex]vertex '${targetVertex}' not found in graph`);
    }

    // remove vertex in this.vertexes and this.edges
    this.vertexes = this.vertexes.filter(item => item !== targetVertex);
    this.edges.delete(targetVertex);

    // remove vertex in other edges
    for (const [key, edges] of this.edges) {
      this.edges.set(key, edges.filter(item => item !== targetVertex));
    }
  }


  /**
   * 添加边(无向图)
   * @param vertex1
   * @param vertex2
   */
  public addEdge(vertex1: T, vertex2: T) {
    if (!this.vertexes.includes(vertex1)) {
      throw new Error(`[addEdge]vertex '${vertex1}' not found in graph`);
    }
    if (!this.vertexes.includes(vertex2)) {
      throw new Error(`[addEdge]vertex '${vertex2}' not found in graph`);
    }
    this.edges.get(vertex1)!.push(vertex2);
    this.edges.get(vertex2)!.push(vertex1);
  }

  /**
   * 移除边
   * @param targetVertex
   * @param targetEdge 
   */
  public removeEdge(targetVertex: T, targetEdge: T): void {
    if (!this.vertexes.includes(targetVertex)) {
      throw new Error(`[addEdge]vertex '${targetVertex}' not found in graph`);
    }
    let edges = this.edges.get(targetVertex)!;
    if (edges.includes(targetEdge)) {
      edges = edges.filter(item => item !== targetEdge);
      this.edges.set(targetVertex, edges);
    }
  }


  /**
   * 广度遍历
   * @param startVertex - 开始边
   * @param handler - 处理函数
   */
  public bfs(startVertex: T, handler: (vertex: T) => false | void) {
    if (!this.vertexes.includes(startVertex)) {
      throw new Error(`[bfs]vertex '${startVertex}' not found in graph`);
    }
    const handleRecords: T[] = []; // 记录顶点是否处理过

    const queue = [startVertex];
    while (queue.length) {
      const currentVertex = queue.shift()!; // 队列先进先出

      // 处理当前节点: 如果返回 false 就停止遍历
      const isContinue = handler(currentVertex);
      handleRecords.push(currentVertex);
      if (isContinue === false) {
        break;
      }

      // 获取与当前顶点相连的其他顶点 & 将没有访问过的放入队列中
      const linkedVertexes = this.edges.get(currentVertex)!;
      for (let i = 0; i < linkedVertexes.length; i++) {
        const linkedItem = linkedVertexes[i];

        // 在待处理队列和已访问的记录中都没有的情况下才需要加入待处理队列
        if (!handleRecords.includes(linkedItem) && !queue.includes(linkedItem)) {
          queue.push(linkedItem);
        }
      }
    }
  }

  /**
   * 深度遍历
   * @param startVertex - 开始边
   * @param handler - 处理函数
   */
  public dfs(startVertex: T, handler: (vertex: T) => void) {
    if (!this.vertexes.includes(startVertex)) {
      throw new Error(`[dfs]vertex '${startVertex}' not found in graph`);
    }

    // 遍历顶点相邻的其他节点
    const accessRecords: T[] = [];
    const traverseSiblingVertex = (vertex: T) => {
      handler(vertex);
      accessRecords.push(vertex);
      const linkedVertexes = this.edges.get(vertex)!;
      for (let i = 0; i < linkedVertexes.length; i++) {
        const linkedItem = linkedVertexes[i];
        if (!accessRecords.includes(linkedItem)) {
          traverseSiblingVertex(linkedItem);
        }
      }
    }
    traverseSiblingVertex(startVertex);
  }

  /**
   * 字符串序列化(方便调试)
   * @returns {string}
   */
  public toString(): string {
    let str = "";
    for (let i = 0; i < this.vertexes.length; i++) {
      const vertex = this.vertexes[i];
      const edges = this.edges.get(vertex)!;
      str += `${vertex} -> `;
      for (let j = 0; j < edges.length; j++) {
        const edge = edges[j];
        str += `${edge} `;
      }
      str = str.trim();
      str += "\n";
    }
    return str;
  }
}
