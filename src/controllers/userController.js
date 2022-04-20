const api1 = async function (req, res) {
    res.send({ msg: "API1 is running" })
}

const api2 = async function (req, res) {
    res.send({ msg: "API2 is running" })
}

const api3 = async function (req, res) {
    res.send({ msg: "API3 is running" })
}

const api4 = async function (req, res) {
    res.send({ msg: "API4 is running" })
}

module.exports.api1 = api1; 
module.exports.api2 = api2;
module.exports.api3 = api3;
module.exports.api4 = api4;