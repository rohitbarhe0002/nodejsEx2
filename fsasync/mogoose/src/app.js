//connect to database
const mongoose = require("mongoose");
const  validator = require("validator");
mongoose.connect("mongodb://localhost:27017/testchanel",{useNewUrlParser: true})
.then( ()=>console.log("coonnecttion succsess")).catch((err)=>console.log(err));
////end**-----------------------------------------------------------------------
//schema 
const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        // required:true,
        // unique:true,
        // uppercase:true,
        // trim:true,
        // minlength:3,
        // maxlength:30,
        // match:[/@/,'this is not validate']
    },

    ctype:{
      type:  String,
    //   required:true,
    //   lowercase:true,
    //   enum:["frontend","backend","database"]
    },
    videos:{
        type:Number,
        required:true,
        // validate(value){
        //     if(value<0){
        //         throw new Error("videos count never negative")
        //     }
        // // }
        validator:function(value){
            return value.length < 0;
        },
        message: 'is not valid'
    },
    author:String,
    email:{
      type:  String,
      required:true,
      validate(value){
          if(!validator.isEmail(value)){
              throw new Error("Email is not valid")
          }
      }

    },
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

      name:"reactjs                    ",
    ctype:"front-end",
    videos:-90,
    author:"thapa bhai",
    email:"ro.@gm",
    active:true,
    date:2022-1-2,
  
})
const mongodbPlaylist =  new Playlist({

      name:"mongodb",
    ctype:"backend",
    videos:18,
    author:"thapa bhai",
      email:"ro.@gm",
    active:true,
    date:2022-1-2,
  
})
const monogoosePlaylist =  new Playlist({

      name:"mongOose",
    ctype:"database",
    videos:89,
    author:"thapa bhai",
      email:"ro.@gm",
    active:true,
    date:2022-1-2,
  
})
const expressPlaylist =  new Playlist({

      name:"Expressjs",
    ctype:"Back-end",
    videos:81,
    author:"thapa bhai",
      email:"ro.@gm",
    active:true,
    date:2022-1-2,
  
})
const nodejsPlaylist =  new Playlist({

      name:"nodejs",
    ctype:"back-end",
    videos:87,
    author:"thapa bhai",
      email:"ro.@gm",
    active:true,
    date:2022-1-2,
  
})
const jsPlaylist =  new Playlist({

      name:"javascript",
    ctype:"back-end",
    videos:28,
    author:"thapa bhai",
      email:"ro.@gm",
    active:true,
    date:2022-1-2,
  
})
const NextjsPlaylist =  new Playlist({

      name:"Nextjs",
    ctype:"front-end",
    videos:86,
    author:"thapa bhai",
      email:"ro.@gm",
    active:true,
    date:2022-1-2,
  
})




const result = await Playlist.insertMany([reactPlaylist, mongodbPlaylist,monogoosePlaylist,expressPlaylist,nodejsPlaylist,jsPlaylist,NextjsPlaylist]);
console.log(result);

    }catch(err){
        console.log(err);
    }
}

createDocument();

// const getDocument = async () => {
//     const result = await Playlist.find({ctype:'front-end'}).select({name:1}).sort({name:1});

//     console.log(result);
// }


///delete document

// const deleteDocuments = async (name) => {
//     try{

//           const result = await  Playlist.deleteOne({name})
//           console.log(result);
        
//           }catch(err){
//         console.log(err);
//     }
  
// }

//  deleteDocuments('javascript')

//updateDocument

// const updateDocuments = async (name) => {
//     try{

//           const result = await  Playlist.findByIdAndUpdate({name},{
        
//         $set: {
//             name:"ReactJs",
//             active:false
//         }
//     })
//     console.log(result);
//     }catch(err){
//         console.log(err);
//     }
  
// }

// updateDocuments('Reactjs')

//getDocument();