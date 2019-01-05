'use strict'
let req = require('express');
let express = req();

let port = process.env.PORT || 6050;

    express.listen(port);
    console.log('Server started successfully.. !!! Times- PORT - ' + port + '\n\n\n');

let kafka = require('kafka-node'),
HighLevelConsumer = kafka.HighLevelConsumer,
client = new kafka.Client(),
consumer = new HighLevelConsumer(
    client,
    [
        { topic: 'topic1' },
        {topic : 'topic2'}
    ]
);
consumer.on('message', function (message) {
    console.log("MESSAGE : ",message.value);
});


    
