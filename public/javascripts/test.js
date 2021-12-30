const { freemem } = require("os");
const {
    snapshot
} = require("process-list");
async function name() {
    let temp = 0;
    const ram_tasks = await snapshot('pid', 'name', 'pmem');
    const rma_templist = [];
    const ram_tasks_result = [];
    let count = 0;
    for (let index = 0; index < Object.keys(ram_tasks).length; index++) {
        if (ram_tasks[index].name != "") {
            if (ram_tasks[index].pmem != 0) {
                rma_templist[count] = ram_tasks[index];
                count++;
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
        ram_tasks_result[index] = rma_templist[index];
    }
    
    console.log(ram_tasks_result);
}
name()