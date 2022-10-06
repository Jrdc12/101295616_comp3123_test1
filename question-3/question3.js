const fs = require('fs');

const makeLogs = () => {
    const target = './logs';
    if (fs.existsSync(target)) {
        fs.readdirSync(target).forEach((file) => {
            fs.unlinkSync(`${target}/${file}`);
        });
        fs.rmdirSync(target);
    }
    fs.mkdirSync(target);
    process.chdir(target);
    for (let i = 0; i < 10; i++) {
        fs.writeFileSync(`log${i}.txt`, `This is log file ${i}`);
        console.log(`log${i}.txt`, `This is log file ${i}`)
    }
}

const deleteLogs = () => {
    const target = './logs';
    if (fs.existsSync(target)) {
        fs.readdirSync(target).forEach((file) => {
            for (let i = 0; i < 10; i++) {
                if (file === `log${i}.txt`) {
                    fs.unlinkSync(`${target}/${file}`);
                    console.log(`delete files ${file}`)
                }
            }
        });
        fs.rmdirSync(target);
    }
}


// if the files are not created, this creates them.
//makeLogs();
// if the files do exist this deletes them
//deleteLogs();
