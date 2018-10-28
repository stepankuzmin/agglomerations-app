# Agglomerations

## Building from source

You have to install [Xcode](https://developer.apple.com/xcode/) and [react-native-cli](https://www.npmjs.com/package/react-native-cli).

```sh
npm install -g react-native-cli
```

Clone source code

```sh
git clone https://github.com/stepankuzmin/agglomerations.app.git
cd agglomerations.app
```

Create `.env` file with your Mapbox [access token](https://www.mapbox.com/account/access-tokens/)

```sh
echo "MAPBOX_ACCESS_TOKEN=<YOUR TOKEN HERE>" > .env
```

Run app in iOS simulator

```sh
react-native run-ios
```
