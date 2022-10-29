function min(x, y, z)
{
    if (x <= y && x <= z)
        return x;
    if (y <= x && y <= z)
        return y;
    else
        return z;
}
  

function minCostPath(cost, m,n){

let i, j;
    // Create the DP table and initialize to 0    
let DP = new Array(m+1)
for( i=0; i< m+1; i++){
    DP[i] = new Array(n+1)
    for( j=0; j <n+1 ; j++){
        DP[i][j] = 0
    }
}

 DP[0][0] = cost[0][0]

// initialize first row 
for(i=0; i< m ; i++){
    DP[i][0] = DP[i-1][0] + cost[i][0]
}

for (j=0 ; j< n; j++){
    DP[0][j] = DP[0][j-1] + cost[0][j]
}

 // construct the DP[][] table



for(let i = 0; i<m; i++ ){
    for( let j=0; j< n; j++){

            DP[i][j] = cost[i][j] + min(DP[i-1][j], DP[i][j-1], DP[i-1][j-1])

   
    }
}

    return DP[m][n]
}