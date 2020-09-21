if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sworker.js").then(registration=>{
        console.log("service worker registered")
        console.log(registration)


    }).catch(err=>{
        console.log("service worker error")
        console.log(err)
    })
}
else{
    alert("serviceworker not available")
}