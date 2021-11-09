const osu = require('node-os-utils');
const fs = require('fs')
const cpu = osu.cpu;
const mem = osu.mem;;
//3초마다  정보를 수정함
re = setInterval(async function () {
    const acpu = await cpu.usage() 
    const aram = await mem.info()
    let json = {
        "cpu": {
            "temp" : acpu
        },
        "ram": aram
    }
    fs.writeFileSync('/home/ubuntu/바탕화면/github/computerapi/public/json/test.json', JSON.stringify(json), 'utf8');
}, 3000);