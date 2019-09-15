import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://dkim0401.mooo.com:7727/test?authSource=admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: "april",
  pass: "04012548"
});

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});

server.start(() => console.log("Graphql Server Running"));
