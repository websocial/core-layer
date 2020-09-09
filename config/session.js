/**
 * Session Configuration
 * (sails.config.session)
 *
 * Use the settings below to configure session integration in your app.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For all available options, see:
 * https://sailsjs.com/config/session
 */

module.exports.session = {

  /***************************************************************************
  *                                                                          *
  * Session secret is automatically generated when your new app is created   *
  * Replace at your own risk in production-- you will invalidate the cookies *
  * of your users, forcing them to log in again.                             *
  *                                                                          *
  ***************************************************************************/
  secret: '77d84ed9e8f10ae78dfcedd4a91d4375',
  adapter: 'connect-mongo',
  url: 'mongodb://mwong153:goodboy426@cluster0-shard-00-00.r4she.mongodb.net:27017,cluster0-shard-00-01.r4she.mongodb.net:27017,cluster0-shard-00-02.r4she.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-8latbl-shard-0&authSource=admin&retryWrites=true&w=majority',
  // url: 'mongodb://fullstackadmin:fullstackadmin111@ds245677.mlab.com:45677/heroku_wcqm39fl',
  collection: 'sessions',
  /***************************************************************************
  *                                                                          *
  * Customize when built-in session support will be skipped.                 *
  *                                                                          *
  * (Useful for performance tuning; particularly to avoid wasting cycles on  *
  * session management when responding to simple requests for static assets, *
  * like images or stylesheets.)                                             *
  *                                                                          *
  * https://sailsjs.com/config/session                                       *
  *                                                                          *
  ***************************************************************************/
  // isSessionDisabled: function (req){
  //   return !!req.path.match(req._sails.LOOKS_LIKE_ASSET_RX);
  // },

};
