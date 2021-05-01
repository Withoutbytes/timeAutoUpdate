const axios = require("axios").default;
const htmlParser = require("node-html-parser");
const moment = require("moment");
const DateTimeControl = require("set-system-clock").default;

// (async () => {
// 	const resp = await axios.get("https://www.horariodebrasilia.org/");

// 	const root = htmlParser.parse(resp.data);
// 	const hhmmss = root.querySelector("#relogio").innerText;
// 	const ddmmyy = root.querySelector("#dia-topo").innerText.split(", ")[1];

// 	moment.locale("pt-br");
// 	const now = moment(`${ddmmyy}${hhmmss}`, "LLLL");
// 	now.seconds(moment(hhmmss, "hh:mm:ss").seconds());

// 	// DateTimeControl.setDateTime(now.toDate());
// 	console.log(now.format("LLLL"));
// 	console.log("Horario atualizado!");
// })();

(async () => {
	const resp = await axios.get(
		"https://time.is/t/?pt_br.0.121.35423756.0p.-180.17b.1619914577762.1619879152793.="
	);

	const ms = resp.data.split("\n")[0];
	const now = moment(parseInt(ms));
	DateTimeControl.setDateTime(now.toDate());
	console.log(now.format("LLLL"));
	console.log("Horario atualizado!");
})();
