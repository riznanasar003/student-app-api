const mongoose = require("mongoose")
const schema = mongoose.Schema(
    
        {

            "name":String,
            "admno":String,
            "college":String,
            "dob":String,
            "emailid":String
            

        }
    
)

let studentmodel = mongoose.Model("students",schema);
module.exports={studentmodel}