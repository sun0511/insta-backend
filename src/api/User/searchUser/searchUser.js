import { argsToArgsConfig } from "graphql/type/definition";
import { prisma } from "../../../../generated/prisma-client";

export default{
    Query:{
        searchUser: async(_,args) => prisma.users({where:{
            OR: [
                {username_contains: args.term},
                {firstName_contains: args.term},
                {lastName_contains: argsToArgsConfig.term}
            ]
        }})
    }
}