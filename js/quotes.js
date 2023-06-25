const quotes = [
    {
        quote: "허물이 있다면, 버리기를 두려워말라.",
        author: "공자"
    },    
    {
        quote: "영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라.",
        author: "제임스 딘"
    },
    {
        quote: "나이가 성숙을 보장하지는 않는다.",
        author: "라와나 블랙웰"
    },
    {
        quote: "왜 굳이 의미를 찾으려 하는가? 인생은 욕망이지, 의미가 아니다.",
        author: "찰리 채플린"
    },
    {
        quote: "우리는 영원불멸하다는 것을 느끼고 안다.",
        author: "스피노자"
    },
    {
        quote: "내가 태어났을 때 나는 너무 놀라서 1년 반동안 말을 할 수 없었다.",
        author: "그레이시 앨런"
    },
    {
        quote: "인생은 사람들 앞에서 바이올린을 켜면서 바이올린을 배우는 것과 같다.",
        author: "사무엘 버틀러"
    },
    {
        quote: "인격은 그 사람의 운명이다.",
        author: "헤라클레이토스"
    },
    {
        quote: "인간은 인생의 방향을 결정할 규칙을 가지고 있어야 한다.",
        author: "존 웨인"
    },  
    {
        quote: "성공의 8할은 일단 출석하는 것이다.",
        author: "우디 앨런"
    } 
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author

