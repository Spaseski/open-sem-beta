import { Injectable } from '@angular/core';
import { AnalysisResult } from '../../models/analysis-result'
import { Sentence } from '../../models/sentence';
import { Word } from '../../models/word';
import { Link } from '../../models/link';
import { LinkType } from '../../models/enums/link-type';
import { PartOfSpeech } from '../../models/enums/part-of-speech';
import { Pointer } from '../../models/pointer';
import { PointerType } from '../../models/enums/pointer-type';

@Injectable({
  providedIn: 'root'
})
export class TextProcessorService {

  public analysisResult: AnalysisResult;

  public processText(inputText):AnalysisResult { 
    this.analysisResult.originalText = inputText;
    this.analysisResult.sentences = new Array<Sentence>();

    var sentence = new Sentence();
    sentence.isPositive = true;
    sentence.content = inputText;

    var word = new Word();
    word.isPositive = true;
    word.content = "frustrated";
    word.partOfSpeech = PartOfSpeech.noun;
    word.links = new Array<Link>();
    var link = new Link();
    link.type = LinkType.dbpedia;
    link.url = "http://dbpedia.org/resource/Republic_of_Macedonia";

    word.relatedWords = new Array<string>();
    word.relatedWords.push("green");
    word.relatedWords.push("Macedonia");

    word.description = "enter or assume a certain state or condition";
    word.examples = new Array<string>();
    word.examples.push("Get going!");
    word.examples.push("It must be getting more serious");
    word.examples.push("She went into ecstasy");

    word.pointers = new Array<Pointer>();
    var pointer = new Pointer();
    pointer.description = "eager to acquire and possess things especially material possessions or ideas";
    pointer.type = PointerType.hypernym;
    pointer.words = new Array<string>();
    var pointerWord = "acquisitive";
    pointer.words.push(pointerWord);

    var pointer2 = new Pointer();
    pointer2.description = "the month following October and preceding December";
    pointer2.type = PointerType.relatedForm;
    pointer2.words = new Array<string>();
    var pointerWord2 = "receive";
    var pointerWord3 = "find";
    var pointerWord4 = "obtain";
    var pointerWord5 = "overcome";
    pointer2.words.push(pointerWord2);
    pointer2.words.push(pointerWord3);
    pointer2.words.push(pointerWord4);
    pointer2.words.push(pointerWord5);

    word.pointers.push(pointer);
    word.pointers.push(pointer2);

    var link1 = new Link();
    link1.type = LinkType.wikidata;
    link1.url = "https://www.wikidata.org/wiki/Q6256";

    word.links.push(link);
    word.links.push(link1);

    var word1 = new Word();
    word1.isPositive = false;
    word1.content = "get";
    word1.partOfSpeech = PartOfSpeech.preposition;

    word1.relatedWords = new Array<string>();
    word1.relatedWords.push("red");
    word1.relatedWords.push("Skopje");

    sentence.words = new Array<Word>();
    sentence.words.push(word);
    sentence.words.push(word1);

    this.analysisResult.sentences.push(sentence);
    this.analysisResult.sentences.push(sentence);
    this.analysisResult.sentences.push(sentence);
    this.analysisResult.sentences.push(sentence);
    this.analysisResult.sentences.push(sentence);
    this.analysisResult.sentences.push(sentence);
    this.analysisResult.sentences.push(sentence);
    this.analysisResult.sentences.push(sentence);
    this.analysisResult.sentences.push(sentence);

    console.log(this.analysisResult);

    return this.analysisResult;
  }

  constructor() {
    this.analysisResult = new AnalysisResult();
  }
}
