const http = require("http");
const welcomeMessage = require("./welcomeRender");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      const responseBody = welcomeMessage();  // 응답 JSON
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(responseBody));
    });
  } else {
    // GET 요청이나 기타 요청은 단순 텍스트로 응답
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("포스룸 웰컴봇이 작동 중입니다.");
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ 포스룸 봇이 포트 ${PORT}에서 실행 중입니다.`);
});
