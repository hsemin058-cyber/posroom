const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("포스룸 웰컴봇이 작동 중입니다 🚀");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`포스룸 봇이 ${PORT}번 포트에서 실행 중입니다.`);
});
