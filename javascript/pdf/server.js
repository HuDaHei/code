const express = require('express')
const http = require('https')
const fs = require('fs')
const fetchs = require('node-fetch')
const app = express()
const port = 3000

app.get('/getPdf', (req, res) => {
    // app.get('', ())
    const url = 'https://kcapifiletest.oss-cn-hangzhou.aliyuncs.com/0f5b57231cfdf6d9d156046eb81b6105.pdf'
    fetchs(url,   {
        method: 'GET',
}).then(res => res.buffer()).then(data=>{
    res.set('Access-Control-Allow-Origin', '*')
    res.status(200).send(data).end()
})
    // const gf = http.request(url, x => {
    //     console.log(x, 'xxx')
    //     x.on('data', d => {
    //         // process.stdout.write(d);
    //         // const uint8array = new Uint8Array(d)
    //         // console.log(uint8array)
    //         res.status(200).send(d).end()
    //         // res.status(200)
    //         // res.send(d)
    //         // res.end()
    //         // fs.readFile(uint8array,'utf8',(err,data) => {
    //         //     console.log(data, 'd')
    //         //     console.log(err, 'err')
    //         // })
    //       })
    // })
    // gf.end()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))