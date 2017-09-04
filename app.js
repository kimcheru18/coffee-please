/*--- Step 1 - Defining global variables ---*/


var coffeeArray = [
    //Coffee 1
    {
        coffeeName: 'Affogato',
        coffeeDescription: 'An affogato (Italian, "drowned") is a coffee-based beverage. It usually takes the form of a scoop of vanilla gelato or ice cream topped with a shot of hot espresso. Some variations also include a shot of Amaretto or other liqueur.',
        coffeeLocation: 'Italy',
        coffeeDetails: "",
        coffeeImage: 'affogato.jpg'

    },

    //Coffee 2
    {
        coffeeName: 'Americano',
        coffeeDescription: 'This drink consists of a single or double-shot of espresso combined with up to four or five ounces of hot water in a two-demitasse cup.',
        coffeeLocation: 'United States',
        coffeeDetails: "",
        coffeeImage: 'americano.jpg'

    },

    //Coffee 3
    {
        coffeeName: 'Bicerin',
        coffeeDescription: 'Bicerin is a traditional warm coffee concoction native to Turin, Italy, made of espresso, drinking chocolate and whole milk served layered in a small rounded glass.',
        coffeeLocation: 'Turin, Italy',
        coffeeDetails: "",
        coffeeImage: 'bicerin.jpg'
    },

    //Coffee 4
    {
        coffeeName: 'Breve',
        coffeeDescription: 'Caffe Breve is an American variation of a latte: a milk-based espresso drink using steamed half-and-half mixture of milk and cream instead of milk.',
        coffeeLocation: 'United States',
        coffeeDetails: "",
        coffeeImage: 'caffe_breve.jpg'
    },

    //Coffee 5
    {
        coffeeName: 'Café Au Lait',
        coffeeDescription: 'Café au lait is a French/European coffee drink and consists of strong or bold coffee (sometimes espresso) mixed with scalded milk in approximately a 1:1 ratio.',
        coffeeLocation: 'Europe',
        coffeeDetails: "",
        coffeeImage: 'cafeaulait.jpg'
    },

    //Coffee 6
    {
        coffeeName: 'Café Bombón',
        coffeeDescription: 'A café bombón, uses espresso served with sweetened condensed milk in a 1:1 ratio.',
        coffeeLocation: 'Valencia, Spain',
        coffeeDetails: "",
        coffeeImage: 'cafe_bombon.jpg'
    },

    //Coffee 7
    {
        coffeeName: 'Caffè Corretto',
        coffeeDescription: 'Caffè corretto is an Italian beverage that consists of a shot of espresso with a shot of liquor, usually grappa, and sometimes sambuca or brandy.',
        coffeeLocation: 'Italy',
        coffeeDetails: "",
        coffeeImage: 'caffe_corretto_panna.jpg'
    },

    //Coffee 9
    {
        coffeeName: 'Cafè Crema',
        coffeeDescription: 'The term "cafè crema" also refers to a long espresso drink, which consists of a running 180 ml–240 ml (6–8 oz) of water when brewing an espresso, primarily by using a coarser grind.',
        coffeeLocation: 'Switzerland, Austria and Northern Italy',
        coffeeDetails: "",
        coffeeImage: 'caffe_crema.jpg'
    },

    //Coffee 10
    {
        coffeeName: 'Café Mélange',
        coffeeDescription: 'Café mélange is a black coffee mixed (french "mélange") or covered with whipped cream.',
        coffeeLocation: 'Austria, Switzerland and the Netherlands',
        coffeeDetails: "",
        coffeeImage: 'cafe_melange.jpg'
    },

    //Coffee 11
    {
        coffeeName: 'Ca Phe Sua Da',
        coffeeDescription: 'Ca phe sua da is made with finely ground Vietnamese-grown dark roast coffee individually brewed with a small metal French drip filter (cà phê phin) into a cup containing about a quarter to a half as much sweetened condensed milk, stirred and poured over ice.',
        coffeeLocation: 'Vietnam',
        coffeeDetails: "",
        coffeeImage: 'vietnamese_coffee.jpg'
    },

    //Coffee 12
    {
        coffeeName: 'Carajillo',
        coffeeDescription: 'Carajillo is a Spanish drink combining coffee with brandy or rum. You can make it with black coffee with the spirit simply poured in or heating the spirit with lemon, sugar and cinnamon then adding the coffee last.',
        coffeeLocation: 'Spain',
        coffeeDetails: "",
        coffeeImage: 'carajillo.jpg'
    },

    //Coffee 13
    {
        coffeeName: 'Eiskaffee',
        coffeeDescription: 'Eiskaffee is German for ice-cream coffee. It consists of strong, chilled coffee, milk, and ice cream, usually vanilla.',
        coffeeLocation: 'Germany',
        coffeeDetails: "",
        coffeeImage: 'eiskaffee.jpg'
    },

    //Coffee 13
    {
        coffeeName: 'Galão',
        coffeeDescription: 'Galão is a hot coffee drink from Portugal made of espresso and foamed milk. It comes in a tall glass with about one quarter coffee, three quarters foamed milk.',
        coffeeLocation: 'Portugal',
        coffeeDetails: "",
        coffeeImage: 'domes_sevilha_galao.jpg'
    },

    //Coffee 14
    {
        coffeeName: 'Greek Frappé Coffee',
        coffeeDescription: 'Frappé coffee also known as Greek frappé is a foam-covered iced coffee drink made from instant coffee (generally, spray-dried).',
        coffeeLocation: 'Greece and Cyprus',
        coffeeDetails: "",
        coffeeImage: 'sanfrappe.jpg'
    },

    //Coffee 15
    {
        coffeeName: 'Indian Filter Coffee',
        coffeeDescription: 'South Indian Coffee, also known as Filter Coffee is a sweet milky coffee made from dark roasted coffee beans (70%-80%) and chicory (20%-30%).',
        coffeeLocation: 'Andhra Pradesh, Karnataka, Kerala and Tamil Nadu',
        coffeeDetails: "",
        coffeeImage: 'indian_filter_coffee.jpg'
    },


    //Coffee 16
    {
        coffeeName: 'Irish Coffee',
        coffeeDescription: 'Irish coffee (Irish: Caife Gaelach) is a cocktail consisting of hot coffee, Irish whiskey, and sugar, stirred, and topped with thick cream.',
        coffeeLocation: 'Ireland',
        coffeeDetails: "",
        coffeeImage: 'irish_coffee.jpg'
    },

    //Coffee 17
    {
        coffeeName: 'Kopi Tubruk',
        coffeeDescription: 'Kopi Tubruk is an Indonesian-style coffee where coarse coffee grounds are boiled along with solid sugar, resulting in a thick drink similar to Turkish coffee. ',
        coffeeLocation: 'Bali and Java',
        coffeeDetails: "",
        coffeeImage: 'kopi_tubruk.jpg'
    },

    //Coffee 18
    {
        coffeeName: 'Turkish Coffee',
        coffeeDescription: 'Turkish Coffee prepared by boiling very finely powdered roast coffee beans two or three times in a pot (cezve), possibly with sugar, and serving it into a cup, where the dregs settle. It has a foam on top, similar to the crema on espresso.',
        coffeeLocation: 'Middle East, North Africa, Caucasus, and the Balkans',
        coffeeDetails: "",
        coffeeImage: 'turkishcoffee.jpg'
    },

    //Coffee 19
    {
        coffeeName: 'Vienna Coffee',
        coffeeDescription: 'Vienna Coffee is made by preparing two shots of strong black espresso and infusing the coffee with whipped cream until the cup is full. Then the cream is twirled and topped off with chocolate sprinklings. It is drunk through the creamy top.',
        coffeeLocation: 'Vienna',
        coffeeDetails: "",
        coffeeImage: 'vienna.jpg'
    },

    //Coffee 20
    {
        coffeeName: 'Yuanyang',
        coffeeDescription: 'Yuanyang or "coffee with tea" is a popular beverage in Hong Kong, made of a mixture of coffee and Hong Kong-style milk tea.',
        coffeeLocation: 'Hong Kong and Macau',
        coffeeDetails: "",
        coffeeImage: 'yuanyang.jpg'
    },
];

