# NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
# https://openapi-generator.tech
# Do not edit the class manually.

defmodule com.spoonacular.client.Model.RecipesParseIngredientsEstimatedCost do
  @moduledoc """
  
  """

  @derive [Poison.Encoder]
  defstruct [
    :"value",
    :"unit"
  ]

  @type t :: %__MODULE__{
    :"value" => float(),
    :"unit" => String.t
  }
end

defimpl Poison.Decoder, for: com.spoonacular.client.Model.RecipesParseIngredientsEstimatedCost do
  def decode(value, _options) do
    value
  end
end
