var emp = [
    { cname: "vivo", price: 12000, pname: "mobile" },
    { cname: "samsung", price: 15000, pname: "mobile" },
    { cname: "apple", price: 13000, pname: "mobile" },
    { cname: "oppo", price: 19000, pname: "mobile" },
    { cname: "nokia", price: 11000, pname: "mobile" },
    { cname: "vivo", price: 12000, pname: "tablet" },
    { cname: "samsung", price: 15000, pname: "tablet" },
    { cname: "apple", price: 13000, pname: "tablet" },
    { cname: "oppo", price: 19000, pname: "tablet" },
    { cname: "nokia", price: 11000, pname: "tablet" },
    { cname: "vivo", price: 12000, pname: "tv" },
    { cname: "samsung", price: 15000, pname: "tv" },
    { cname: "apple", price: 13000, pname: "tv" },
    { cname: "oppo", price: 19000, pname: "tv" },
    { cname: "nokia", price: 11000, pname: "tv" },
  ];
  function fun() 
  {
    let tbl =
      "<table border='1' width = '500'><tr><th>name</th><th>price</th><th>pname</th></tr>";

    var x = document.getElementById("a1").value;
    
     // var vl = this.value;
      var filterdata = emp.filter(function (getvalue) 
      {
        if (getvalue.cname.match(x)) 
        {
          return getvalue;
        }
      });
      filterdata.forEach(function (get) 
      {
        tbl += `<tr><th>${get.cname}</th><th>${get.price}</th><th>${get.pname}</th></tr>`;
      });
      document.getElementById("msg").innerHTML = tbl;
  }