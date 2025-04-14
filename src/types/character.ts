export type Characteristics = {
  strength: number
  constitution: number
  power: number
  dexterity: number
  appearance: number
  size: number
  intelligence: number
  education: number
}

export type Stats = {
  hp: number
  mp: number
  sanity: number
  luck: number
  speed: number
  damageBonus: number
  build: number
}

export type SpecializationSkill = {
  name: string
  value: number
}

export type Skills = {
  accounting: number
  anthropology: number
  appraise: number
  archaeology: number
  artAndCraft: SpecializationSkill[]
  charm: number
  climb: number
  creditRating: number
  cthulhuMythos: number
  disguise: number
  dodge: number
  driveAuto: number
  electricalRepair: number
  fastTalk: number
  fighting: SpecializationSkill[]
  firearms: SpecializationSkill[]
  firstAid: number
  history: number
  intimidate: number
  jump: number
  languageOther: SpecializationSkill[]
  languageOwn: number
  law: number
  libraryUse: number
  listen: number
  locksmith: number
  mechanicalRepair: number
  medicine: number
  naturalWorld: number
  navigate: number
  occult: number
  operateHeavyMachinery: number
  persuade: number
  pilot: SpecializationSkill[]
  psychoanalysis: number
  psychology: number
  ride: number
  science: SpecializationSkill[]
  sleightOfHand: number
  spotHidden: number
  stealth: number
  survival: SpecializationSkill[]
  swim: number
  throw: number
  track: number
}

export type Sex = 'male' | 'female' | 'unknown'

export type Character = {
  name: string
  residence: string
  birthplace: string
  age: number
  sex: Sex
  characteristics: Characteristics
  stats: Stats
  skills: Skills
}