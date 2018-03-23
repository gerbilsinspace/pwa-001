We don't expect anyone to run the app. Here are the examples we were using for the demo.

*  [App Manifest](https://service-worker--piksel-pwa.netlify.com) - code lives on the service-worker branch
*  [Service Worker](https://service-worker--piksel-pwa.netlify.com) - code lives on the service-worker branch
*  [Cache API and Indexed DB](https://indexed-db--piksel-pwa.netlify.com) - code lives on the indexed-db branch
*  [Notifications API and Push API](https://push--piksel-pwa.netlify.com) - - code lives on the push branch

And here is our [notes](https://pwa-slides.netlify.com)

If you do want to run this locally, fair warning, the setup is a bit esoteric, and I'm not allowed to publish the values of the environment variables. Sorry!

npm install

REACT_APP_TOKEN=yourToken REACT_APP_TENANT=tenantName REACT_APP_DIRECTORY=tenantName REACT_APP_IDENTITY_URL=https://piksel-identity-url.com REACT_APP_REGISTRY_URL=https://piksel-registry-url.com REACT_APP_USERNAME=yourUsername REACT_APP_PASSWORD=yourPassword REACT_APP_TOKEN_URL=https://your-token-url.com npm run start
