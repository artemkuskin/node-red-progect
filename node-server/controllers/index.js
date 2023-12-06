const fs = require('fs');
const { getCurrentDateTime } = require('../utils');




const saveTemperatureData = (req, res) => {
    const { temperature } = req.body;
    const date = getCurrentDateTime();

    const tempData = {
        temperature: temperature,
        date: date
    };

    const filePath = './file.txt';
    const jsonData = JSON.stringify(tempData);
    console.log(req.body);
    fs.appendFile(filePath, jsonData + '\n', (err) => {
        if (err) {
            console.error('Ошибка записи в файл:', err);
            res.status(500).send('Ошибка записи в файл');
        } else {
            console.log('Данные успешно добавлены в файл:', filePath);
            res.status(200).send('Данные успешно добавлены в файл: ' + filePath);
        }
    });
};

module.exports = {
    saveTemperatureData,
};