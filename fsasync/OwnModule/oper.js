const add = (a,b) => {
return a+b;
}

const sub = (a,b) => {
return a-b;
}
const name = 'rohit'
// module.exports = name;
// module.exports.name = name;
module.exports.add = add;
module.exports.sub = sub;
module.exports.name = name;
// module.exports = {add,sub,name}; Destructuring