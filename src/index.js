import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// main(최종) ->

// sansan -> front -> repository - Main,dev,본인브랜치

// 로컬 본인브랜치 -> 원격 내브랜치-> 원격 dev 머지,  ,
// 본인의 로컬 dev pull -> 로컬 내 브랜치에 push 받아서 ,

// git checkout -b soomin
// git push origin soomin
// 각자가 origin 각자 브랜치에 각자 작업 파일 푸쉬 그후 다같이 dev로 머지

// 제가
// 로컬, 원격

// api/order -> post
