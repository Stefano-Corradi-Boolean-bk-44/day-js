// init Day js


// per estendere i plugin la sintassi è
//dayjs.extend(window.dayjs_plugin_NOME_PLUGIN);
dayjs.extend(window.dayjs_plugin_customParseFormat);
dayjs.extend(window.dayjs_plugin_relativeTime);

//locale
dayjs.locale('it');



const clock = document.getElementById('clock');
const output = document.getElementById('output');
const output2 = document.getElementById('output2');
const output4 = document.getElementById('output4');
const output5 = document.getElementById('output5');

setInterval(()=>{
  clock.innerHTML = dayjs().format("HH:mm:ss");
},1000)


/**
 *  dayjs()  -> oggi
 *  dayjs('YYYY-MM-DD') -> altra data
 * 
 */


output.innerHTML = dayjs('1945-04-25').format("DD/MM/YYYY HH:mm:ss");
output2.innerHTML = dayjs().format("dddd DD MMMM YYYY");
output3.innerHTML = dayjs('1945-04-25').add(7,'month').format("dddd DD MMMM YYYY");
output4.innerHTML = dayjs('1945-04-25').fromNow();

const date1 = dayjs('1945-04-25');
const date2 = dayjs('2001-09-11');

output5.innerHTML =  date2.diff(date1,'year');