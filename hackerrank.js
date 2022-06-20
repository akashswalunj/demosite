const puppeteer =require("puppeteer");
const mail="wanore5707@runqx.com";
const pass="12345678";

async function fn(){
    let browser = await puppeteer.launch({ headless: false, defaultViewport: null,args: ['--start-fullscreen'] });
    const page= await browser.newPage();
    await page.goto("https://www.hackerrank.com/auth/login");
    await page.type("#input-1",mail,{delay:20});
    await page.type("#input-2",pass,{delay:20});
    await page.keyboard.press("Enter");
    
    

}
fn();

