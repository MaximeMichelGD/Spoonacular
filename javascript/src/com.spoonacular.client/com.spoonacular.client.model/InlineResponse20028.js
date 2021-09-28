/**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over 380,000 recipes, thousands of ingredients, 800,000 food products, and 100,000 menu items. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: mail@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse20028Ingredients from './InlineResponse20028Ingredients';
import InlineResponse20028Nutrition from './InlineResponse20028Nutrition';
import InlineResponse20028Servings from './InlineResponse20028Servings';

/**
 * The InlineResponse20028 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028
 * @version 1.0
 */
class InlineResponse20028 {
    /**
     * Constructs a new <code>InlineResponse20028</code>.
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028
     * @param id {Number} 
     * @param title {String} 
     * @param badges {Array.<String>} 
     * @param importantBadges {Array.<String>} 
     * @param breadcrumbs {Array.<String>} 
     * @param generatedText {String} 
     * @param imageType {String} 
     * @param ingredientList {String} 
     * @param ingredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Ingredients>} 
     * @param likes {Number} 
     * @param nutrition {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Nutrition} 
     * @param price {Number} 
     * @param servings {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Servings} 
     * @param spoonacularScore {Number} 
     */
    constructor(id, title, badges, importantBadges, breadcrumbs, generatedText, imageType, ingredientList, ingredients, likes, nutrition, price, servings, spoonacularScore) { 
        
        InlineResponse20028.initialize(this, id, title, badges, importantBadges, breadcrumbs, generatedText, imageType, ingredientList, ingredients, likes, nutrition, price, servings, spoonacularScore);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, title, badges, importantBadges, breadcrumbs, generatedText, imageType, ingredientList, ingredients, likes, nutrition, price, servings, spoonacularScore) { 
        obj['id'] = id;
        obj['title'] = title;
        obj['badges'] = badges;
        obj['importantBadges'] = importantBadges;
        obj['breadcrumbs'] = breadcrumbs;
        obj['generatedText'] = generatedText;
        obj['imageType'] = imageType;
        obj['ingredientList'] = ingredientList;
        obj['ingredients'] = ingredients;
        obj['likes'] = likes;
        obj['nutrition'] = nutrition;
        obj['price'] = price;
        obj['servings'] = servings;
        obj['spoonacularScore'] = spoonacularScore;
    }

    /**
     * Constructs a <code>InlineResponse20028</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028} The populated <code>InlineResponse20028</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20028();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('badges')) {
                obj['badges'] = ApiClient.convertToType(data['badges'], ['String']);
            }
            if (data.hasOwnProperty('importantBadges')) {
                obj['importantBadges'] = ApiClient.convertToType(data['importantBadges'], ['String']);
            }
            if (data.hasOwnProperty('breadcrumbs')) {
                obj['breadcrumbs'] = ApiClient.convertToType(data['breadcrumbs'], ['String']);
            }
            if (data.hasOwnProperty('generatedText')) {
                obj['generatedText'] = ApiClient.convertToType(data['generatedText'], 'String');
            }
            if (data.hasOwnProperty('imageType')) {
                obj['imageType'] = ApiClient.convertToType(data['imageType'], 'String');
            }
            if (data.hasOwnProperty('ingredientCount')) {
                obj['ingredientCount'] = ApiClient.convertToType(data['ingredientCount'], 'Number');
            }
            if (data.hasOwnProperty('ingredientList')) {
                obj['ingredientList'] = ApiClient.convertToType(data['ingredientList'], 'String');
            }
            if (data.hasOwnProperty('ingredients')) {
                obj['ingredients'] = ApiClient.convertToType(data['ingredients'], [InlineResponse20028Ingredients]);
            }
            if (data.hasOwnProperty('likes')) {
                obj['likes'] = ApiClient.convertToType(data['likes'], 'Number');
            }
            if (data.hasOwnProperty('nutrition')) {
                obj['nutrition'] = InlineResponse20028Nutrition.constructFromObject(data['nutrition']);
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('servings')) {
                obj['servings'] = InlineResponse20028Servings.constructFromObject(data['servings']);
            }
            if (data.hasOwnProperty('spoonacularScore')) {
                obj['spoonacularScore'] = ApiClient.convertToType(data['spoonacularScore'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
InlineResponse20028.prototype['id'] = undefined;

/**
 * @member {String} title
 */
InlineResponse20028.prototype['title'] = undefined;

/**
 * @member {Array.<String>} badges
 */
InlineResponse20028.prototype['badges'] = undefined;

/**
 * @member {Array.<String>} importantBadges
 */
InlineResponse20028.prototype['importantBadges'] = undefined;

/**
 * @member {Array.<String>} breadcrumbs
 */
InlineResponse20028.prototype['breadcrumbs'] = undefined;

/**
 * @member {String} generatedText
 */
InlineResponse20028.prototype['generatedText'] = undefined;

/**
 * @member {String} imageType
 */
InlineResponse20028.prototype['imageType'] = undefined;

/**
 * @member {Number} ingredientCount
 */
InlineResponse20028.prototype['ingredientCount'] = undefined;

/**
 * @member {String} ingredientList
 */
InlineResponse20028.prototype['ingredientList'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Ingredients>} ingredients
 */
InlineResponse20028.prototype['ingredients'] = undefined;

/**
 * @member {Number} likes
 */
InlineResponse20028.prototype['likes'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Nutrition} nutrition
 */
InlineResponse20028.prototype['nutrition'] = undefined;

/**
 * @member {Number} price
 */
InlineResponse20028.prototype['price'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20028Servings} servings
 */
InlineResponse20028.prototype['servings'] = undefined;

/**
 * @member {Number} spoonacularScore
 */
InlineResponse20028.prototype['spoonacularScore'] = undefined;






export default InlineResponse20028;