//step 2. dynamically created layout to display coffee and coffee details.

function displayCoffeeTypes(coffeeArray) {
    var buildTheHtmlOutput = "";
    $.each(coffeeArray, function (coffeeArrayKey, coffeeArrayValue) {
        buildTheHtmlOutput += "<li class='slide_open' onclick=updateSlideContent('" + coffeeArrayValue.coffeeName + '-' + coffeeArrayValue.coffeeLocation + "')>";
        buildTheHtmlOutput += '<div class="coffee-image" style="background-image: url(images/' + coffeeArrayValue.coffeeImage + ')"></div>';
        buildTheHtmlOutput += '<div class="coffee-name">';
        buildTheHtmlOutput += coffeeArrayValue.coffeeName;
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '<div class="coffee-description">' + coffeeArrayValue.coffeeDescription + '</div>';
        buildTheHtmlOutput += '<div class="coffee-location">' + coffeeArrayValue.coffeeLocation + '</div>';
        if (coffeeArrayValue.coffeeDetails.length != 0) {
            buildTheHtmlOutput += '<div class="coffee-details">' + coffeeArrayValue.coffeeDetails + '</div>';
        }
        buildTheHtmlOutput += "</li>";
    });
    $("#coffee-selection-wrapper ul").html(buildTheHtmlOutput);
}

