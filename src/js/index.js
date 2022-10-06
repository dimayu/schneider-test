//Menu button on click event
document.querySelector(".header-mobile__button").onclick = function () {
    // Toggles a class on the menu button to transform the burger menu into a cross
    document.querySelector(".header-mobile__button--line:nth-of-type(1)").classList.toggle("header-mobile__button--line--1");
    document.querySelector(".header-mobile__button--line:nth-of-type(2)").classList.toggle("header-mobile__button--line--2");
    document.querySelector(".header-mobile__button--line:nth-of-type(3)").classList.toggle("header-mobile__button--line--3");

    // Toggles a class that slides the menu into view on the screen
    document.querySelector(".mobile-menu").classList.toggle("mobile-menu--open");
    return false;
};

//date
let nowTemp = new Date();
let oneDayLong = 24 * 60 * 60 * 1000;
let c_time = nowTemp.getTime();
let c_day = nowTemp.getDay() || 7;
let m_time = c_time - (c_day - 1) * oneDayLong;
let monday = new Date(m_time);
let m_year = monday.getFullYear();
let m_month = monday.getMonth() + 1;
let m_date = monday.getDate();
let m_monday = m_date + "." + m_month + "." + m_year;
console.log(m_monday);
document.getElementById("monday").innerHTML = m_monday;
