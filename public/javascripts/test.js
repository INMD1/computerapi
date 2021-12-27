import psList from 'ps-list';

async function name() {
    console.log(await psList());
}
name()