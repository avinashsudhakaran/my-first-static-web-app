window.onload = (event) => {
    
    //returns the status of ajax request to calling function
    var id = getUrlParameter('id');
    var requestID = getUrlParameter('key');
    if(/[?&]id=/.test(location.search)){
        console.log(id + "      " + key);
    }else{
        console.log("query not found");
    }
}