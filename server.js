const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get('*', (request, response) => {
        response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}


mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost/GoogleBooks", { useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });