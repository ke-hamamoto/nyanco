# サイトURL

nyanco

# 画像ファイル名 （例）

自分で考えて作っても大丈夫です。Pick upやページ下の一覧はリンクの想定です。なので各リンクのサムネ画像は、各猫の特集記事ディレクトリであるnyancosのimagesに保存するようにして下さい。

- タイトル
  - nyanco/images/title.svg
- MVの猫
  - nyanco/images/mv.png
- MVの背景ストライプ（CSSで作れる？）
  - nyanco/images/bg_mv.png
- Pick up
  - nyanco/nyancos/images/nyanco_01.jpg
- Pick up 足跡
  - nyanco/nyancos/images/bg_pickup.png
- Pick up （右と左で画像を分ける作り方をするならば）
  - nyanco/nyancos/images/bg_pickup_right.jpg 右
  - nyanco/nyancos/images/bg_pickup_left.jpg　左
- 飼育員さん
  - nyanco/images/keeper-goto.png
  - nyanco/images/keeper-fujisawa.png
- すべて / こねこ / おもしろ
  - nyanco/nyancos/images/nyanco_02.jpg
  - nyanco/nyancos/images/nyanco_03.jpg
  - nyanco/nyancos/images/nyanco_03.jpg
  - ...

# ページ構成

下記大きな塊は\<section\>にしてクラスを付ける。<br>

- タイトル、ディスクリ、MVエリア（クラス名: n-head ※nはnyancoの「n」。単純にheadとすると汎用的過ぎてNWのCSSとバッティングする可能性がある。）
- Gナビ (n-gnavi)
- Pick up (n-pickup)
- 飼育員さん (n-keeper)
- 一覧 (n-nyancos)

# 各HTMLパーツのクラス名

ご自由に。

# 各ステップ

基本的にはSPベースで、PCのスタイルはメディアクエリで記述する。ソースの管理はGithub。各人 nyanco__名前 でリポジトリをws003に作成。

## ステップ１

### 開発環境準備

- このリポジトリをMAMPのhtdocs/news/special/nyancoにクローン
- MAMPを起動しNHKのヘッダー・フッターのみのページが表示される事を確認
- Sassを使う準備
  - Sassを使うためのツールをDLする。
    - ターミナルを開き、nyanco/_developmentに移動。`npm install`とコマンドを打つ。
  - Sassを使うためのツールを起動する。
    - DLが終わったら`npx gulp`とコマンドを打つ。 
- Sassが使えるか確認
  - sass/css/index.scssを開き`body{ font-size: 100px };`と記述し保存。
  - nyanco/css/index.cssが作成されている事と上記の記述が書かれている事を確認する。

### NWのCSSを上書きする

### タイトル・ディスクリ・MVを作成する

- 背景のストライプは背景画像では無くCSSで実装する

## ステップ２

残りの部分を実装する。次のステップでJSを入れるので、いったんデザイン通りにHTMLを作成する。

## ステップ3

Gナビをクリックすると、スクロールして対象のコンテンツに移動する。

## ステップ4

Gナビをスクロールに追従させる

## ステップ5

pickup.xmlを作成する。Pick upに表示されている情報をXMLに保存し、XMLを使いPick upが表示されるようにする。jQueryのajaxを使う。

## ステップ6

- nyancos.xmlを作成する。XMLを使い記事一覧が表示されるようにする。
- ボタンクリックでカテゴリー毎の記事が表示される。
