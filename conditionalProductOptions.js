// ikonixs custom storefront

// // Load external script with store
// function loadConfig(ecwidStoreId, callback) {
//     var script = document.createElement("script");
//     script.setAttribute("src", '//example.com/myapp/store'+ecwidStoreId+'.js');
//     script.charset = "utf-8";
//     script.setAttribute("type", "text/javascript");
//     script.onreadystatechange = script.onload = callback;
//     document.body.appendChild(script);
// }

// // Application functionality
// function adjustProductOptions() {
//     // do logic to properly show product options...
// }

// // Get color value for the message and store it in color variable
// var color = Ecwid.getAppPublicConfig(appId);

// // Get Ecwid store ID and start working
// loadConfig(Ecwid.getOwnerId(), adjustProductOptions);

// // When a product page is loaded
//     // display base options

// // When an option changes, recalculate which other options should be shown

// Ecwid.OnProductOptionsChanged.add(function(productid) {
//     window.alert("Options, changed, product id: " + productid);
// })

// Store ID: 62144652
console.log("first hello");

let request = new XMLHttpRequest();
request.open("GET", "https://app.ecwid.com/api/v3/62144652/products")
request.send();
request.onload = () => {
    console.log(request);
    if (request.status == 200) {
        console.log(JSON.parse(request.response));
    } else {
        console.log(`error ${request.status} ${request.statusText}`)
    }
}
console.log("Hello world from github (change)!");