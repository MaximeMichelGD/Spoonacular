# NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
# https://openapi-generator.tech
# Do not edit the class manually.

defmodule com.spoonacular.client.Model.InlineResponse20039 do
  @moduledoc """
  
  """

  @derive [Poison.Encoder]
  defstruct [
    :"templates"
  ]

  @type t :: %__MODULE__{
    :"templates" => [InlineResponse20013Ingredients1]
  }
end

defimpl Poison.Decoder, for: com.spoonacular.client.Model.InlineResponse20039 do
  import com.spoonacular.client.Deserializer
  def decode(value, options) do
    value
    |> deserialize(:"templates", :list, com.spoonacular.client.Model.InlineResponse20013Ingredients1, options)
  end
end
