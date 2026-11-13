This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of react documentation [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### Deployments

The github repository https://github.com/eastbaydsa/handbook is automatically deployed to handbook.eastbaydsa.org using cloudflare.

* install command `yarn install`
  * If you don't have yarn: `npm -g install yarn`
* build command `npm run build` (test using CI=true yarn build)
* preview command `npx wrangler preview` (when you are on a branch https://<branch-name>.eastbaydsa-ops.workers.dev/ will work)
* deploy command `npx wrangler deploy --assets ./build`
