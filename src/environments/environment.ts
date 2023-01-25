// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const serviceURL={
  User:{
  login:"http://restapi.adequateshop.com/api/authaccount/login",
  Registertion:"http://restapi.adequateshop.com/api/authaccount/registration"
  },
  Movies:{
    all:"https://api.themoviedb.org/3/trending/all/day?api_key=676319826011238b4a526f3692c92d57",
  }


}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
