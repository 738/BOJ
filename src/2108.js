n=require('fs').readFileSync('dev/stdin').toString().trim().split('\n').slice(1).map(v=>+v)
n.sort((a,b)=>a-b)
r=[]
c=Array(8010).fill(0);
n.forEach(v=>c[v+4000]++);
r.push(Math.round(n.reduce((t,v)=>t+v,0)/n.length))
r.push(n[n.length/2|0])
maxCount=Math.max(...c)
m=[]
c.forEach((v,i)=>v===maxCount&&m.push(i-4000))
r.push(m.length>1?m[1]:m[0])
r.push(n[n.length-1]-n[0])
console.log(r.join`\n`)
