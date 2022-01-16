const os = require("os");
console.log(os.arch());
const osmem =  os.freemem()
console.log(`${osmem/1024/1024/1024}`);
const memtotal =  os.totalmem()
console.log(`${memtotal/1024/1024/1024}`);

console.log(os.hostname());
console.log(os.platform())
console.log(os.tmpdir());
console.log(os.type());
console.log(os.release());