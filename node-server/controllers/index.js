const fs = require('fs');
const { getCurrentDateTime } = require('../utils');




const saveTemperatureData = (payload) => {
    const temperature = payload.temperature;
    const date = getCurrentDateTime();

    const tempData = {
        temperature: temperature,
        date: date
    };

    const filePath = './file.txt';
    const jsonData = JSON.stringify(tempData);
    console.log(temperature);
    fs.appendFile(filePath, jsonData + '\n', (err) => {
        if (err) {
            console.error('Ошибка записи в файл:', err);
        } else {
            console.log('Данные успешно добавлены в файл:', filePath);
        }
    });
};

module.exports = {
    saveTemperatureData,
};