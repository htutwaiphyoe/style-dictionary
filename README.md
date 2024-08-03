# Music Player

Source [https://www.youtube.com/watch?v=9CElrkFwiBU](https://www.youtube.com/watch?v=9CElrkFwiBU)

yarn create expo -t

tsconfig.json

.prettierrc
.prettierignore

npx prettier --write .

npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

expo router needs app folder in src

package.json => "main": "expo-router/entry"

app.json => application native configuration

"scheme": "music-player"

"experiments": {
  "typedRoutes": true,
  "tsconfigPaths": true
}

npx expo run:ios => ios build

npx expo install expo-dev-client => developer tools

yarn add -D eslint eslint-plugin-react eslint-plugin-react-hooks

.eslintrc.json, .eslintignore

npx @eslint/migrate-config .eslintrc.json

@typescript-eslint/parser, @typescript-eslint/eslint-plugin
