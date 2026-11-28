import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.PUBLIC_DB_URI as string);
const db = client.db();

export const auth = betterAuth({

  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: { 
    enabled: true, 
  }, 
  
  user: {
       additionalFields: {
          role: {
              type: "string",
              required: false,
              defaultValue: "visitor", // every new account starts as a visitor
              input: false // users cannot choose their own role
            } 
        }
    },

  socialProviders: { 
    github: { 
      clientId: process.env.GITHUB_CLIENT_ID as string, 
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
    }, 
  }, 


});