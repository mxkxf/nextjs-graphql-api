import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "world";
        },
      },
    },
  }),
});

async function handler(req, res) {
  const source = req.body.query;
  const response = await graphql({ schema, source });

  res.json(response);
}

export default handler;
