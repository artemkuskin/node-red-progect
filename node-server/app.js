const { saveTemperatureData } = require('./controllers');
const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);

const port = 1883;

server.listen(port, function () {
    console.log('Aedes MQTT Broker is listening on port', port);
});

aedes.on('client', (client) => {
    console.log('Client connected:', client.id);
});



aedes.on('publish', (packet, client) => {
    if (client) {
        saveTemperatureData(JSON.parse(packet.payload));
    }
});
