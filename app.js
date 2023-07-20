require("dotenv").config();
const express = require("express");
require("./db/connect");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  // Replace the sampleData with your own data
  const sampleData = {
    myData: [
      {
        id: 1,
        name: "Men Winter long coat",
        price: 70000,
        company: "Gucci",
        size: ["S", "M", "L", "XL", "XXL"],
        colours: ["Yellow", "Gold"],
        image:
          "https://fashinza.com/textile/wp-content/uploads/2023/02/Turtle-Necks-683x1024.jpg",
      },
      {
        id: 2,
        name: "Vogue",
        price: 110000,
        company: "Vogue",
        size: ["S", "M", "L", "XL", "XXL"],
        colours: ["White","Red"],
        image:
          "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        name: "Parada",
        price: 809000,
        company: "Parada",
        size: ["S", "M", "L", "XL", "XXL"],
        colours: ["Blue", "White"],
        image:
          "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/14572050/2022/2/3/f7390b3d-ae00-4cfa-92b2-e0c8ec36a1a11643873057427-Dennis-Lingo-Men-Blue-Slim-Fit-Windowpane-Checked-Casual-Shi-1.jpg",
      },
      {
        id: 4,
        name: "LV",
        price: 570000,
        company: "LV",
        size: ["S", "M", "L", "XL", "XXL"],
        colours: ["Black","Olive"],
        image:
          "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19818628/2022/9/6/ec27eee6-d613-4423-8e0f-007aea1603c31662468109188Shirts1.jpg",
      },
    ],
  };

  res.json(sampleData); // Send the response to the client once
});

const PORT = process.env.PORT;

//listen to port
app.listen(PORT, () => {
  console.log(`'API server is running on port ${process.env.PORT}'`);
});
