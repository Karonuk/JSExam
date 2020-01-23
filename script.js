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
            str.push( '<tbody><tr><td id="id" scope="row">'
                + json[k].id + '</td><td>'
                + k + '</td><td>'
                + json[k].name + '</td><td>'
                + json[k].humanType + '</td><td>'
                + json[k].currencyType + '</td><td>'
                + json[k].txFee + '</td><td>'
                + json[k].minConf + '</td>'+
                '<td><button  type="button" class="btn btn-dark" >Delete</button></td></tr>/tbody>');
                
        }     
       
        table.append(str);

        $("button").click(function (e) {                       
            let tr=$(this).parent().parent();
            tr.text('');
            
            // Delete(json,id);
        });
        }); 
}

// function Delete(json,id){
//     for (k in json){
//         if(json[k].id==id){
//           json.splice(json[k],1);  
//         }
//     }
//     showCurrencies(json);
// }
