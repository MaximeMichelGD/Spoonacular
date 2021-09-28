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
 */


#include "OAIInline_response_200_37_nutrients.h"

#include "OAIHelpers.h"

#include <QJsonDocument>
#include <QJsonArray>
#include <QObject>
#include <QDebug>

namespace OpenAPI {

OAIInline_response_200_37_nutrients::OAIInline_response_200_37_nutrients(QString json) {
    this->init();
    this->fromJson(json);
}

OAIInline_response_200_37_nutrients::OAIInline_response_200_37_nutrients() {
    this->init();
}

OAIInline_response_200_37_nutrients::~OAIInline_response_200_37_nutrients() {

}

void
OAIInline_response_200_37_nutrients::init() {
    
    m_calories_isSet = false;
    m_calories_isValid = false;
    
    m_carbohydrates_isSet = false;
    m_carbohydrates_isValid = false;
    
    m_fat_isSet = false;
    m_fat_isValid = false;
    
    m_protein_isSet = false;
    m_protein_isValid = false;
    }

void
OAIInline_response_200_37_nutrients::fromJson(QString jsonString) {
    QByteArray array (jsonString.toStdString().c_str());
    QJsonDocument doc = QJsonDocument::fromJson(array);
    QJsonObject jsonObject = doc.object();
    this->fromJsonObject(jsonObject);
}

void
OAIInline_response_200_37_nutrients::fromJsonObject(QJsonObject json) {
    
    m_calories_isValid = ::OpenAPI::fromJsonValue(calories, json[QString("calories")]);
    
    
    m_carbohydrates_isValid = ::OpenAPI::fromJsonValue(carbohydrates, json[QString("carbohydrates")]);
    
    
    m_fat_isValid = ::OpenAPI::fromJsonValue(fat, json[QString("fat")]);
    
    
    m_protein_isValid = ::OpenAPI::fromJsonValue(protein, json[QString("protein")]);
    
    
}

QString
OAIInline_response_200_37_nutrients::asJson () const {
    QJsonObject obj = this->asJsonObject();
    QJsonDocument doc(obj);
    QByteArray bytes = doc.toJson();
    return QString(bytes);
}

QJsonObject
OAIInline_response_200_37_nutrients::asJsonObject() const {
    QJsonObject obj;
	if(calories.isSet()){
        obj.insert(QString("calories"), ::OpenAPI::toJsonValue(calories));
    }
	if(carbohydrates.isSet()){
        obj.insert(QString("carbohydrates"), ::OpenAPI::toJsonValue(carbohydrates));
    }
	if(fat.isSet()){
        obj.insert(QString("fat"), ::OpenAPI::toJsonValue(fat));
    }
	if(protein.isSet()){
        obj.insert(QString("protein"), ::OpenAPI::toJsonValue(protein));
    }
    return obj;
}


OAINumber
OAIInline_response_200_37_nutrients::getCalories() const {
    return calories;
}
void
OAIInline_response_200_37_nutrients::setCalories(const OAINumber &calories) {
    this->calories = calories;
    this->m_calories_isSet = true;
}


OAINumber
OAIInline_response_200_37_nutrients::getCarbohydrates() const {
    return carbohydrates;
}
void
OAIInline_response_200_37_nutrients::setCarbohydrates(const OAINumber &carbohydrates) {
    this->carbohydrates = carbohydrates;
    this->m_carbohydrates_isSet = true;
}


OAINumber
OAIInline_response_200_37_nutrients::getFat() const {
    return fat;
}
void
OAIInline_response_200_37_nutrients::setFat(const OAINumber &fat) {
    this->fat = fat;
    this->m_fat_isSet = true;
}


OAINumber
OAIInline_response_200_37_nutrients::getProtein() const {
    return protein;
}
void
OAIInline_response_200_37_nutrients::setProtein(const OAINumber &protein) {
    this->protein = protein;
    this->m_protein_isSet = true;
}

bool
OAIInline_response_200_37_nutrients::isSet() const {
    bool isObjectUpdated = false;
    do{ 
        if(calories.isSet()){ isObjectUpdated = true; break;}
    
        if(carbohydrates.isSet()){ isObjectUpdated = true; break;}
    
        if(fat.isSet()){ isObjectUpdated = true; break;}
    
        if(protein.isSet()){ isObjectUpdated = true; break;}
    }while(false);
    return isObjectUpdated;
}

bool
OAIInline_response_200_37_nutrients::isValid() const {
    // only required properties are required for the object to be considered valid
    return m_calories_isValid && m_carbohydrates_isValid && m_fat_isValid && m_protein_isValid && true;
}

}
