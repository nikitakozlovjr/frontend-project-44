install: #загружает все существующие пакеты в проекте
  npm ci

brain-games: #запуск brain-games.js
  node bin/brain-games.js

publish: 
   npm publish --dry-run

make lint:
  npx eslint .

  