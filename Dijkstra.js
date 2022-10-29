let V = 9

function mindistance(dist, spSet) {
    let min = Number.MAX_VALUE;
    let min_index = -1
    for(let v= 0; v < V; v++){
        if(spSet[v]==false && dist[v] <= min)
        min = dist[v]
        min_index = v
    }
    return min_index 
}


function disjkstra(graph, src){

    let dist = new Array(V);
    let spSet = new Array(V);

// Initialize all distances as infinite and sptSet[] 
// to unvisited

for(let i=0; i < V ; i++){
    dist[i]= Number.MAX_VALUE;
    spSet[i] = false;
}

dist[src] = 0

// Find the shortest path 
for(let count=0; count < V-1; count++){

// Pick the minimum distance vertex u
let u = mindistance(dist, spSet)

spSet[u] = true 

// update dist value of the adjacent vertices of the picked vertex.

for(let v = 0; v < V; v++ ){
    if(!spSet[v] && graph[u][v] != 0 && dist[u] != Number.MAX_VALUE && dist[u]+ graph[u][v] < dist[v] ){
        dist[v] = dist[u] + graph[u][v]  
      }

}


}

}
