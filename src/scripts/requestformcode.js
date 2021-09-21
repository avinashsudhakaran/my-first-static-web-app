window.onload = (event) => {
    
    //returns the status of ajax request to calling function
    
    if(/[?&]id=/.test(location.search)){
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        var id = url.searchParams.get("id");
        var key = url.searchParams.get("key");
        console.log(id +  "      " + key);
    }else{
        console.log("query not found");
    }
}