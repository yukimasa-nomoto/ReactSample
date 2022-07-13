2022/07/07,08

https://note.com/dragontaro/n/n04e0b9c0cca7
コレを作るか？
	props
	state
		→前やったが忘れた。どこかにメモあるきがする。
		あっ！ OneDriveか！	
			→そのメモを見ても思い出せる内容ではなかった。
		↓	
		Create-appして、githubにあげる
			npx create-react-app myapp
			↓
			git hubにreactSampleのrepository作る
				↓
				git init
				git remote add origin https://github.com/yukimasa-nomoto/ReactSample.git
				git push origin master
				↓
				MyReadMe.txtを用意
			↓
			npm start で動作確認OK
		↓
		３章
			HelloWorld.jsを作る。
				functionで作成。export default HelloWorld;
				index.jsの中身を<HelloWorld> HelloWorldをimportする
				↓
				HelloWorldをクラスに変更して動作するか？
					→成功。import等を記載
		４章
			カウンター
				CountApp.jsを作る
					this.state内にjsonみたいに count を用いて作成。
					setStateで更新すること
		５章
			reactでformを使う
				TodoApp.jsを作る
					todoListにconcat
			stateの更新は遅い
			配列追加は非破壊的メソッド必須
		６章
			todoListをコンポーネント化
				props使用
					各クラスごとに渡す中身全体を示している
					propsは、外側で書いたメソッドやプロパティ、全てを使える
				まず「TodoElement」作成
				「AddTodo」を作成
				TodoApp2を作成
					TodoAppと同様のstateを用意する。(constructor内)
						{...this.state}がAddTodoにもわたる
						あらたにonChangeとaddを用意する
					↓
					うまく動かない
				TodoApp3を作って、再度挑戦する
					AddTodo3のonChangeを多少変更
					addも引数つけた
			一旦コミット
		７章
			削除機能実装
				記事の横に「削除」ボタン追加
					非破壊的spliceで削除
		↓
		完了
		一旦コミット


カーリーブラケット{}
	jsx内ではjavascript実行箇所
	keyがプロパティ名: value 値
	state自体にカーリーブラケットを設定
	あと、htmlにjavascriptで宣言された変数を表示するときにも使っている

ここをみて
https://newsite-make.com/react-study/		
	読んだ感じ次はここから
	https://www.hypertextcandy.com/react-tutorial-03-props-and-state
		props--->親から子へ渡される属性値
		state--->子の内部状態
			{...}で渡したりしている。
		Componentで渡すところから。あらゆる型を渡せそう
			↓
			propsのテストから
				PropsTest.js作成
			stateを考える
				CountButton.jsを作成
					useStateを使用
					2つの宣言をする。思い出した
				新たに
					Parent.js Child.jsを作成
					--->動作確認OK
		一旦コミット(2022/07/11 16:00)
	https://www.hypertextcandy.com/react-tutorial-04-form-and-events
		SampleText.js作成
			--->動作確認OK
		SampleRadio.js作成
			--->動作確認OK
		SampleCheckBox.js作成
			複数入力可なので、配列でstateを保持
			stateの直接編集は不可
			--->動作確認OK
		SampleSelectBox.js作成
			--->動作確認OK
		一旦コミット(2022/07/11 17:40)
		コンポーネントのイベント処理
			イベントパターン。親側の関数を子側からCall
		SampleTab.js作成
			--->動作確認OK
		問題１
			TestRadio.js作成
				getAnswerを中に書く。
				optionsで値を保持する。find mapなどのメソッドをうまく使う
		問題２
			TestPassword.js作成
				1つの中でやろうとしたのが間違い
			TestPassword2.js作成
				inputのtypeのpasswordを使うこと
		問題３ 数当てゲーム
			TestGuess.js作成
			--->動作確認OK
		一旦コミット(2022/07/12 14:00)
		フォームとイベントハンドリング終了

	https://www.hypertextcandy.com/react-tutorial-05-wrap-up-with-todo-app
		どうやって、コンポーネントを考えるか
			入力箇所
			タスク
			処理済みタスク
			↓
			Todo
				Input,Filter
				TodoItem
		index.htmlをindex2.htmlにして、あたらしく持ってくる
		index.jsをindex2.js
		↓
		MyTodo.jsをつくる
			classNames失敗
			mapの使い方イマイチ。文法的によくわかっていない
			・タスクを作成
				Input箇所
					Enter押下で、親側のaddをコール
				Filter箇所
		一旦コミット(2022/07/12 16:17)
	https://www.hypertextcandy.com/react-tutorial-06-effect
		index.jsとindex.htmlを戻す
		useEffect
			レンダリング後に実施したい場合
			第二引数は呼びたいタイミング
				ないと、毎回実行
				[]だと初回のみ
				[]に変数設定すると、それが更新されたときのみ
			SampleEffect.jsを作成
				関数を返すと、それがアンマウント時にクリーンアップ関数が行われるのがわかる
		練習問題１
			TestDummyUser.jsを作成
				fetchの種類を３つほど記載
				表ではなくh1等で簡単に実装
		一旦コミット(2022/07/12 17:17)
	
	https://www.hypertextcandy.com/react-tutorial-07-custom-hook
		カスタムフック
			useを頭につけるとカスタムフックとみなされる
			練習問題１
				カスタムフックを作る。例文をコピーする
				TestGif.jsを作成
					うまくSwiperがnewできない。あきらめる
					npm install swiper
					--->動作した?
						矢印が表示できない
					↓
					一旦コミット(2022/07/13 11:00)
					useをつけてまとめる
						--->まとめおわり
					一旦コミット(2022/07/13 11:30)
	一旦終わったので、次に行く
	https://qiita.com/seira/items/f063e262b1d57d7e78b4
		useState編
			SampleUseState.js作成　
				今まで使ってた書式のこと。クラス書式は古いみたい。 2020年から変わってそう
			一旦コミット
			↓
	https://qiita.com/seira/items/e62890f11e91f6b9653f
		useEffect
			SampleUseEffect.js作成
				おそらく以前は、ライフサイクルメソッドがあった
					(componentDidMount componentDidUpdate)
				https://ja.reactjs.org/docs/hooks-effect.html
					SideEffectについてここを読む
						タイトルに[件数]出す場合等に使える
				↓
				materialUiをインストール
				npm install @material-ui/core
					react18だとうまく入らない
					↓
					npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps
					npm install @mui/icons-material --legacy-peer-deps
					npm install @mui/styles --legacy-peer-deps
					--->上手くインストール
				↓
				最初の例はOK
				↓
				input領域を追加してテスト
					--->OK
				↓
				クリーンアップ関数はeffect内にてreturnした関数の事
					記載していないがタイマー等では必須
			一旦コミット
			↓
	https://qiita.com/seira/items/fccdf4e73c59c491558d
		useContext
			SampleUseContext.js作成
				グローバル変数	
			一旦コミット
				


	コレでこのサイトはおわる

https://and-engineer.com/articles/YcfL7BAAACIAryhf
	三目並べ

https://qiita.com/d0ne1s/items/971ffc8db6815e9aaad0
