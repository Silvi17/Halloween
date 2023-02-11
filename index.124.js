const m = function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload"))
        return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
        l(e);
    new MutationObserver(e=>{
        for (const t of e)
            if (t.type === "childList")
                for (const s of t.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && l(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(e) {
        const t = {};
        return e.integrity && (t.integrity = e.integrity),
        e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
        e.crossorigin === "use-credentials" ? t.credentials = "include" : e.crossorigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin",
        t
    }
    function l(e) {
        if (e.ep)
            return;
        e.ep = !0;
        const t = n(e);
        fetch(e.href, t)
    }
};
m();
const c = document.querySelector(".character-container")
  , i = document.querySelectorAll("template")
  , h = document.querySelector("button")
  , a = new Audio("thriller-risa.mp3");
a.volume = .20;
h.addEventListener("click", ()=>{
    document.querySelector(".paused-screen").remove(),
    d(),
    setInterval(()=>d(), 8e3)
}
);
const u = ["navy", "red", "lime", "rebeccapurple", "gold", "fuchsia", "crimson"]
  , f = ()=>{
    const o = c.querySelector(".character");
    document.body.classList.add("flash"),
    setTimeout(()=>document.body.classList.remove("flash"), 3e3),
    setTimeout(()=>o.classList.add("halloween"), 1e3),
    setTimeout(()=>{
        a.currentTime = 0,
        a.play()
    }
    , 250)
}
  , p = ()=>{
    const o = Math.floor(Math.random() * u.length)
      , r = u[o];
    c.style.setProperty("--character-glow", r)
}
  , d = ()=>{
    const o = Math.floor(Math.random() * i.length);
    console.log("New character!", o);
    const r = c.querySelector(".character");
    r && r.remove(),
    p(),
    setTimeout(()=>f(), 3e3);
    const n = i[o].content.cloneNode(!0);
    c.appendChild(n)
}
;
