const osu = require('node-os-utils');
const os = require('os');
const fs = require('fs')
const cpus = os.cpus()
const cpu = osu.cpu;
const mem = osu.mem;;
const netstat = osu.netstat

//3초마다  정보를 수정함
re = setInterval(async function () {
    const acpu = await cpu.usage() 
    const aram = await mem.info()
    const anetstats = await netstat.inOut()
    let json = {
        "cpu": {
            "model" : cpus[0].model,
            "usage" : acpu
        },
        "ram": aram,
        "netstats" : anetstats
    }
    fs.writeFileSync('/home/ubuntu/바탕화면/github/computerapi/public/json/test.json', JSON.stringify(json), 'utf8');
}, 3000);

