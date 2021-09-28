=begin comment

spoonacular API

The spoonacular Nutrition, Recipe, and Food API allows you to access over 380,000 recipes, thousands of ingredients, 800,000 food products, and 100,000 menu items. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.

The version of the OpenAPI document: 1.0
Contact: mail@spoonacular.com
Generated by: https://openapi-generator.tech

=end comment

=cut

#
# NOTE: This class is auto generated by OpenAPI Generator
# Please update the test cases below to test the API endpoints.
# Ref: https://openapi-generator.tech
#
use Test::More tests => 1; #TODO update number of test cases
use Test::Exception;

use lib 'lib';
use strict;
use warnings;

use_ok('WWW::OpenAPIClient::WineApi');

my $api = WWW::OpenAPIClient::WineApi->new();
isa_ok($api, 'WWW::OpenAPIClient::WineApi');

#
# get_dish_pairing_for_wine test
#
{
    my $wine = undef; # replace NULL with a proper value
    my $result = $api->get_dish_pairing_for_wine(wine => $wine);
}

#
# get_wine_description test
#
{
    my $wine = undef; # replace NULL with a proper value
    my $result = $api->get_wine_description(wine => $wine);
}

#
# get_wine_pairing test
#
{
    my $food = undef; # replace NULL with a proper value
    my $max_price = undef; # replace NULL with a proper value
    my $result = $api->get_wine_pairing(food => $food, max_price => $max_price);
}

#
# get_wine_recommendation test
#
{
    my $wine = undef; # replace NULL with a proper value
    my $max_price = undef; # replace NULL with a proper value
    my $min_rating = undef; # replace NULL with a proper value
    my $number = undef; # replace NULL with a proper value
    my $result = $api->get_wine_recommendation(wine => $wine, max_price => $max_price, min_rating => $min_rating, number => $number);
}


1;