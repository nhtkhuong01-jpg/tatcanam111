let currentPage=0;
const pages=document.querySelectorAll(".page");
function showPage(index){currentPage=(index+pages.length)%pages.length;pages.forEach((p,i)=>p.classList.toggle("active",i===currentPage));document.getElementById("pageNumber").textContent=`${currentPage+1} / ${pages.length}`}
function nextPage(){showPage(currentPage+1)}
function prevPage(){showPage(currentPage-1)}
function restart(){showPage(0)}
function saveWish(){const name=document.getElementById("receiver").value.trim();const wish=document.getElementById("wish").value.trim();document.getElementById("finalTitle").textContent=name?`Gửi ${name} thân mến!`:"Gửi bạn ngàn yêu thương!";document.getElementById("finalWish").textContent=wish||"Chúc bạn một ngày 20/10 thật rực rỡ!";alert("Đã cập nhật lời chúc 💗")}

const music=document.getElementById("bgMusic"), musicButton=document.getElementById("musicButton"), musicStatus=document.getElementById("musicStatus");
function updateMusicButton(){musicButton.textContent=music.paused?"♫ Bật nhạc":"♫ Tắt nhạc";musicStatus.textContent=music.paused?"♪ Nếu nhạc chưa phát, chạm vào trang":"♪ Đang phát nhạc nền"}
function tryAutoplay(){music.play().then(updateMusicButton).catch(updateMusicButton)}
function toggleMusic(){if(music.paused){music.play().then(updateMusicButton).catch(()=>{musicStatus.textContent="Kiểm tra file music/nhac.mp3 nhé"})}else{music.pause();updateMusicButton()}}
document.addEventListener("pointerdown",function startMusicOnce(){if(music.paused)music.play().then(updateMusicButton).catch(()=>{});document.removeEventListener("pointerdown",startMusicOnce)},{once:true});
window.addEventListener("load",tryAutoplay);

const emojis=["💗","💖","💜","💙","💛","💚","❤️","🤍"];
function createHeart(){const h=document.createElement("span");h.className="floating-heart";h.textContent=emojis[Math.floor(Math.random()*emojis.length)];h.style.left=Math.random()*100+"%";h.style.fontSize=(14+Math.random()*25)+"px";const d=5+Math.random()*6;h.style.animationDuration=d+"s";document.getElementById("floatingHearts").appendChild(h);setTimeout(()=>h.remove(),d*1000)}
setInterval(createHeart,320);

const canvas=document.getElementById("stars"),ctx=canvas.getContext("2d");let stars=[];
function resizeStars(){const dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.floor(innerWidth*dpr);canvas.height=Math.floor(innerHeight*dpr);canvas.style.width=innerWidth+"px";canvas.style.height=innerHeight+"px";ctx.setTransform(dpr,0,0,dpr,0,0);stars=Array.from({length:Math.min(180,Math.floor(innerWidth/5))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.5+.25,a:Math.random()*6,speed:Math.random()*.012+.003}))}
function drawStars(){ctx.clearRect(0,0,innerWidth,innerHeight);for(const s of stars){s.a+=s.speed;const alpha=.35+(Math.sin(s.a)+1)*.3;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle=`rgba(255,235,255,${alpha})`;ctx.shadowBlur=s.r>1.2?8:0;ctx.shadowColor="#e9a8ff";ctx.fill()}requestAnimationFrame(drawStars)}
window.addEventListener("resize",resizeStars);resizeStars();drawStars();showPage(0);
function openCard() {
  const welcome = document.getElementById("welcome-screen");
  welcome.style.transition = "opacity 0.8s";
  welcome.style.opacity = "0";

  setTimeout(() => {
    welcome.style.display = "none";
  }, 800);
}