function max(a, b){
    return (a > b) ? a : b
}

function knapsack(W, wt, val, n){
    
    let i, w;

    let K = new Array(n+1)


    for (i=0; i <= n; i++){
        for(w=0; w <= W; w++){
            if(i==0 || W== 0)
            K[i % 2, w] = 0
            else if(wt[i-1] <= W) 
            K[i % 2, ]
        }
    }
}