function connect() {
  mongoose
    .connect(process.env.MONDODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("connected"))
    .catch((err) => {
      console.log(err);
    });
}


modules.export = connect 