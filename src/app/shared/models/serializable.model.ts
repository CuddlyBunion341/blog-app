/**
 * Interface for serializing and deserializing data from API
 */
export interface Serializable {
  /**
   * Deserialize data from API
   * @param input Input data
   */
  deserialize(input: any): this;

  /**
   * Serialize data to API
   * @returns Serialized data
   */
  serialize(): any;
}
