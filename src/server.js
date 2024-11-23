const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas');
const resolvers = require('./resolvers');
const sequelize = require('./config/database');
const auth = require('./middlewares/auth');

const app = express();

app.use(express.json());

app.use(
  '/graphql',
  graphqlHTTP((req) => ({
    schema,
    rootValue: resolvers,
    graphiql: true,
    context: { user: req.user },
  }))
);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}`));
});