const express = require('express');
const connect = require('./config/database');
const app = express();

 const TweetRepository=require('./repository/tweet-repository')
 const Comment = require('./models/comment'); 

app.listen(3000,async ()=>{
    console.log("server started");
    await connect ();
    console.log('MongoDb connected');
   
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.get('6684f676fb3aeefbf7e8429e');
     
    console.log(tweet);
})