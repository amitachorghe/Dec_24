// Time complexity of the below code is O(log n);

let n= 5;
for (let i = 1; i < n; i *= 2) {
    console.log("Geekster");
}


// Time Complexity of this is O(nlogn)

function fun()
{
    let i, j;
    let n=5;
    for (i = 1; i <= n; i++){
        for (j = 1; j <= Math.log(i); j++)
        {
            console.log("GeeksforGeeks");
        }
    }    
}
fun();
