/*--- Step 1 - Defining global variables ---*/


var coffeeArray = [
    //Coffee 1
    {
        coffeeName: 'AFFOGATO',
        coffeeDescription: 'An affogato (Italian, "drowned") is a coffee-based beverage. It usually takes the form of a scoop of vanilla gelato or ice cream topped with a shot of hot espresso. Some variations also include a shot of Amaretto or other liqueur.',
        coffeeLocation: 'Italy',
        coffeeDetails: "",
        coffeeImage: 'affogato.jpg'

    },

    //Coffee 2
    {
        coffeeName: 'AMERICANO',
        coffeeDescription: 'This drink consists of a single or double-shot of espresso combined with up to four or five ounces of hot water in a two-demitasse cup.',
        coffeeLocation: 'America',
        coffeeDetails: "",
        coffeeImage: 'americano.jpg'

    },

    //Coffee 3
    {
        coffeeName: 'BICERIN',
        coffeeDescription: 'Bicerin is a traditional warm coffee concoction native to Turin, Italy, made of espresso, drinking chocolate and whole milk served layered in a small rounded glass.',
        coffeeLocation: 'Turin, Italy',
        coffeeDetails: "",
        coffeeImage: 'bicerin.jpg'
    },

    //Coffee 4
    {
        coffeeName: 'BREVE',
        coffeeDescription: 'Caffe Breve is an American variation of a latte: a milk-based espresso drink using steamed half-and-half mixture of milk and cream instead of milk.',
        coffeeLocation: 'America',
        coffeeDetails: "",
        coffeeImage: 'caffe_breve.jpg'
    },

    //Coffee 5
    {
        coffeeName: 'CAFÉ AU LAIT',
        coffeeDescription: 'Café au lait is a French/European coffee drink and consists of strong or bold coffee (sometimes espresso) mixed with scalded milk in approximately a 1:1 ratio.',
        coffeeLocation: 'Europe',
        coffeeDetails: "",
        coffeeImage: 'cafeaulait.jpg'
    },

    //Coffee 6
    {
        coffeeName: 'CAFÉ BOMBÓN',
        coffeeDescription: 'A café bombón, uses espresso served with sweetened condensed milk in a 1:1 ratio.',
        coffeeLocation: 'Valencia, Spain',
        coffeeDetails: "",
        coffeeImage: 'cafe_bombon.jpg'
    },

    //Coffee 7
    {
        coffeeName: 'CAFFÉ CORRETTO',
        coffeeDescription: 'Caffè corretto is an Italian beverage that consists of a shot of espresso with a shot of liquor, usually grappa, and sometimes sambuca or brandy.',
        coffeeLocation: 'Italy',
        coffeeDetails: "",
        coffeeImage: 'caffe_corretto_panna.jpg'
    },

    //Coffee 9
    {
        coffeeName: 'CAFÉ CREMA',
        coffeeDescription: 'The term "caffè crema" also refers to a long espresso drink, which consists of a running 180 ml–240 ml (6–8 oz) of water when brewing an espresso, primarily by using a coarser grind.',
        coffeeLocation: 'Switzerland, Austria and Northern Italy',
        coffeeDetails: "",
        coffeeImage: 'caffe_crema.jpg'
    },

    //Coffee 10
    {
        coffeeName: 'CAFÉ MÉLANGE',
        coffeeDescription: 'Café mélange is a black coffee mixed (french "mélange") or covered with whipped cream.',
        coffeeLocation: 'Austria, Switzerland and the Netherlands',
        coffeeDetails: "",
        coffeeImage: 'cafe_melange.jpg'
    },

    //Coffee 11
    {
        coffeeName: 'CA PHE SUA DA',
        coffeeDescription: 'Ca phe sua da is made with finely ground Vietnamese-grown dark roast coffee individually brewed with a small metal French drip filter (cà phê phin) into a cup containing about a quarter to a half as much sweetened condensed milk, stirred and poured over ice.',
        coffeeLocation: 'Vietnam',
        coffeeDetails: "",
        coffeeImage: 'vietnamese_coffee.jpg'
    },

    //Coffee 12
    {
        coffeeName: 'CARAJILLO',
        coffeeDescription: 'Carajillo is a Spanish drink combining coffee with brandy or rum. You can make it with black coffee with the spirit simply poured in or heating the spirit with lemon, sugar and cinnamon then adding the coffee last.',
        coffeeLocation: 'Spain',
        coffeeDetails: "",
        coffeeImage: 'carajillo.jpg'
    },

    //Coffee 13
    {
        coffeeName: 'EISKAFFEE',
        coffeeDescription: 'Eiskaffee is German for ice-cream coffee. It consists of strong, chilled coffee, milk, and ice cream, usually vanilla.',
        coffeeLocation: 'Germany',
        coffeeDetails: "",
        coffeeImage: 'eiskaffee.jpg'
    },

    //Coffee 13
    {
        coffeeName: 'GALAO',
        coffeeDescription: 'Galão is a hot coffee drink from Portugal made of espresso and foamed milk. It comes in a tall glass with about one quarter coffee, three quarters foamed milk.',
        coffeeLocation: 'Portugal',
        coffeeDetails: "",
        coffeeImage: 'domes_sevilha_galao.jpg'
    },

    //Coffee 14
    {
        coffeeName: 'GREEK FRAPPÉ COFFEE',
        coffeeDescription: 'Frappé coffee also known as Greek frappé is a foam-covered iced coffee drink made from instant coffee (generally, spray-dried).',
        coffeeLocation: 'Greece and Cyprus',
        coffeeDetails: "",
        coffeeImage: 'sanfrappe.jpg'
    },

    //Coffee 15
    {
        coffeeName: 'INDIAN FILTER COFFEE',
        coffeeDescription: 'South Indian Coffee, also known as Filter Coffee is a sweet milky coffee made from dark roasted coffee beans (70%-80%) and chicory (20%-30%).',
        coffeeLocation: 'Andhra Pradesh, Karnataka, Kerala and Tamil Nadu',
        coffeeDetails: "",
        coffeeImage: 'indian_filter_coffee.jpg'
    },


    //Coffee 16
    {
        coffeeName: 'IRISH COFFEE',
        coffeeDescription: 'Irish coffee (Irish: Caife Gaelach) is a cocktail consisting of hot coffee, Irish whiskey, and sugar, stirred, and topped with thick cream.',
        coffeeLocation: 'Ireland',
        coffeeDetails: "",
        coffeeImage: 'irish_coffee.jpg'
    },

    //Coffee 17
    {
        coffeeName: 'KOPI TUBRUK',
        coffeeDescription: 'Kopi Tubruk is an Indonesian-style coffee where coarse coffee grounds are boiled along with solid sugar, resulting in a thick drink similar to Turkish coffee. ',
        coffeeLocation: 'Bali and Java',
        coffeeDetails: "",
        coffeeImage: 'kopi_tubruk.jpg'
    },

    //Coffee 18
    {
        coffeeName: 'TURKISH COFFEE',
        coffeeDescription: 'Turkish Coffee prepared by boiling very finely powdered roast coffee beans two or three times in a pot (cezve), possibly with sugar, and serving it into a cup, where the dregs settle. It has a foam on top, similar to the crema on espresso.',
        coffeeLocation: 'Middle East, North Africa, Caucasus, and the Balkans',
        coffeeDetails: "",
        coffeeImage: 'turkishcoffee.jpg'
    },

    //Coffee 19
    {
        coffeeName: 'VIENNA COFFEE',
        coffeeDescription: 'Vienna Coffee is made by preparing two shots of strong black espresso and infusing the coffee with whipped cream until the cup is full. Then the cream is twirled and topped off with chocolate sprinklings. It is drunk through the creamy top.',
        coffeeLocation: 'Vienna',
        coffeeDetails: "",
        coffeeImage: 'vienna.jpg'
    },

    //Coffee 20
    {
        coffeeName: 'YUANYANG',
        coffeeDescription: 'Yuanyang or "coffee with tea" is a popular beverage in Hong Kong, made of a mixture of coffee and Hong Kong-style milk tea.',
        coffeeLocation: 'Hong Kong and Macau',
        coffeeDetails: "",
        coffeeImage: 'yuanyang.jpg'
    },
];


function displayCoffeeTypes(coffeeArray) {
    var buildTheHtmlOutput = "";
    $.each(coffeeArray, function (coffeeArrayKey, coffeeArrayValue) {
        buildTheHtmlOutput += "<li>";
        buildTheHtmlOutput += '<div class="coffee-image" style="background-image: url(images/' + coffeeArrayValue.coffeeImage + ')"></div>';
        buildTheHtmlOutput += '<div class="coffee-name">';
        buildTheHtmlOutput += '<input type="radio" name="radio" class="radio" value="' + coffeeArrayKey + '" />';
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


//STEP 2 using the objects and functions (triggers)

$(document).ready(function () {
    displayCoffeeTypes(coffeeArray);
});
