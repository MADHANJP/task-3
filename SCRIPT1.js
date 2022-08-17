var player = [{
    "name"   : "Mani",
    "game" : "cricket",
    "age": "20"
},
{
    "name" : "kalai", 
    "game"   : "tennis",
    "age" : "19"
}];
//for loop
for(var i = 0; i < player.length; i++) 
{
    console.log(player[i].name); 
    console.log(player[i].game);
    console.log(player[i].age);
}
//for Each
player.forEach(function(call) 
{ console.log(call.name); });

//for In
for (var key in player) {
if (player.hasOwnProperty(key)) {
  console.log(player[key].age);
}};
  

//for Of
let text = "";
for (let x of player[key].name) {
 text += x; 
}
 console.log(text);
