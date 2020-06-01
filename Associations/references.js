var mongoose   = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2", {useNewUrlParser:true});

//User - email, name


//Post - title, content

var postSchema= new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

var userSchema= new mongoose.Schema({
    email: String,
    name: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
});

var User = mongoose.model("User", userSchema);

Post.create({
    title: "How to make money pt2",
    content: "Be a human"
}, function(err, post){
    User.findOne({email:"maylacuatroi@gmail.com"}, function(err, foundUser){
        if(err) {console.log("ERROR")}
        else {
            foundUser.posts.push(post);
            foundUser.save(function(err,data){
                if(err) {console.log(err);}
                else {console.log(data);
                    
                }
            });
        }
    });
})

//User.create({
//    email: "maylacuatroi@gmail.com",
//    name: "Hasha"
//});