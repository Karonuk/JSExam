let url = 'https://poloniex.com/public?command=returnCurrencies';
async function getData() {
    let request = await fetch(url);
    let json = await request.json().catch();
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
                '<td><button type="button" class="btn btn-dark" onclick="Delete()">Delete</button></td></tr>/tbody>');
        }
        table.append(str);
    });
    return json;
}

getData();
