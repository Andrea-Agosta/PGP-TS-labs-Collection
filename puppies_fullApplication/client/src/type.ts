export interface Puppies {
  id: number,
  breed: string,
  name: string,
  birth: string
}

export interface CardPuppy {
  puppy: Puppies;
  index: number;
}

export interface ModalBody {
  typeBody: string;
}

export interface FormaData {
  name: string,
  breed: string,
  birth: string
}