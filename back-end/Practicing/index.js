const env = process.env.NODE_ENV || 'development';

const config = require('./src/config/config')[env];
const app = require('express')();

require('./src/config/express')(app);
require('./src/config/routes')(app);

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));