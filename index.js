const welcomeKeyPrefix = "welcome/";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  const key = welcomeKeyPrefix + room + "/" + sender;
  const now = new Date().getTime();
  const lastTime = Number(DataBase.getDataBase(key));

  // 웰컴 메시지 전송 조건 (10분 이상 접속 기록 없음)
  const cooldown = 10 * 60 * 1000; // 10분 (단위: ms)

  if (!lastTime || now - lastTime > cooldown) {
    const welcomeMessages = [
      "안녕하세요, 포스룸입니다.\n📦 우편물 수령·보관이 필요한 상황에서\n편하게 이용하실 수 있는 서비스예요!",
      "📮 포스룸에 오신 걸 환영합니다!\n우편물 걱정 없는 하루가 되시길 바랄
