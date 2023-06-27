const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://MOR:q9cKvuMxfShTY52q@cluster0.zdrrcmz.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true,});

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.set('views', path.join(__dirname, 'views'));

const CollegeSchema ={
    college_name : String,
    GEN : Number,
    EWS : Number,
    SC : Number,
    ST : Number,
    OBC: Number
  };

  const college = mongoose.model("college",CollegeSchema);
  const c3 = new college({
    college_name: 'University of Hyderabad',
    GEN: 841,
    EWS: 859,
    SC: 2545,
    ST: 2748,
    OBC:1201
  })
  const c4 = new college({
    college_name: 'Harcourt Butler Technical University,Kanpur',
    GEN: 811,  
     EWS: 849,
     SC: 8598,
     ST: 8598,
      OBC:1001   
  })
  const c1 = new college({
    college_name: 'NIT,Warangal',
    GEN: 215,  
     EWS: 239,
     SC: 1987,
     ST: 4040,
      OBC:355   
  })
  const c2 = new college({
    college_name: 'NIT,Kurukshetra',
    GEN: 313,  
     EWS: 347,
     SC: 2372,
     ST: 6146,
      OBC:465   
  })
  const c5 = new college({
    college_name: 'NIT,Jamshedpur',
    GEN: 448,  
     EWS: 500,
     SC: 3042,
     ST: 6484,
      OBC:593   
  })
  const c6 = new college({
    college_name: 'NIT,Raipur',
    GEN: 548,  
     EWS: 583,
     SC: 3365,
     ST: 7093,
      OBC:647   
  })
  const c7 = new college({
    college_name: 'NIT,Surathkal',
    GEN: 92,  
     EWS: 116,
     SC: 1510,
     ST: 2504,
      OBC:216   
  })
  const list = [c1,c2,c3,c4,c5.c6,c7];
  // college.insertMany(list)
  // .then((result) => {
  //   // Handle the result of the operation
  //   console.log(result);
  // })
  // .catch((error) => {
  //   // Handle any errors that occurred
  //   console.error(error);
  // });




 app.use(express.urlencoded({ extended: true }));

app.get("/",function(req,res){
    res.render("home",{name:'Prediction'}
    );
    console.log("Runn");
    });


app.post('/result', (req, res) => {
  const dropdownValue = req.body.dropdown;
  const input = req.body.input1;

  let rank = [];
  let data = [];

  console.log(dropdownValue);

  // SC
  if (dropdownValue === 'SC') {
    college
      .find({ SC: { $gte: input } })
      .select('college_name SC')
      .exec()
      .then((result) => {
        result.forEach((result) => {
          data.push(result.college_name);
          rank.push(result.SC);
          console.log(data);
        });

        setTimeout(() => {
          res.render('result', { result: data, Rank: rank });
        }, 1000);
      })
      .catch((err) => {
        console.error(err);
        // Handle error
      });
  }

  // GEN
  else if (dropdownValue === 'GEN') {
    college
      .find({ GEN: { $gte: input } })
      .select('college_name GEN')
      .exec()
      .then((result) => {
        result.forEach((result) => {
          data.push(result.college_name);
          rank.push(result.GEN);
          console.log(data);
        });

        setTimeout(() => {
          res.render('result', { result: data, Rank: rank });
        }, 1000);
      })
      .catch((err) => {
        console.error(err);
        // Handle error
      });
  }

  // OBC
  else if (dropdownValue === 'OBC') {
    college
      .find({ OBC: { $gte: input } })
      .select('college_name OBC')
      .exec()
      .then((result) => {
        result.forEach((result) => {
          data.push(result.college_name);
          rank.push(result.OBC);
          console.log(data);
        });

        setTimeout(() => {
          res.render('result', { result: data, Rank: rank });
        }, 1000);
      })
      .catch((err) => {
        console.error(err);
        // Handle error
      });
  }

  // EWS
  else if (dropdownValue === 'EWS') {
    college
      .find({ EWS: { $gte: input } })
      .select('college_name EWS')
      .exec()
      .then((result) => {
        result.forEach((result) => {
          data.push(result.college_name);
          rank.push(result.EWS);
          console.log(data);
        });

        setTimeout(() => {
          res.render('result', { result: data, Rank: rank });
        }, 1000);
      })
      .catch((err) => {
        console.error(err);
        // Handle error
      });
  }

  // ST
  else if (dropdownValue === 'ST') {
    college
      .find({ ST: { $gte: input } })
      .select('college_name ST')
      .exec()
      .then((result) => {
        result.forEach((result) => {
          data.push(result.college_name);
          rank.push(result.ST);
          console.log(data);
        });

        setTimeout(() => {
          res.render('result', { result: data, Rank: rank });
        }, 1000);
      })
      .catch((err) => {
        console.error(err);
        // Handle error
      });
  }
});










  app.listen(4000, () => {
    console.log('Server started on port 4000');
  });