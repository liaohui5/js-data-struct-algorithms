import Graph from "../Graph";

describe('Graph', () => {
  it('addVertex', () => {
    const graph = new Graph<string>();
    expect(graph.vertexes.includes("a")).toBe(false);
    graph.addVertex("a");
    expect(graph.vertexes.includes("a")).toBe(true);
  });

  it('removeVertex', () => {
    const graph = new Graph<string>();
    graph.vertexes = ["a"];
    expect(graph.vertexes.includes("a")).toBe(true);

    graph.removeVertex('a');
    expect(graph.vertexes.includes("a")).toBe(false);
  });

  it('addEdge', () => {
    const graph = new Graph<string>();
    graph.vertexes = ['a', 'b', 'c'];
    graph.vertexes.forEach(item => {
      graph.edges.set(item, []);
    });

    expect(graph.edges.get('a')).toEqual([]);

    graph.addEdge('a', 'b');
    expect(graph.edges.get('a')).toEqual(['b']);

    graph.addEdge('a', 'c');
    expect(graph.edges.get('a')).toEqual(['b', 'c']);
  });

  it('removeEdge', () => {
    const graph = new Graph<string>();
    graph.vertexes = ['a', 'b', 'c'];
    graph.edges.set('a', ['b', 'c']);

    graph.removeEdge('a', 'b');
    expect(graph.edges.get('a')).toEqual(['c']);
  });

});
