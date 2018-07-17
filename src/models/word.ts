import { Link } from "./link";
import { PartOfSpeech } from "./enums/part-of-speech";
import { Pointer } from "./pointer";

export class Word {
    isPositive: boolean;
    content: string;
    links: Array<Link>;
    partOfSpeech: PartOfSpeech;
    description: string;
    relatedWords: Array<string>; 
    examples: Array<string>;
    pointers: Array<Pointer>;
}