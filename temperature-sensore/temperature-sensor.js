module.exports = function (RED) {
    function Temprature(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function (msg) {
            const randomValue = Math.random();

            const temperature = randomValue * 100 - 50;
            msg.temperature = Number(temperature.toFixed(1))
            node.send(msg);
        });
    }
    RED.nodes.registerType("temperature sensor", Temprature);
}