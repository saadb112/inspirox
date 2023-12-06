const mongoose = require("mongoose")

const chatschema = mongoose.Schema({
    chatName : String,
    isGroupChat : {type : Boolean, default: false},
    users : [
        {type : mongoose.Schema.Types.ObjectId,
        ref : "user"}
    ],
    latestMessage: {type : mongoose.Schema.Types.ObjectId,
        ref : "Message"},
    groupAdmin : {type : mongoose.Schema.Types.ObjectId,
        ref : "user"},

}, {
    timestamps : true
})


const Chat = mongoose.model("Chat", chatschema)
module.exports = Chat