function min(x, y, z)
{
    if (x <= y && x <= z)
        return x;
    if (y <= x && y <= z)
        return y;
    else
        return z;
}
 



function EditDistanceTabular(str1, str2, m, n){
    let dp = new Array(m+1)

    for( let i=0; i< m+1 ;i++){
        dp[i] = new Array(n+1);
        for(let i=0; i< n+1; i++ ){
            dp[i][j] = 0
        }
    }

   // Fill dp[][] in Bottom up manner 
   for(let i=0; i<=m; i++){
    for (let j=0; j <= m; j++ ){
        if(i==0)
        dp[i][j] = i

        else if(j==0)
        dp[i][j] == j


       else if(str1[i-1] == str2[j-1])
       dp[i][j] = dp[i-1][j-1]

       else 
        dp[i][j] = 1 + min (dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
    }
   }
    dp[m][n]
}