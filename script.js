let url = 'https://poloniex.com/public?command=returnCurrencies';
async function getData() {
    let request = await fetch(url);
    let json = await request.json().catch();
      showCurrencies(json);
      
}



getData();



function showCurrencies(json){
    $(function () {
    
        let table = $('#mainTable');
        let str=[];
        for (let k in json) {
            str.push( '<tbody><tr><td scope="row">'
                + json[k].id + '</td><td>'
                + json[k].humanType + '</td><td>'
                + json[k].name + '</td><td>'
                + json[k].currencyType + '</td><td>'
                + json[k].txFee + '</td><td>'
                + json[k].minConf + '</td>'+
                '<td><button id="'+json[k].id+'" type="button" class="btn btn-dark" >Delete</button></td></tr>/tbody>');
                
        }
       
        table.append(str);
        }); 
}

$('button').click(function (id) { 
    console.log('hello');    
});