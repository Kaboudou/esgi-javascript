

function ucfirst(str) {
    if( typeof str == "string") {
        var hello = str;
        console.log(hello.toUpperCase().charAt(0) + hello.substr(1, hello.length));
        return hello.toUpperCase().charAt(0) + hello.substr(1, hello.length);

    }
    else{
            hello = "";
            return hello;
            console.log()
        }
    //console.log(hello.toUpperCase().charAt(0) + hello.substr(1, hello.length));
}
function capitalize(str) {
    if( typeof str == "string") {
    var hello = str;
    var tab = hello.split(" ");
    //var first = hello.toUpperCase().charAt(0) + hello.substr(1,space);
    for(var i in tab){
        tab[i]=tab[i].substr(0,1).toUpperCase()+tab[i].substr(1, tab[i].length).toLowerCase();
    }
    hello = tab.join(" ");
    console.log(hello);
    return hello;
    }
    else{
        hello = "";
        return hello;
    }
    // while(){
    //     var mot = hello.toUpperCase().charAt(space+1) + hello.substr(space+2, hello.length);
    //     var space = hello.substr(space,hello.length).search(" ");
    //     first = first + mot;
    // }
    // console.log(first);

    }
    function camelCase(str){
        if( typeof str == "string") {
            var hello = str;
            var tab = hello.split(" ");
            for (var i in tab) {
                tab[i] = tab[i].substr(0, 1).toUpperCase() + tab[i].substr(1, tab[i].length).toLowerCase();
            }
            hello = tab.join("");
            console.log(hello);
            return hello;

        }
        else{
            hello = "";
            return hello;
        }
    }
    function prop_access(object1, path){
        if(path !== null){
            if (typeof object1 == "object"){
                console.log(object1);
                return object1;
            }
            if (typeof object1 == "array"){
                console.log(object1);
                return object1;
            }
            if (typeof object1 == "string"){
                console.log("dog");
                return object1;
            }
        }

    }


ucfirst("hello world");
capitalize("toggleCase is the coolest");
camelCase("toggleCase is the coolest");
var toto = {"animal":{"type":{"name":"dog"}}};
prop_access("chemin",toto);