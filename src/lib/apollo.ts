import { ApolloClient, InMemoryCache } from "@apollo/client";  

export const client = new ApolloClient({
  uri:'https://api-sa-east-1.graphcms.com/v2/cl4oy8xcx1fmy01xkg8ve8711/master',
  cache: new InMemoryCache()
})