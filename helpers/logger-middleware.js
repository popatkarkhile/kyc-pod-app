// Logger middleware 
const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');
// const winston = require('winston');
// require('winston-daily-rotate-file');
// const path = require('path')

module.exports = createLogger({
    transports: [
        new transports.File({ filename: 'logs/logs.log', level: 'info',  /* maxsize: 500 */ }) // add format

        // new transports.DailyRotateFile({
        //     fileName: 'logs/logs.log',
        //     format: format.combine(
        //         format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
        //         format.align(),
        //         format.printf(info => `${info.level}: ${[info.timestamp]} : ${info.message}`)
        //     )
        // })
    ]
});

// const transport = new winston.transports.DailyRotateFile({
//     fileName: `./assets/logs.log`,
//     format: format.combine(
//         format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
//         format.align(),
//         format.printf(info => `${info.level}: ${[info.timestamp]} : ${info.message}`)
//     )
// });

// transport.on('rotate', function (oldFilename, newFilename) {
//     // do something fun
// });

// const logger = winston.createLogger({
//     transports: [
//         transport
//     ]
// });

// module.exports = logger;
// new transports.File({ filename: 'logs/logs.log', level: 'info', /* maxsize: 500 */ })