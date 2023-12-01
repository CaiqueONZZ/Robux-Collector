//Made By CaiqueONZ - Pastebin
doc = window.prompt("Robux Amount (Choose)")
function gvRbx() {
    for (let i = 0; i < 100; i++) {
        console.log(`Getting robux.. ${i}%`)
    }
}
 
async function infocheck() {
    await gvRbx()
    console.log("[INFO] Done!")
}
 
infocheck()
 
el = document.getElementById('nav-robux-amount')
 
el.innerText = `${doc}`;
 
window.alert("Check your balance!");
 
 
 
//Paste on console
