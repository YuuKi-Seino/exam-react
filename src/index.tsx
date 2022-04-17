import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecondRoot from "./views/secondroot";
import FirstRoot from "./views/firstroot";
import HololiveTalent from "./views/hololive/holotalent";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="firstroot" element={<FirstRoot />} />
        <Route path="secondroot" element={<SecondRoot />} />
        <Route path="hololive" element={<HololiveTalent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

//TODO React.StrictMode = 下記のことを検査してくれる？まだよくわかってない
// 安全でないライフサイクルの特定
// レガシーな文字列 ref API の使用に対する警告
// 非推奨な findDOMNode の使用に対する警告
// 意図しない副作用の検出
// レガシーなコンテクスト API の検出

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// アプリでパフォーマンス測定を開始したい場合は、関数を渡します。
// 結果を記録する（例：reportWebVitals(console.log))
// または解析エンドポイントに送信します。詳細はこちら： https://bit.ly/CRA-vitals
reportWebVitals();
