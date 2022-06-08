// const data = new Promise((resolve, reject) => {
// fetch('https://www.reddit.com/r/pics.json')
//     .then(respond => {
//         resolve(respond.json())
//     }).catch(err => {
//         reject(err)
//  })
// })
// console.log(data);
// let data2 = JSON.stringify(data)
// let MyData = JSON.parse(data2);
// ----receive function----v
function get_json(url, callback) {
    http.get(url, function(res) {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function() {
            var response = JSON.parse(body);
// call function ----v
            callback(response);
        });
    });
}

         // -----------the url---v         ------------the callback---v
fetch('https://www.reddit.com/r/pics.json')
    .then(result => result.json())
    .then((output) => {
        console.log('Output: ', output);
        
        let len=0;
        len = output["data"]["children"].length;
        let i=0;
        
        for(i=0;i<len;i++)
        {
            // const node = document.getElementById("0");
            // const clone = node.cloneNode(true);
            // document.getElementById('posts').appendChild(clone);
            // document.getElementById('posts').lastChild.id = i;
           
            document.getElementById(i).src =output["data"]["children"][i]["data"]["url_overridden_by_dest"];
            
            
            document.getElementById(i).src =  output["data"]["children"][i]["data"]["url"];
            
            
            document.getElementsByClassName("username")[i].innerHTML =output["data"]["children"][i]["data"]["author"];
            document.getElementsByClassName("description")[i].innerHTML =output["data"]["children"][i]["data"]["title"];
            document.getElementsByClassName("likes")[i].innerHTML= output["data"]["children"][i]["data"]["ups"]+" upvotes";

        
            // document.getElementById("0").src =  output["data"]["children"]["0"]["data"]["url"];
         }
        
        
}).catch(err => console.error(err));
// data[]

