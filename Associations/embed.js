var mongoose   = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", {useNewUrlParser:true});

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
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

//var newUser = new User({
//    email: "vandaica1102@gmail.com",
//    name: "Bach Hien Van"
//});
//newUser.posts.push({
//    title: "adadadadada", content:"adadadad"
//});

//newUser.save(function(err, user){
//    if(err){
//        console.log("ERROR!");
//    } else {
//        console.log(user);
//    }
//});
User.findOne({name:"Hac Hien Van"}, function(err, user){
    if(err) {
        console.log("error");
    } else {
        user.posts.push({
            title: "3 things I really love",
            content: "eat, sleep, and money"
        });
        user.save(function(err,user){
            if(err){console.log("ERROR")}
            else {console.log(user)};
        })
    }
})

