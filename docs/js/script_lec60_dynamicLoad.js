$(function () {// Same as document.addEventListener("DOMContentLoaded")...
    //Same as document.querySelector("#navbarToggle").addEventListener("blur"
    $("#navbarToggle").blur(function (event){
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapsable-nav").collapse('hide');
        }
    }); 

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

(function (global) {
    var dc = {}; //fake namespace, dc stands for David Chau

    var homeHtml = "snippets/home-snippet.html"; // the url to use in the $ajaxUtils.sendGetRequest func
    var allCategoriesURL = "https://davids-restaurant.herokuapp.com/categories.json";
    var categoriesTitleHtml = "snippets/categories-title-snippet.html";
    var categoryHtml = "snippets/category-snippet.html";
    var menuItemsUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
    var menuItemsTitleHtml = "snippets/menu-items-title.html";
    var menuItemHtml = "snippets/menu-item.html";

    // Convenience function for inserting innerHTML for "select"
    var insertHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
        console.log("Inside insertHtml, this targetElem: " + targetElem.innHTML);
        console.log("Inside insertHtml, this html: " + html);
    };

    //Show loading icon inside element id'd by "selector"
    var showLoading = function(selector) {
        var html = "<div class='text-center'>";
        html += "<img src='images/loading.gif'></div>";
        insertHtml(selector, html);
    };

    //Return substitue of '{{propertyName, i.e. propName}}'
    //with propValue in given 'string' by using the 
    // category-snippet.html as 'string' to replace the short_name
    // and name properties with real values from a responseText
    var insertProperty = function (string, propName, propValue) {
        var propToReplace = "{{" + propName + "}}";
        string = string
            .replace(new RegExp(propToReplace, "g"), propValue);// the "g" is a flag for
            // RexExp() to go ahead and .replace (propToReplace) with propValue every
            // proToReplace if encountered/found. Recall propToReplace = "{{" + propName + "}}"
        return string;
    }
    // On page load (before images or CSS)
    document.addEventListener("DOMContentLoaded", function (event) {

        // On first load, show home view
        showLoading("#main-content"); // executed before the Ajax request is submitted
        $ajaxUtils.sendGetRequest(
            homeHtml, function (responseText) {
                document.querySelector("#main-content")
                    .innerHTML = responseText;
            }, false); // false means don't preprocess Ajax response as JSON
            // b/c the response is just a HTML snippet. Once the response is
            // recieved, your going to select an ele with id=main-content and 
            //set its innerHTML to whatever responseText recieved in the response
         });

         //Load the menu categories view
         dc.loadMenuCategories = function () {
            showLoading("#main-content");
            $ajaxUtils.sendGetRequest( allCategoriesURL, 
                buildAndShowCategoriesHTML);// since 'false" is ommited the default is
                //true thus the response will be an object that is converted
                // from the JSON string. Recall the three JSON syntax rules: 
                // 		1. Property name must be in double quotes
		        //      2. String values must be in double quotes
                //      3. Separate name/value pairs with a colon
                // vs an Object literal where the name does not require double quotes
                // but the 2nd and 3rd rule apply
         };

         //Load the menu items view
         // 'categoryShort' is a short_name for a category
         dc.loadMenuItems = function (categoryShort) { // passed in when
            // user clicked on category-snippet.html loadMenuItems
            console.log("Inside loadMenuItems, this categoryShort: " + categoryShort);
            showLoading("#main-content");
            $ajaxUtils.sendGetRequest( menuItemsUrl + categoryShort,
                buildAndShowMenuItemsHTML);// the buildAnd... function will process the 
                // response as JSON not an Object thus not false at the end of this
                // $ajaxUtils.sendGet... statement
         };

         //Build HTML for the categories page based on the data
         // from the serve
         function buildAndShowCategoriesHTML (categories) {
            //Load title snippet of categories page
            $ajaxUtils.sendGetRequest(
                categoriesTitleHtml, function (categoriesTitleHtml) { // request the category title, i.e. Menu Categories or Lunch Menu
                    //Retrieve single category snippet using category-snippet.html
                    $ajaxUtils.sendGetRequest(categoryHtml, function (categoryHtml) {
                        var categoriesViewHtml = buildCategoriesViewHTML (categories, // an obj retrieved from the loadMenuCategories function
                            categoriesTitleHtml,// a snippet form categories-title-snippet.html
                             categoryHtml /* a snippet from category-snippet.html */);
                        insertHtml("#main-content", categoriesViewHtml);
                    }, false);
                }, false);
         }
         
         //Using categories data and snippets html
         //build categories view HTML to be inserted into page
         function buildCategoriesViewHTML(categories, 
            categoriesTitleHtml, 
            categoryHtml) {
            var finalHtml = categoriesTitleHtml;
            finalHtml += "<section class='row'>";

            //Loop over categories
            for (var i = 0; i < categories.length; i++) {
                //Inser category values
                var html = categoryHtml;
                var name = "" + categories[i].name;
                var short_name = categories[i].short_name;
                html = insertProperty(html, "name", name);
                html = insertProperty(html, "short_name", short_name);
                finalHtml += html;
            }
            finalHtml += "</section>";
            return finalHtml;
         }

         //Build HTML for the single category page based on the data
         // from the server
         function buildAndShowMenuItemsHTML (categoryMenuItems) {
            //Load title snippet of menu items page
            $ajaxUtils.sendGetRequest(
                menuItemsTitleHtml,
                function(menuItemsTitleHtml) {
                    //Retrieve single menu item snippet
                    $ajaxUtils.sendGetRequest( 
                        menuItemHtml, function (menuItemHtml) {
                            var menuItemsViewHtml =
                            buildMenuItemsViewHtml (categoryMenuItems,
                                menuItemsTitleHtml,
                                menuItemHtml);
                            insertHtml("#main-content", menuItemsViewHtml);
                        }, false);
                },false);
         }

         //Using category and menu items data and snippets html
         // build menu items view HTML to be inserted into page
         function buildMenuItemsViewHtml(categoryMenuItems,
            menuItemsTitleHtml,
            menuItemHtml) {
                menuItemsTitleHtml = insertProperty(menuItemsTitleHtml, "name",
                    categoryMenuItems.category.name);
                menuItemsTitleHtml = insertProperty(menuItemsTitleHtml, "special_instructions",
                    categoryMenuItems.category.special_instructions);
                var finalHtml = menuItemsTitleHtml;
                finalHtml += "<section class='row'>";

                //Loop over menu items
                var menuItems = categoryMenuItems.menu_items;
                var catShortName = categoryMenuItems.category.short_name;
                for(var i = 0; i < menuItems.length; i++) {
                    //Insert menu item values
                    var html = menuItemHtml;
                    html = insertProperty(html, "short_name",
                        menuItems[i].short_name);
                    html = insertProperty(html, "catShortName",
                        catShortName);
                    html = insertItemPrice(html, "price_small",
                        menuItems[i].price_small);  
                    html = insertItemPortionName(html, "small_portion_name",
                        menuItems[i].small_portion_name); 
                    html = insertItemPrice(html, "price_large",
                        menuItems[i].price_large);                        
                    html = insertItemPortionName(html, "large_portion_name",
                        menuItems[i].large_portion_name);    
                    html = insertProperty(html, "name",
                        menuItems[i].name);    
                    html = insertProperty(html, "description",
                        menuItems[i].description);   
                        
                    // Add clearfix after every seond menu item to keep grid
                    // from messing up when size of description is too large
                    // or too short
                    if(i % 2 != 0){
                        html += "<div class='clearfix visible-lg-block visible-md-block'></div>"
                    }

                    finalHtml += html;
                }
                finalHtml += "</section>";
                return finalHtml;
            }

            // Append price with '$' if price exists
            function insertItemPrice(html,
                pricePropName,
                priceValue) {
                    //if not specified, replace with empty string
                    if(!priceValue) {
                        return insertProperty(html, pricePropName, "");
                    }
                priceValue = "$" + priceValue.toFixed(2);
                html = insertProperty(html, pricePropName, priceValue);
                return html;
                }

                // Append portion name in perens if it exists
            function insertItemPortionName(html,
                portionPropName,
                portionValue) {
                    //if not specified, return orig string
                    if(!portionValue) {
                        return insertProperty(html, portionPropName, "");
                    }
                portionValue = "(" + portionValue + ")";
                html = insertProperty(html, portionPropName, portionValue);
                return html;
                }
         global.$dc = dc; // this line will allow dc namespace to be exposed in the global space i.e. window obj,  as window.$dc
    })(window);// window obj is equiv to global obj at the start of the function above

