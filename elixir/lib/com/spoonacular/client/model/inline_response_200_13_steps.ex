# NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
# https://openapi-generator.tech
# Do not edit the class manually.

defmodule com.spoonacular.client.Model.InlineResponse20013Steps do
  @moduledoc """
  
  """

  @derive [Poison.Encoder]
  defstruct [
    :"number",
    :"step",
    :"ingredients",
    :"equipment"
  ]

  @type t :: %__MODULE__{
    :"number" => float(),
    :"step" => String.t,
    :"ingredients" => [InlineResponse20013Ingredients] | nil,
    :"equipment" => [InlineResponse20013Ingredients] | nil
  }
end

defimpl Poison.Decoder, for: com.spoonacular.client.Model.InlineResponse20013Steps do
  import com.spoonacular.client.Deserializer
  def decode(value, options) do
    value
    |> deserialize(:"ingredients", :list, com.spoonacular.client.Model.InlineResponse20013Ingredients, options)
    |> deserialize(:"equipment", :list, com.spoonacular.client.Model.InlineResponse20013Ingredients, options)
  end
end
