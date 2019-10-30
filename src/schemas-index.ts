  
/**
 * 
 * This file is to merge all objects in 'schemas' directory
 * Originally GraphQLServer works with one .gql file(or .graphql)
 * and for that reason is necessary to use this tool
 * You can find the tool at https://github.com/Urigo/merge-graphql-schemas
 */

import * as path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
 
const schemasArray = fileLoader(path.join(__dirname, './schemas'));
 
export default mergeTypes(schemasArray, { all: true });