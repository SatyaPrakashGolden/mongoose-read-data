const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0/test")
.then(()=>console.log("connected"))
.catch((err)=>console.log(err));
const studentsSchema=  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mno:{
        type:Number,
        required:true
    },
    fees:{
        type:Boolean,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
})
const Student=new mongoose.model("student",studentsSchema)

const Golden = async()=>{
    try{
        const createStudent1=new Student({
            name:"Akash Singh",
            mno:9219239807,
            fees:true
        });
        const createStudent2=new Student({
            name:"Rajat Singh",
            mno:903846307,
            fees:false
        });
        const createStudent3=new Student({
            name:"Aditya Singh",
            mno:9819239807,
            fees:true
        });
        const studentData=await Student.insertMany([createStudent1,createStudent2,createStudent3]);
        console.log(studentData);
    }catch(error){
        console.log(error.message);
    }
}
// Golden();

const readDocument = async ()=>{
    try{
      const result=await Student.find();
      console.log(result);
    }catch(error){
        console.log(error.message)
    }
}
readDocument();
