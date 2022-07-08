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
	keyがプロパティ名: value 値
	state自体にカーリーブラケットを設定
	あと、htmlにjavascriptで宣言された変数を表示するときにも使っている

ここをみて
https://newsite-make.com/react-study/

https://qiita.com/d0ne1s/items/971ffc8db6815e9aaad0
