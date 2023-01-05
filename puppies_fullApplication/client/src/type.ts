export interface Puppies {
  id: number,
  breed: string,
  name: string,
  birth: string
}

export interface PuppiesList {
  puppies: Puppies[];
}