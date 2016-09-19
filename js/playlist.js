var allProducts = getAllProducts();

var conferenceType = {

    cpp: [
        allProducts.appcode,
        allProducts.clion,
        allProducts.resharperCpp,
        allProducts.general
    ],

    dotnet: [
        allProducts.resharper,
        allProducts.resharperCpp,
        allProducts.dottrace,
        allProducts.dotcover,
        allProducts.dotmemory,
        allProducts.dotpeek
    ],

    java: [
        allProducts.general,
        allProducts.intellijIdea,
        allProducts.general,
        allProducts.teamcity,
        allProducts.general,
        allProducts.upsource,
        allProducts.general,
        allProducts.youtrack,
        allProducts.general,
        allProducts.webstorm
    ]
};

// to switch on a playlist for a specific conference type,
// assign it to the currentPlaylist variable, i.e.:
// var currentPlaylist = conferenceType.dotnet;
var currentPlaylist = conferenceType.java;
