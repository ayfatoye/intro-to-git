var num = 0; // global variable

function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    const m_style = document.getElementById("mainStyleSheet");

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    const m_style_href = m_style.getAttribute("href");

    // 1 (c) Determine new stylesheet file name
    if (m_style_href === "light.css") {
        m_style.setAttribute("href", "dark.css");
        localStorage.setItem("style", "dark.css");
    }
    else{
        m_style.setAttribute("href", "light.css");
        localStorage.setItem("style", "light.css");
    }

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)


    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)

}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.
    const m_style = document.getElementById("mainStyleSheet");

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    m_style.setAttribute("href", localStorage.getItem("style"));
    // 2 (b) get html style element by ID

    // 2 (c) replace href attribute of html element.
    
}


