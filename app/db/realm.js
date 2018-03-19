import Realm from 'realm'

const FavoritesSchema = {
  name: 'Favorites',
  properties: {
    id: 'string',
    symbol:  'string',
  }
};

export default new Realm({schema: [FavoritesSchema]});
