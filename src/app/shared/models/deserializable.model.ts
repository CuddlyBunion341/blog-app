/**
 * Interface for deserializing data from API
 */
export interface Deserializable {
  /**
   * Deserialize data from API
   * @param input Input data
   */
  deserialize(input: any): this;
}
