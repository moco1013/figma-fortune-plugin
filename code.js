// UIを表示
figma.showUI(__html__, { width: 300, height: 400 });

// 占い結果リスト
const fortunes = [
  { title: "大吉", message: "頭が冴えてFigmaを操作する手が止まらない！ガンガン行こう！", color: "#FFD700" },
  { title: "中吉", message: "少しずつ進めると吉。人に相談すると良いアイデアが浮かぶかも💬", color: "#C0C0C0" },
  { title: "小吉", message: "基礎に立ち返ってみましょう。神は細部に宿る👼", color: "#ADD8E6" },
  { title: "凶", message: "上手くいかない時は無理せずに！たまには休むことも大事🌴", color: "#FF6347" }
];

// メッセージを受信し、ランダムな占い結果を送信
figma.ui.onmessage = (msg) => {
  if (msg.type === "get-fortune") {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    figma.ui.postMessage(randomFortune);
  }
};

// プラグイン終了
figma.on("close", () => figma.closePlugin());
