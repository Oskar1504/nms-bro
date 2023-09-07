
const collectionMap: object  = {
  "blog": "post"
}

const resolveCollection = (collection: string) : string => {
  if(collectionMap[collection as keyof object]){
    return collectionMap[collection as keyof object]
  }

  return collection
}

export default resolveCollection;
