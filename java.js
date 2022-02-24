var obj = [
    {cname : 'Apple', price :12000, pname :'mobile'},
    {cname : 'Samsung', price :10000, pname :'mobile'},
    {cname : 'MI', price :14000, pname :'mobile'},
    {cname : 'Realmi', price :15000, pname :'mobile'},
    {cname : 'Nokia', price :13000, pname :'mobile'},
    {cname : 'Oppo', price :11000, pname :'mobile'},
    {cname : 'Vivo', price :15000, pname :'mobile'},
    {cname : 'Apple', price :9000, pname :'TV'},
    {cname : 'Samsung', price :11000, pname :'TV'},
    {cname : 'MI', price :9500, pname :'TV'},
    {cname : 'Realmi', price :15000, pname :'TV'},
    {cname : 'Nokia', price :11000, pname :'TV'},
    {cname : 'Oppo', price :16000, pname :'TV'},
    {cname : 'Vivo', price :11000, pname :'TV'},
    {cname : 'Apple', price :12000, pname :'Tablet'},
    {cname : 'Samsung', price :13000, pname :'Tablet'},
    {cname : 'MI', price :20000, pname :'Tablet'},
    {cname : 'Realmi', price :9000, pname :'Tablet'},
    {cname : 'Nokia', price :12000, pname :'Tablet'},
    {cname : 'Oppo', price :11500, pname :'Laptop'},
    {cname : 'Vivo', price :15000, pname :'Laptop'},
    {cname : 'Apple', price :18000, pname :'Laptop'},
    {cname : 'Samsung', price :17000, pname :'Laptop'},
    {cname : 'MI', price :12000, pname :'Laptop'},
    {cname : 'Realmi', price :14000, pname :'Laptop'},
    {cname : 'Nokia', price :13000, pname :'Laptop'},
    {cname : 'Oppo', price :11000, pname :'TV'},
    {cname : 'Vivo', price :12000, pname :'Mobile'},
    {cname : 'Apple', price :12000, pname :'mobile'},
    {cname : 'Samsung', price :10000, pname :'mobile'},
    {cname : 'MI', price :14000, pname :'mobile'},
    {cname : 'Realmi', price :15000, pname :'mobile'},
    {cname : 'Nokia', price :13000, pname :'mobile'},
    {cname : 'Oppo', price :11000, pname :'mobile'},
    {cname : 'Vivo', price :15000, pname :'mobile'},
    {cname : 'Apple', price :9000, pname :'TV'},
    {cname : 'Samsung', price :11000, pname :'TV'},
    {cname : 'MI', price :9500, pname :'TV'},
    {cname : 'Realmi', price :15000, pname :'TV'},
    {cname : 'Nokia', price :11000, pname :'TV'},
    {cname : 'Oppo', price :16000, pname :'TV'},
    {cname : 'Vivo', price :11000, pname :'TV'},
    {cname : 'Apple', price :12000, pname :'Tablet'},
    {cname : 'Samsung', price :13000, pname :'Tablet'},
    {cname : 'MI', price :20000, pname :'Tablet'},
    {cname : 'Realmi', price :9000, pname :'Tablet'},
    {cname : 'Nokia', price :12000, pname :'Tablet'},
    {cname : 'Oppo', price :11500, pname :'Laptop'},
    {cname : 'Vivo', price :15000, pname :'Laptop'},
    {cname : 'Apple', price :18000, pname :'Laptop'},
    {cname : 'Samsung', price :17000, pname :'Laptop'},
    {cname : 'MI', price :12000, pname :'Laptop'},
    {cname : 'Realmi', price :14000, pname :'Laptop'},
    {cname : 'Nokia', price :13000, pname :'Laptop'},
    {cname : 'Oppo', price :11000, pname :'TV'},
    {cname : 'Vivo', price :12000, pname :'Mobile'},
    {cname : 'Apple', price :12000, pname :'mobile'},
    {cname : 'Samsung', price :10000, pname :'mobile'},
    {cname : 'MI', price :14000, pname :'mobile'},
    {cname : 'Realmi', price :15000, pname :'mobile'},
    {cname : 'Nokia', price :13000, pname :'mobile'},
    {cname : 'Oppo', price :11000, pname :'mobile'},
    {cname : 'Vivo', price :15000, pname :'mobile'},
    {cname : 'Apple', price :9000, pname :'TV'},
    {cname : 'Samsung', price :11000, pname :'TV'},
    {cname : 'MI', price :9500, pname :'TV'},
    {cname : 'Realmi', price :15000, pname :'TV'},
    {cname : 'Nokia', price :11000, pname :'TV'},
    {cname : 'Oppo', price :16000, pname :'TV'},
    {cname : 'Vivo', price :11000, pname :'TV'},
    {cname : 'Apple', price :12000, pname :'Tablet'},
    {cname : 'Samsung', price :13000, pname :'Tablet'},
    {cname : 'MI', price :20000, pname :'Tablet'},
    {cname : 'Realmi', price :9000, pname :'Tablet'},
    {cname : 'Nokia', price :12000, pname :'Tablet'},
    {cname : 'Oppo', price :11500, pname :'Laptop'},
    {cname : 'Vivo', price :15000, pname :'Laptop'},
    {cname : 'Apple', price :18000, pname :'Laptop'},
    {cname : 'Samsung', price :17000, pname :'Laptop'},
    {cname : 'MI', price :12000, pname :'Laptop'},
    {cname : 'Realmi', price :14000, pname :'Laptop'},
    {cname : 'Nokia', price :13000, pname :'Laptop'},
    {cname : 'Oppo', price :11000, pname :'TV'},
    {cname : 'Vivo', price :12000, pname :'Mobile'}
]
function showdata(){
    let tbl =  "<table border='1' width='500'><tr><th>Name</th><th>Price</th><th>Product name</th></tr>"
    var x=document.getElementById('search').value;
    var filterdata= obj.filter(function(mydata){
        return (mydata.cname == x);
    })

    filterdata.forEach(function(getvalue){
        tbl += `<tr> <th> ${getvalue.cname} </th> <th> ${getvalue.price} </th> <th> ${getvalue.pname} </th> </tr>`
    })

    document.getElementById('msg').innerHTML= tbl
}

function low(){

                

}
function high(){

                

}