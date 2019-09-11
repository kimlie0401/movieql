const DK = {
  name: "DK Kim",
  age: 37,
  gender: "male"
};
const resolvers = {
  Query: {
    person: () => DK
  }
};

export default resolvers;
