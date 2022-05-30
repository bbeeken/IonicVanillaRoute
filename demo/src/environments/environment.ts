/* eslint-disable @typescript-eslint/quotes */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey: 'b77c723eb446abb61a4ae4e3189e5848', // <-- Enter your own key here!'
  baseUrl: 'https://api.themoviedb.org/3',
  images: 'https://image.tmdb.org/t/p',
  firebaseConfig: {
    apiKey: "AIzaSyAJJXan5h0JuJJjhG6Q8xe8ZepXAdVUpUI",
    authDomain: "ccfsdemo.firebaseapp.com",
    projectId: "ccfsdemo",
    storageBucket: "ccfsdemo.appspot.com",
    messagingSenderId: "273181290883",
    appId: "1:273181290883:web:c057d39b75beb0079b86b6"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
