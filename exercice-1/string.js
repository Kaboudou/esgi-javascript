

function ucfirst(str) {
    var hello = str;
    console.log(hello.toUpperCase().charAt(0) + hello.substr(1, hello.length));
}
function capitalize(str) {
    var hello = str;
    var tab = hello.split(" ");

    //var first = hello.toUpperCase().charAt(0) + hello.substr(1,space);
    for(var i in tab){
        tab[i]=tab[i].substr(0,1).toUpperCase()+tab[i].substr(1, tab[i].length);
    }
    hello = tab.join(" ");
    console.log(hello);
    // while(){
    //     var mot = hello.toUpperCase().charAt(space+1) + hello.substr(space+2, hello.length);
    //     var space = hello.substr(space,hello.length).search(" ");
    //     first = first + mot;
    // }
    // console.log(first);

    }
    function camelCase(str){
        var hello = str;
        var tab = hello.split(" ");
        var space = hello.search(" ");
        for(var i in tab){
            tab[i]=tab[i].substr(0,1).toUpperCase()+tab[i].substr(1, tab[i].length);
        }
        hello = tab.join("");
        console.log(hello);

    }
    function prop_access(){

    }


ucfirst("hello world");
capitalize("hello world bin");
camelCase("hello world deux");