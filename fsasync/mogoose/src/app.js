const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/testchanel",{useNewUrlParser: true})
.then( ()=>console.log("coonnecttion succsess")).catch((err)=>console.log(err));
//schema 
const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

const Playlist = new mongoose.model("Playlist",playlistSchema);

//create document
const createDocument = async () => {
    try{
const reactPlaylist =  new Playlist({

      name:"Angular",
    ctype:"front-end",
    videos:8,
    author:"thapa bhai",
    active:true,
    date:2022-1-2,
  
})
const mongodbPlaylist =  new Playlist({

      name:"Angular",
    ctype:"front-end",
    videos:8,
    author:"thapa bhai",
    active:true,
    date:2022-1-2,
  
})
const monogoosePlaylist =  new Playlist({

      name:"Angular",
    ctype:"front-end",
    videos:8,
    author:"thapa bhai",
    active:true,
    date:2022-1-2,
  
})
const expressPlaylist =  new Playlist({

      name:"Angular",
    ctype:"front-end",
    videos:8,
    author:"thapa bhai",
    active:true,
    date:2022-1-2,
  
})
const nodejsPlaylist =  new Playlist({

      name:"Angular",
    ctype:"front-end",
    videos:8,
    author:"thapa bhai",
    active:true,
    date:2022-1-2,
  
})
const jsPlaylist =  new Playlist({

      name:"Angular",
    ctype:"front-end",
    videos:8,
    author:"thapa bhai",
    active:true,
    date:2022-1-2,
  
})
const NextjsPlaylist =  new Playlist({

      name:"Angular",
    ctype:"front-end",
    videos:8,
    author:"thapa bhai",
    active:true,
    date:2022-1-2,
  
})




const result = await Playlist.insertMany([reactPlaylist, mongodbPlaylist,monogoosePlaylist,expressPlaylist,nodejsPlaylist,jsPlaylist,NextjsPlaylist]);
console.log(result);

    }catch(err){
        console.log(err);
    }
}

//createDocument();

const getDocument = async () => {
    const result = await Playlist.find({name:'React native'}).select({name:1});
    console.log(result);
}




getDocument();