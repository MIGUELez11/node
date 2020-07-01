const express = require("express");
const p = require("puppeteer");
const server = express();

const port = process.env.PORT || 80

server.get("/", async (req, res) => {
    try {
        const browser = await p.launch(
            {
                headless: true,
                //args: ['--no-sandbox']
            }
        );
        const page = await browser.newPage();
        await page.goto("https://google.com");
        page.content().then(async(data) => {
            await page.screenshot({path: "sc.png"});
            res.send(data);
            await browser.close()
        }).catch(e => console.log(e))
    } catch(e) {
        res.send(e);
    }

    //res.send("Hola" + process.env.NAME);
})

server.listen(port);