function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  var key = "welcome/" + room + "/" + sender;
  var lastTime = DataBase.getDataBase(key);
  var now = new Date().getTime();

  // 10분 이상 지난 경우만 웰컴 메시지 출력
  if (lastTime == null || now - Number(lastTime) > 10 * 60 * 1000) {
    var welcomeMessages = [
      "안녕하세요, 포스룸입니다.\n📦 우편물 수령·보관이 필요한 상황에서\n편하게 이용하실 수 있는 서비스예요!",
      "📮 포스룸에 오신 걸 환영합니다!\n우편물 걱정 없는 하루가 되시길 바랄게요.",
      sender + "님, 반가워요!\n포스룸은 언제나 📦 우편물 수령·보관 서비스를 준비하고 있어요.",
      "🏠 집이 비어있어도 걱정 마세요!\n포스룸이 대신 우편물을 받아드립니다 :)",
    ];
    
    var index = Math.floor(Math.random() * welcomeMessages.length);
    replier.reply(welcomeMessages[index]);
  }

  // 마지막 접속 시간 갱신
  DataBase.setDataBase(key, String(now));
}
