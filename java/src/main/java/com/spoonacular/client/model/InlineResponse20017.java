/*
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


package com.spoonacular.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * InlineResponse20017
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-09-28T20:40:32.759+02:00[Europe/Berlin]")
public class InlineResponse20017 {
  public static final String SERIALIZED_NAME_CUISINE = "cuisine";
  @SerializedName(SERIALIZED_NAME_CUISINE)
  private String cuisine;

  public static final String SERIALIZED_NAME_CUISINES = "cuisines";
  @SerializedName(SERIALIZED_NAME_CUISINES)
  private List<String> cuisines = new ArrayList<>();

  public static final String SERIALIZED_NAME_CONFIDENCE = "confidence";
  @SerializedName(SERIALIZED_NAME_CONFIDENCE)
  private BigDecimal confidence;

  public InlineResponse20017 cuisine(String cuisine) {
    this.cuisine = cuisine;
    return this;
  }

   /**
   * Get cuisine
   * @return cuisine
  **/
  @ApiModelProperty(required = true, value = "")
  public String getCuisine() {
    return cuisine;
  }

  public void setCuisine(String cuisine) {
    this.cuisine = cuisine;
  }

  public InlineResponse20017 cuisines(List<String> cuisines) {
    this.cuisines = cuisines;
    return this;
  }

  public InlineResponse20017 addCuisinesItem(String cuisinesItem) {
    this.cuisines.add(cuisinesItem);
    return this;
  }

   /**
   * Get cuisines
   * @return cuisines
  **/
  @ApiModelProperty(required = true, value = "")
  public List<String> getCuisines() {
    return cuisines;
  }

  public void setCuisines(List<String> cuisines) {
    this.cuisines = cuisines;
  }

  public InlineResponse20017 confidence(BigDecimal confidence) {
    this.confidence = confidence;
    return this;
  }

   /**
   * Get confidence
   * @return confidence
  **/
  @ApiModelProperty(required = true, value = "")
  public BigDecimal getConfidence() {
    return confidence;
  }

  public void setConfidence(BigDecimal confidence) {
    this.confidence = confidence;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse20017 inlineResponse20017 = (InlineResponse20017) o;
    return Objects.equals(this.cuisine, inlineResponse20017.cuisine) &&
        Objects.equals(this.cuisines, inlineResponse20017.cuisines) &&
        Objects.equals(this.confidence, inlineResponse20017.confidence);
  }

  @Override
  public int hashCode() {
    return Objects.hash(cuisine, cuisines, confidence);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse20017 {\n");
    sb.append("    cuisine: ").append(toIndentedString(cuisine)).append("\n");
    sb.append("    cuisines: ").append(toIndentedString(cuisines)).append("\n");
    sb.append("    confidence: ").append(toIndentedString(confidence)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
