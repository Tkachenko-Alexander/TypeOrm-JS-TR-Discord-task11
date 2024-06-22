// import "reflect-metadata";
// import { createConnection } from "typeorm";
// import express from "express";
// import bodyParser from "body-parser";
// import { Request, Response } from "express";
// import { User } from "./entity/User";

// createConnection().then(async connection => {
//   const app = express();
//   app.use(bodyParser.json());

//   const userRepository = connection.getRepository(User);

//   app.get("/users", async (req: Request, res: Response) => {
//     const users = await userRepository.find();
//     res.json(users);
//   });

//   app.get("/users/:id", async (req: Request, res: Response) => {
//     const user = await userRepository.findOne(req.params.id);
//     res.json(user);
//   });

//   app.post("/users", async (req: Request, res: Response) => {
//     const user = userRepository.create(req.body);
//     const result = await userRepository.save(user);
//     res.send(result);
//   });

//   app.put("/users/:id", async (req: Request, res: Response) => {
//     const user = await userRepository.findOne(req.params.id);
//     userRepository.merge(user, req.body);
//     const result = await userRepository.save(user);
//     res.send(result);
//   });

//   app.delete("/users/:id", async (req: Request, res: Response) => {
//     const result = await userRepository.delete(req.params.id);
//     res.send(result);
//   });

//   app.listen(3000, () => {
//     console.log("Server is running on port 3000");
//   });
// }).catch(error => console.log(error));


import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import bodyParser from "body-parser";
import { Request, Response } from "express";
import { User } from "./entity/User";

createConnection().then(async connection => {
  const app = express();
  app.use(bodyParser.json());

  const userRepository = connection.getRepository(User);

  app.get("/users", async (req: Request, res: Response) => {
    const users = await userRepository.find();
    res.json(users);
  });

  app.get("/users/:id", async (req: Request, res: Response) => {
    const user = await userRepository.findOne({ where: { id: parseInt(req.params.id) } });
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  });

  app.post("/users", async (req: Request, res: Response) => {
    const user = userRepository.create(req.body);
    const result = await userRepository.save(user);
    res.send(result);
  });

  app.put("/users/:id", async (req: Request, res: Response) => {
    const user = await userRepository.findOne({ where: { id: parseInt(req.params.id) } });
    if (user) {
      userRepository.merge(user, req.body);
      const result = await userRepository.save(user);
      res.send(result);
    } else {
      res.status(404).send("User not found");
    }
  });

  app.delete("/users/:id", async (req: Request, res: Response) => {
    const result = await userRepository.delete(req.params.id);
    res.send(result);
  });

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}).catch(error => console.log(error));
