(()=>{"use strict";const e=()=>{console.log("I am loading the home page");const e=document.getElementById("content"),t=document.createElement("div");t.id="top-nav";const n=document.createElement("ul");n.id="top-nav-ul";const c=document.createElement("li");c.textContent="Home",c.id="home";const a=document.createElement("li");a.textContent="Menu",a.id="menu";const d=document.createElement("li");d.textContent="Contact",d.id="contact",n.appendChild(c),n.appendChild(a),n.appendChild(d),t.appendChild(n);const o=document.createElement("div");o.id="hero-1";const i=document.createElement("div");i.className="main-img";const s=document.createElement("div");s.className="title",s.innerHTML="<h1>Welcome to Wing Slutz!</h1>",i.appendChild(s);const l=document.createElement("div");l.className="special-offers";const m=document.createElement("div");m.className="special-1";const r=document.createElement("H3");r.textContent="$14.99";const p=document.createElement("H4");p.textContent="Wing Buckets",m.appendChild(r),m.appendChild(p);const u=document.createElement("div");u.className="special-2";const h=document.createElement("H3");h.textContent="$10.00";const C=document.createElement("H4");C.textContent="Domestic Pitchers",u.appendChild(h),u.appendChild(C),l.appendChild(m),l.appendChild(u),o.appendChild(i),o.appendChild(l);const E=document.createElement("div");E.id="cards";const v=document.createElement("div");v.className="card";const g=document.createElement("div");g.className="icon",g.innerHTML='<i class="fas fa-beer"></i>';const N=document.createElement("div");N.className="header",N.textContent="Beer";const H=document.createElement("div");H.className="sub-header",H.textContent="Over 30 Local Craft Beers and Ciders on Tap!",v.appendChild(g),v.appendChild(N),v.appendChild(H);const T=document.createElement("div");T.className="card";const L=document.createElement("div");L.className="icon",L.innerHTML='<i class="fas fa-drumstick-bite"></i>';const M=document.createElement("div");M.className="header",M.textContent="Wings";const f=document.createElement("div");f.className="sub-header",f.textContent="Try a bucket of our delicious wings and world famous Slut Sauce",T.appendChild(L),T.appendChild(M),T.appendChild(f);const b=document.createElement("div");b.className="card";const y=document.createElement("div");y.className="icon",y.innerHTML='<i class="fas fa-question-circle"></i>';const k=document.createElement("div");k.className="header",k.textContent="Sauce Launch Parties";const S=document.createElement("div");S.className="sub-header",S.textContent="Join us on the first Sunday of each month for a new sauce launch!",b.appendChild(y),b.appendChild(k),b.appendChild(S);const w=document.createElement("div");w.className="card";const x=document.createElement("div");x.className="icon",x.innerHTML='<i class="fas fa-music"></i>';const B=document.createElement("div");B.className="header",B.textContent="Music";const I=document.createElement("div");I.className="sub-header",I.textContent="Live Music each Thursday During our Summer of Rock",w.appendChild(x),w.appendChild(B),w.appendChild(I),E.appendChild(v),E.appendChild(T),E.appendChild(b),E.appendChild(w);const P=document.createElement("div");P.id="review-container",P.innerHTML="<h1>See what our Fans are Saying!</h1>";const _=document.createElement("div");_.className="review-grid";const A=document.createElement("div");A.className="reviews";const D=document.createElement("img");D.src="/media/wingSlutz.png",D.setAttribute("alt","Hitchcock and Scully eating wings");const G=document.createElement("div");G.className="feedback",G.innerHTML="It's time to sauce up!",A.appendChild(D),A.appendChild(G),_.appendChild(A);const z=document.createElement("div");z.className="reviews";const J=document.createElement("img");J.src="/media/rockSolid.webp",J.setAttribute("alt","Cops use wing sauce as bullet proof vest");const R=document.createElement("div");R.className="feedback",R.innerHTML="If you don't think the slut sauce is solid, then you might want to talk to my rock-hard arteries.",z.appendChild(J),z.appendChild(R),_.appendChild(z);const W=document.createElement("div");W.className="reviews";const j=document.createElement("img");j.src="/media/youngGuns.webp",j.setAttribute("alt","Young Hitchcock and Scully eating wings");const V=document.createElement("div");V.className="feedback",V.innerHTML="It's perfect for when you need some protein to fuel your hard body.",W.appendChild(j),W.appendChild(V),_.appendChild(W),P.appendChild(_);const Y=document.createElement("footer");Y.innerHTML='<p> This site is a learning project by <a href="https://twitter.com/saul_good_homie">Saul Belisle</a>, view the code on <a href="#">Github</a>.</p>',e.appendChild(t),e.appendChild(o),e.appendChild(E),e.appendChild(P),e.appendChild(Y)},t=()=>{document.getElementById("content").innerHTML=""},n=()=>{t(),e(),d()},c=()=>{t(),(()=>{console.log("I am loading the Menu page");const e=document.getElementById("content"),t=document.createElement("div");t.id="top-nav";const n=document.createElement("ul"),c=document.createElement("li");c.textContent="Home",c.id="home";const a=document.createElement("li");a.textContent="Menu",a.id="menu";const d=document.createElement("li");d.textContent="Contact",d.id="contact",n.appendChild(c),n.appendChild(a),n.appendChild(d),t.appendChild(n);const o=document.createElement("div");o.id="bucket-size",o.innerHTML="<h1>Choose a Size:</h1>";const i=document.createElement("div");i.className="buckets";const s=document.createElement("div");s.className="bucket",s.innerHTML="Large Bucket";const l=document.createElement("div");l.className="bucket",l.innerHTML="Extra Large Bucket",i.appendChild(s),i.appendChild(l),o.appendChild(i);const m=document.createElement("div");m.id="sauce-grid",m.innerHTML="<h1>Choose a Sauce:</h1>";const r=document.createElement("div");r.className="sauceContainer";const p=document.createElement("div");p.className="sauces",p.innerHTML="Slut Sauce";const u=document.createElement("div");u.className="sauces",u.innerHTML="Bingpot BBQ";const h=document.createElement("div");h.className="sauces",h.innerHTML="Toit Teriyaki";const C=document.createElement("div");C.className="sauces",C.innerHTML="Vulture Sauce";const E=document.createElement("div");E.className="sauces",E.innerHTML="Halloween Habenero Heist";const v=document.createElement("div");v.className="sauces",v.innerHTML="Spicy Cheddar";const g=document.createElement("div");g.className="sauces",g.innerHTML="Doug Judy's Voodoo JuJu";const N=document.createElement("div");N.className="sauces",N.innerHTML="CoolCoolCool Ranch";const H=document.createElement("div");H.className="sauces",H.innerHTML="9-9 Degrees";const T=document.createElement("div");T.className="sauces",T.innerHTML="NoiceVille Hot";const L=document.createElement("div");L.className="sauces",L.innerHTML="Pimento Pepper";const M=document.createElement("div");M.className="sauces",M.innerHTML="Dry Rub aka Title of your Sex Tape",r.appendChild(p),r.appendChild(u),r.appendChild(h),r.appendChild(C),r.appendChild(E),r.appendChild(v),r.appendChild(g),r.appendChild(N),r.appendChild(H),r.appendChild(T),r.appendChild(L),r.appendChild(M),m.appendChild(r);const f=document.createElement("div");f.id="sides-grid",f.innerHTML="<h1>Choose Your Sides:</h1>";const b=document.createElement("div");b.className="sauceContainer";const y=document.createElement("div");y.className="sides",y.innerHTML="Fries";const k=document.createElement("div");k.className="sides",k.innerHTML="Gravy";const S=document.createElement("div");S.className="sides",S.innerHTML="Potato Salad";const w=document.createElement("div");w.className="sides",w.innerHTML="Onion Rings",b.appendChild(y),b.appendChild(k),b.appendChild(S),b.appendChild(w),f.appendChild(b);const x=document.createElement("footer");x.innerHTML='<p> This site is a learning project by <a href="https://twitter.com/saul_good_homie">Saul Belisle</a>, view the code on <a href="#">Github</a>.</p>',e.appendChild(t),e.appendChild(o),e.appendChild(m),e.appendChild(f),e.appendChild(x)})(),d()},a=()=>{t(),(()=>{console.log("I am loading the contact page");const e=document.getElementById("content"),t=document.createElement("div");t.id="top-nav";const n=document.createElement("ul"),c=document.createElement("li");c.textContent="Home",c.id="home";const a=document.createElement("li");a.textContent="Menu",a.id="menu";const d=document.createElement("li");d.textContent="Contact",d.id="contact",n.appendChild(c),n.appendChild(a),n.appendChild(d),t.appendChild(n);const o=document.createElement("div");o.id="contact-container";const i=document.createElement("div");i.className="contact",i.innerHTML="Phone: 123-456-7890";const s=document.createElement("div");s.className="contact",s.innerHTML="Address: Main Park, Brooklyn NY, 99th Precinct";const l=document.createElement("img");l.src="/media/brooklyn.png",l.setAttribute("alt","Screenshot of google maps over brooklyn"),o.appendChild(i),o.appendChild(s),o.appendChild(l);const m=document.createElement("footer");m.innerHTML='<p> This site is a learning project by <a href="https://twitter.com/saul_good_homie">Saul Belisle</a>, view the code on <a href="#">Github</a>.</p>',e.appendChild(t),e.appendChild(o),e.appendChild(m)})(),d()},d=()=>{document.getElementById("home").addEventListener("click",n),document.getElementById("menu").addEventListener("click",c),document.getElementById("contact").addEventListener("click",a)};e(),d()})();