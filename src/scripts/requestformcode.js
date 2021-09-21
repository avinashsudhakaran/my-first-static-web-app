window.onload = (event) => {
    
    //returns the status of ajax request to calling function
    
    if(/[?&]id=/.test(location.search)){
        var id = getUrlParameter('id');
        var requestID = getUrlParameter('key');
        console.log(id + "      " + requestID);
    }else{
        console.log("query not found");
    }
}