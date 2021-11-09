//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
function findWords(s, namesList){
    s = s.toLowerCase();
    for (let name_ of namesList){
        if (s.includes(name_.toLowerCase())){
            console.log(`Matched ${name_}`);
        }
        else{
            console.log("No Matches");
        };
    };
};
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

findWords(dog_string, dog_names);

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */


function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr[i] = "even index"
            console.log(arr[i])
        }else{
            console.log(arr[i])
        }
    }
};

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];
replaceEvens(arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]