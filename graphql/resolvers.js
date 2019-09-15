import { getMovies, getById, addMovie, deleteMovie } from "./db";
import Movie from "../models/movie";

const resolvers = {
  Query: {
    // movies: () => getMovies(),
    // movie: (_, { id }) => getById(id),
    async getMovie(root, { _id }) {
      return await Movie.findById(_id);
    },
    async allMovies() {
      return await Movie.find();
    }
  },
  Mutation: {
    // addMovie: (_, { name, score }) => addMovie(name, score)
    async createMovie(root, { input }) {
      return await Movie.create(input);
    },
    async updateMovie(root, { _id, input }) {
      return await Movie.findOneAndUpdate(
        {
          _id
        },
        input,
        {
          new: true
        }
      );
    },
    async deleteMovie(root, { _id }) {
      return await Movie.findOneAndRemove({
        _id
      });
    }
  }
};

export default resolvers;
