const oneP = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log('oneP')
    resolve({"name":'鹅鹅鹅'})
  })
})
const twoP = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log('twoP')
    resolve({"name":'我是一只鹅'})
  })
})
const totalP = Promise.all([oneP,twoP])
totalP.then(res => {
  console.log(res,'res')
})