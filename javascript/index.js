
function fetch_data() {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=coding+comedy+game&key=AIzaSyCM18uwX5ZEMQPAGpiq5dtr-HERhgVgkyA`)
        .then(function (res) {
            return res.json();
        }).then(function (res) {
            //console.log(res.items);
            display_trending(res.items)
        })

}
let main_data=0;
function fetch_search_data() {
    let query = document.querySelector("#query").value;
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=AIzaSyCM18uwX5ZEMQPAGpiq5dtr-HERhgVgkyA`)
        .then(function (res) {
            return res.json();
        }).then(function (res) {
            main_data=res.items;
            search_auto(main_data);
        });
}
fetch_data();
function display_trending(trending_data) {
    localStorage.setItem("play_data",JSON.stringify(trending_data));
    let main = document.querySelector("#main-content");
    main.innerHTML = null;
    trending_data.forEach(function(element,index) {
        let div = document.createElement("div");
        div.addEventListener("click",function(){
            set_index(index);
        })
        let snippet = element.snippet;
        let thumbnails = snippet.thumbnails.high;
        let div1 = document.createElement("div");
        let img = document.createElement("img");
        img.src = thumbnails.url;
        div1.append(img);
        let div2 = document.createElement("div");
        div2.setAttribute("id", "details");
        let chanel_name = document.createElement("h5");
        chanel_name.innerText = snippet.channelTitle;
        let title = document.createElement("p");
        title.innerText = snippet.title;
        div2.append(title, chanel_name)
        div.append(div1, div2);
        main.append(div);
        div.addEventListener("click", function () {
            play_video(element);
        })
    });
}

function play_video(ele) {
    //console.log(ele);
}

function search_auto(data) {
    let search_res = document.querySelector("#search_res");
    let user_input = document.querySelector("#query").value;
    let main_content = document.querySelector("#main-content");
    console.log(user_input);
    search_res.style.display = "block"
    search_res.innerHTML = null;
    main_content.style.zIndex = -1;
    if (user_input == "") {
        main_content.style.zIndex = 1;
        search_res.style.display = "none";
    } else {
        data.map(function (ele) {
            let div = document.createElement("div");
            div.addEventListener("click", function () {
                search_data(data);
            })
            let snippet = ele.snippet;
            let title = snippet.title;
            let p = document.createElement("p");
            p.innerText = title;
            div.append(p);
            search_res.append(div);
        })
    }

}

function search_data(data) {
    localStorage.setItem("play_data",JSON.stringify(data));
    window.location.href="search_result.html"
}
let id;

function main() {
        fetch_search_data();
}

function debaunce(func,delay) {
    clearTimeout(id);
    id=setTimeout(() => {
        func();
    }, delay);
}
function set_index(index){
    localStorage.setItem("index",JSON.stringify(index));
    window.location.href="show_video.html";
}