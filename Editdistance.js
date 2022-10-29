function min(x, y, z)
{
    if (x <= y && x <= z)
        return x;
    if (y <= x && y <= z)
        return y;
    else
        return z;
}
 

function EditDistance(str1, str2, m, n){

    // base cases 

    if(m==0)
    return n


    if(n==0)
    return m
    
    // if last character of the two strings are the same 
    if(str1[m-1] == str2[n-1] )
    return EditDistance(str1, str2, m-1, n-1)

    //if last character are not the take 1+ the minimum cost operation 
    return 1 + min(EditDistance(str1, str2, m, n-1), EditDistance(str1, str2, m-1, n), EditDistance(str1, str2, m-1, n-1))

}

