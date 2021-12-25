const osu = require('node-os-utils');
const fs = require('fs');
const { snapshot } = require("process-list");
const cpuStat = require('cpu-stat');

//선언
const cpu = osu.cpu;
const mem = osu.mem;;
const netstat = osu.netstat
const totalCores = cpuStat.totalCores();

//3초마다  정보를 수정함
setInterval(async function () {
    const clock = [];
    const process = [];
    let temp = 0, count = 0;

    const acpu = await cpu.usage()
    const aram = await mem.info()
    const anetstats = await netstat.inOut();
    const tasks = await snapshot('pid', 'name', 'cpu');

    for (let index = 0; index < totalCores; index++) {
        const avgClockMHz = cpuStat.avgClockMHz(index);
        clock.push({ "core": index, "clock": avgClockMHz })
    }

    for (let index = 0; index < Object.keys(tasks).length; index++) {
        if (tasks[index].name != "") {
            if (tasks[index].cpu != 0) {
                process[count] = tasks[index];
                count++;
            }
        }
    }
    for (let i = 0; i < Object.keys(process).length; i++) {
        for (let j = 0; j < Object.keys(process).length - 1; j++) {
            if (process[j].cpu < process[j + 1].cpu) {
                temp = process[j];
                process[j] = process[j + 1];
                process[j + 1] = temp;
            }
        }
    }

    let json = {
        "cpu": {
            "model": cpu.model(),
            "usage": acpu,
            "clock": clock,
            "proccess": process
        },
        "ram": aram,
        "netstats": anetstats
    }

    fs.writeFileSync('/home/ubuntu/바탕화면/github/computerapi/public/json/data.json', JSON.stringify(json), 'utf8');
}, 3000);

