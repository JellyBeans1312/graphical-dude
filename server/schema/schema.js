const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
const _ = require('lodash');

let books =  [
  {name: 'Name of the Wind', genre: 'Fantasy', id: '1'},
  {name: 'Chicken man', genre: 'Fantasy', id: '2'},
  {name: 'Trial by Fire', genre: 'Non-fiction', id: '3'}
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    genre: {type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLString}},
      resolve(parent, args){
        return _.find(books, {id: args.id}) 
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: RootQuery
})