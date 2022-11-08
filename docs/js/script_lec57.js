// Event Handling

document.addEventListener("DOMContentLoaded",
    function (event) {
        //Unobtrusive event binding
        document.querySelector("button")
            .addEventListener("click", function () {

                //Call server to get the name
                $ajaxUtils
                    .sendGetRequest("data/name.txt",
                        function (request) {
                            var name = request.responseText;
                            console.log("this is self.name: " + self.name);
                            document.querySelector("#content")
                            .innerHTML = "<h2>Hello " +
                            name + "!";
                        });


            });
    });
