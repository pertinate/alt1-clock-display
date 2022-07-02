//alt1 base libs, provides all the commonly used methods for image matching and capture
//also gives your editor info about the window.alt1 api
import * as a1lib from "@alt1/base";
import { ImgRef, ImgRefBind, ImgRefData } from "@alt1/base";
import ChatBoxReader, * as a1chat from "@alt1/chatbox";

//tell webpack to add index.html and appconfig.json to output
require("!file-loader?name=[name].[ext]!./index.html");
require("!file-loader?name=[name].[ext]!./appconfig.json");

const clock = document.getElementById('clock');

const redraw = () => {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        //@ts-ignore
        fractionalSecondDigits: 3,
        hour12: true,
        timeZone: 'UTC'
    });

    ;
    clock.innerText = `${formatter.format(now)}`;;
};

setInterval(() => {
    redraw();
}, 1);

//check if we are running inside alt1 by checking if the alt1 global exists
if (window.alt1) {
    //tell alt1 about the app
    //this makes alt1 show the add app button when running inside the embedded browser
    //also updates app settings if they are changed
    alt1.identifyAppUrl("./appconfig.json");
}
