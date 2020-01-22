let url='https://poloniex.com/public?command=returnCurrencies';
async function getData(){
    let request=await fetch(url);
    let json=await request.json().catch();
    console.log(json);
    return json;
    
    }


let data=getData();

$(function () {
    let t = $('#mainTable');
    let counter = 1;   
    let str='<tbody><tr><td scope="row">'+data.id+'</td><td>'+data.name+'</td><td>'+data.humanType+'</td><td>'+data.currencyType+'</td><td>0.'+data.txFee+'</td><td>'+data.minConf+'</td></tr>/tbody>';
    t.append(str);
});



