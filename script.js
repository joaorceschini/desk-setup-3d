const images = [
	"https://i.pinimg.com/originals/d4/e1/5a/d4e15a97effa49a8dce93655df87a52d.gif",
	"https://i.pinimg.com/originals/81/c1/c6/81c1c651a313db06e94f866b956b18e7.gif",
	"https://i.pinimg.com/originals/2c/74/bb/2c74bb163971c2e93d170f8ca0a60e68.gif",
	"https://i.pinimg.com/originals/6f/2e/06/6f2e06776761b7d1995b3bb356c7dadb.gif",
	"https://i.pinimg.com/originals/e5/ec/7b/e5ec7bc7f14fc91f1bc9204cd237af48.gif",
	"https://i.pinimg.com/originals/78/7b/75/787b759d8f8b2a4b0ae293cf51a901d4.gif",
  "https://c.tenor.com/gaEpIfzxzPEAAAAC/pedro-monkey-puppet.gif",
  "https://thumbs.gfycat.com/BitesizedMeekAnura-max-1mb.gif",
  "https://i.pinimg.com/originals/25/42/49/254249654b4d5ecc0f8b8bed5c413187.gif"
];

let current = 0;
let element = document.querySelector("#monitor-content");
element.addEventListener("click", e => {
  element.style.backgroundImage = `url(${images[++current % images.length]})`
})