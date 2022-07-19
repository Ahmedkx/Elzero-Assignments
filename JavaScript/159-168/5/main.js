let t1 = performance.now()

let i = 0;

while( i < 100000){
    console.log(i)
    i++
}

let t2 = performance.now()

console.log(t2 - t1 + " ms")