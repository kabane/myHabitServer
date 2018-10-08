# myHabitServer

## 環境
- node.js: v8.9.1
- npm: v6.2.0
- express: v4.16.0
- mongodb: v4.0.2

## 事前準備
- mongodbインストール(homebrew推奨)

```
brew install mongodb
```

## 開発準備

- npmインストール
```
npm install
```

- 初期データ作成
```
node scripts/seeds.js
```

- 動作チェック
```
curl http://localhost:3000
```

以下のJSONが返却されれば準備完了

```
[{"_id":"5bbb9005ebfa28644e7d6a96","name":"todo4","status":0,"__v":0},{"_id":"5bbb9005ebfa28644e7d6a95","name":"todo3","status":0,"__v":0},{"_id":"5bbb9005ebfa28644e7d6a97","name":"todo5","status":1,"__v":0},{"_id":"5bbb9005ebfa28644e7d6a98","name":"todo6","status":1,"__v":0},{"_id":"5bbb9005ebfa28644e7d6a99","name":"todo7","status":1,"__v":0},{"_id":"5bbb9005ebfa28644e7d6a9a","name":"todo8","status":1,"__v":0}]
```
