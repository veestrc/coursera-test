// Event Handling

document.addEventListener("DOMContentLoaded",
    function (event) {
        //Unobtrusive event binding
        document.querySelector("button")
            .addEventListener("click", function () {

                //Call server to get the name
                $ajaxUtils
                    .sendGetRequest("data/name.json",
                        function (res) { // what you're getting as part 
                            // of the response handler is not any longer 
                            // a request, it's actually the response JSON 
                            // text that was converted into an object, i.e. res is a JS obj
                            var message = res.firstName + " " + res.lastName
                                if (res.likesSailing) {
                                    message += " likes Sailing";
                                }
                                else {
                                    message += " does not like Sailing"
                                }
                                message += " and enjoys being ";
                                message += res.age;
                                message += " and wearing " + res.favColor;

                            
                            document.querySelector("#content")
                            .innerHTML = "<h2>" + message + ".</h2>";
                        });


            });
    });
