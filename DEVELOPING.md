# Setup

```
npm install
```

# Developing

```
npm run start
```

# Deploying changes to handbook.dsa.org

The site is deployed using a service called [Surge](https://surge.sh).

DSA Ops has a Surge account with permission to deploy the project to
`http://handbook.dsa.org`.

## Signing into Surge

```
npm install --global surge
surge --login
```

Follow instructions to sign in/ sign up for a surge account.

## Deploying changes

```
npm run deploy
```
