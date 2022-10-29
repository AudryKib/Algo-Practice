/**
 * @param {string} s
 * @return {string}
 */

const isPalindrome = (str)=> {
  return str == str.split('').reverse().join('');
}

 
var longestPalindrome = function(s) {
   
  let K = new Array(s.length) 
   let i
   let n = s.length 
   let max = 0

   // Initialize all values to 1 

   for(i=0; i < n ; i++ )
     K[i] = 1

   for(i=0; i<n+1 ; i++){
      for(j= 0; j < n+1 ; j++ ){
        if(isPalindrome(s.substring(i,j)) ){
           K[i] = s.substring(i,j).length;
           if(K[i] < s.substring(i,j+1))
           K[i] = s.substring(i,j+1)
        }
      }
      if(max < K[i])
      max = K[i]
   }
   
};


0
longestPalindrome("")