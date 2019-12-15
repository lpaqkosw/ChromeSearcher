
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", function(){
    const Google = document.getElementById("Google").checked
    const input = document.getElementById("input").value
    const Naver = document.getElementById("Naver").checked
    const opgg = document.getElementById("op.gg").checked
    const Youtube = document.getElementById("Youtube").checked
    const Namu = document.getElementById("Namu").checked

    if(Google==true){
      console.log("Google checked")
      chrome.tabs.create({ url: "https://www.google.com/search?q="+input});
    }
    
    if(Naver==true){
      console.log("Naver checked")
      chrome.tabs.create({ url: "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query="+input});
    }

    if(opgg==true){
      console.log("opgg checked")
      chrome.tabs.create({ url: "https://www.op.gg/summoner/userName="+input});
    }

    if(Youtube==true){
      console.log("Youtube checked")
      chrome.tabs.create({ url: "https://www.youtube.com/results?search_query="+input});
    }

    if(Namu==true){
      console.log("Namu checked")
      chrome.tabs.create({ url: "https://namu.wiki/w/"+input});
    }
})})