//step 3. dynamically created layout to display overlay

function updateSlideContent(coffeeDetails) {
    var oneDetail = coffeeDetails.split("-");

    //display general data
    $("#slide h4").html(oneDetail[0]);
    $("#slide p.google-map").html(oneDetail[1]);

    //display the map data
    var mapOutput = '<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDlI_svxqzPA4F944kcyUEnC6-roh51lfc &q=' + oneDetail[1] + '" allowfullscreen></iframe>';
    $("#slide .google-map-wrapper").html(mapOutput);

    //    display wikipedia data
    //    $("#slide .wiki-wrapper").html(wikiOutput);

    //    display youtube data
    getYoutubeResults(`${oneDetail[0]} coffee`);

}


//used for youtube API call
function getYoutubeResults(makeCoffee) {
    $.getJSON("https://www.googleapis.com/youtube/v3/search", {
            part: "snippet",
            key: "AIzaSyBoG71V0P4gwy5i7TvDPV9JSJAdokte3NI",
            maxResults: 4,
            type: "video",
            q: makeCoffee
        },

        function (receivedApiData) {
            console.log(receivedApiData);
            if (receivedApiData.pageInfo.totalResults == 0) {
                alert("No videos found!");
            } else {
                displayYoutubeResults(receivedApiData.items);
            }
        });
}
//display youtube API results
function displayYoutubeResults(videosArray) {
    var buildTheHtmlOutput = "";

    buildTheHtmlOutput += "<h3 class='bold-word'>How to make it...</h3>";
    $.each(videosArray, function (videosArrayKey, videosArrayValue) {
        buildTheHtmlOutput += "<div class='youtube-item'>";
        buildTheHtmlOutput += "<p>" + videosArrayValue.snippet.title + "</p>";
        buildTheHtmlOutput += "<a href='https://www.youtube.com/watch?v=" + videosArrayValue.id.videoId + "' target='_blank'>";
        buildTheHtmlOutput += "<img src='" + videosArrayValue.snippet.thumbnails.high.url + "'/>";
        buildTheHtmlOutput += "</a>";
        buildTheHtmlOutput += "</div>";
    });
    $("#slide .youtube-wrapper").html(buildTheHtmlOutput);
}

//to make wikipedia API call
//function getWikipediaResults(coffeeHistory) {
//    $
//}

//STEP 2 using the objects and functions (triggers)

$(document).ready(function () {

    $('#slide').popup({
        focusdelay: 400,
        outline: true,
        vertical: 'top'
    });
    displayCoffeeTypes(coffeeArray);
});
