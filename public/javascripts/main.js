const osu = require('node-os-utils');
const fs = require('fs');
const path = require('path');
const {
    snapshot
} = require("process-list");
const cpuStat = require('cpu-stat');

//선언
const cpu = osu.cpu;
const mem = osu.mem;;
const netstat = osu.netstat
const totalCores = cpuStat.totalCores();

//3초마다  정보를 수정함netstat
setInterval(async function () {
    const clock = [];
    const templist = [];
    const process = [];
    let temp = 0,temp1 = 0, count = 0;
    const rma_templist = [];
    const ram_tasks_result = [];

    const acpu = await cpu.usage();
    const aram = await mem.info();
    const nettotal = await netstat.inOut();
    const tasks = await snapshot('pid', 'name', 'cpu');
    const ram_tasks = await snapshot('pid', 'name', 'pmem');
    const netstatus = await netstat.stats();

    for (let index = 0; index < totalCores; index++) {
        const avgClockMHz = cpuStat.avgClockMHz(index);
        clock.push({
            "core": index,
            "clock": avgClockMHz
        });
    }

    for (let index = 0; index < Object.keys(tasks).length; index++) {
        if (tasks[index].name != "") {
            if (tasks[index].cpu != 0) {
                templist[count] = tasks[index];
                count++;
            }
        }
        if (ram_tasks[index].name != "") {
            if (ram_tasks[index].pmem != 0) {
                rma_templist[count] = ram_tasks[index];
            }
        }
    }


    for (let i = 0; i < Object.keys(templist).length; i++) {
        for (let j = 0; j < Object.keys(templist).length - 1; j++) {
            if (templist[j].cpu < templist[j + 1].cpu) {
                temp = templist[j];
                templist[j] = templist[j + 1];
                templist[j + 1] = temp;
            }
        }
    }

    for (let i = 0; i < Object.keys(rma_templist).length; i++) {
        for (let j = 0; j < Object.keys(rma_templist).length - 1; j++) {
            if (rma_templist[j].pmem < rma_templist[j + 1].pmem) {
                temp = rma_templist[j];
                rma_templist[j] = rma_templist[j + 1];
                rma_templist[j + 1] = temp;
            }
        }
    }

    for (let index = 0; index < 5; index++) {
        process[index] = templist[index];
        ram_tasks_result[index] = rma_templist[index];
    }


    let json = {
        "cpu": {
            "model": cpu.model(),
            "usage": acpu,
            "clock": clock,
            "proccess": process
        },
        "ram": aram,
        "ram_porcess": ram_tasks_result,
        "nettotal": nettotal.total,
        "netstatus": netstatus
    }
    
    const pathfile = path.dirname(__filename).replace("javascripts", "");
    fs.writeFileSync(path.normalize(`${pathfile}/json/data.json`), JSON.stringify(json), 'utf8');
}, 2000);