const express = require("express");

const app = express();

const port = 3000;

                                                           
var Datastore = require('nedb'),
        userDb = new Datastore({ filename: './data/user.db', autoload: true });

//init//

app.use(express.static('public'));                         app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/imsges'));

app.set("views","./views"); 
                               
app.set("view engine", "ejs");  
app.use(express.urlencoded({extended:false}));
app.get("",(req,res) =>{                                   res.render("index",{text:"this ejs"});
});

//routes//

app.get("/index",(req,res) =>{
        res.render("index",{text:"this ejs"});             
});


app.get('/login', (req, res) => {
  res.render('login.ejs');
});

app.post('/login',async(req, res) => {

res.redirect("/index");
});

app.get('/register', (req, res) => {
  res.render('register.ejs');
});

app.post("/register",async(req, res) =>{

        try{        
      Const doc=[{
                   name:req.body.name,                                                const doc =[{name:req.body.name,
                  email:req.body.email,
               password:req.body.password }];


                users.push(doc);                           
                                                           res.redirect("/login");                                            }catch{                                           r
res.redirect("/login");                                            }catch{                                           res.redirect("/register");
       }catch{

es.redirect("/register");
        }
                                                                                                                      userDb.insert(users, function (err, newDoc)
 userDb.insert(users, function (err, newDoc){

        console.log(users);
                                                                                                                                      });

});                                                                                                                   app.listen(port , () => console.log("listening http://locah
});




app.listen(port , () => console.log("listening http://locah
ost:"+ port));
