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

- サーバー立ち上げ
```
npm run script

or

// デバックモード
DEBUG=express:* node ./bin/www
```

- 動作チェック
```
curl http://localhost:3000
```

以下のようなJSONが返却されれば準備完了

```
[
    {
        "_id": "5bd854ed8381264ab2c5de67",
        "name": "todo1",
        "status": 0,
        "category_id": "5bd854ed8381264ab2c5de64",
        "__v": 0
    },
    {
        "_id": "5bd854ed8381264ab2c5de68",
        "name": "todo2",
        "status": 0,
        "category_id": "5bd854ed8381264ab2c5de65",
        "__v": 0
    },
    {
        "_id": "5bd854ed8381264ab2c5de69",
        "name": "todo3",
        "status": 0,
        "category_id": "5bd854ed8381264ab2c5de66",
        "__v": 0
    }
]
```
