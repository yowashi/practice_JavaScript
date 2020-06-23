//じゃんけんの手を入力するプロンプト欄作成
var user_hand = prompt('じゃんけんの手をグーチョキパーから選んでください');
//ぐーちょきぱーと他が入力された際の繰り返し処理を作成
while((user_hand!="ぐー")&&(user_hand!="ちょき")&&(user_hand!="ぱー")&&(user_hand!=null)){
	alert('ぐーちょきぱーのいずれかを入力ください');
	user_hand = prompt('じゃんけんの手をグーチョキパーから選んでください');
}

//じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();

//ユーザーの手とJSのじゃんけんの手を比べる関数を呼び出し、結果をjudgeする
var judge = winLose(user_hand, js_hand);

//結果表示の処理
if(user_hand!=null){
	alert('貴方の選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。' );
} else{
	alert("またチャレンジしてね");
}


//ランダムでじゃんけんの手を作成する関数
function getJShand(){
	var js_hand_num = Math.floor(Math.random() * 3);
	var hand_name;

	if(js_hand_num == 0){
		hand_name = "ぐー";
	}else if(js_hand_num == 1){
		hand_name = "ちょき";
	}else if(js_hand_num == 2){
		hand_name = "ぱー";
	}

	return hand_name;
}

//ユーザーの手とJavaScriptのジャンケンを比べる関数
function winLose(user, js){
	var winLoseStr;

	if(user == "ぐー"){
		if(js == "ぐー"){
			winLoseStr = "あいこ;"
		}else if(js == "ちょき"){
			winLoseStr ="かち";
		} else if(js == "ぱー"){
			winLoseStr = "まけ";
		}

	}else if(user == "ちょき"){
		if(js == "ぐー"){
			winLoseStr = "まけ;"
		}else if(js == "ちょき"){
			winLoseStr ="あいこ";
		} else if(js == "ぱー"){
			winLoseStr = "かち";
		}

	}else if(user == "ぱー"){
		if(js == "ぐー"){
			winLoseStr = "かち;"
		}else if(js == "ちょき"){
			winLoseStr ="まけ";
		} else if(js == "ぱー"){
			winLoseStr = "あいこ";
		}
	}

	return winLoseStr;
}