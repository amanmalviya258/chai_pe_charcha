




// * ----------------------------------------------------------------

//Method One 
//  (async () => {
//   try {
//     mongoose.connect(process.env.MONDODB_URI);
//   } catch (error) {
//     console.log("ERROR", error);
//     throw err;
//   }
// })();

 

// *  ----------------------------------------------------------------

//Method Two

// function connect() {
//   mongoose.connect(process.env.MONDODB_URI, {useNewUrlParser: true,  useUnifiedTopology: true,})
//     .then(console.log("connected"))
//     .catch((err) => {
//       console.log(err);
//     });
// }

// modules.export = connect
