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
    await tweetRepo.create({content:'With hooks'})

    // const tweet = await tweetRepo.getAll(2,4);
     
    // console.log(tweet[1].contentWithEmail);
})