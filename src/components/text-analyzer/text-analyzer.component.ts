import { Component, OnInit } from '@angular/core';
import { TextProcessorService } from '../../services/text-processor/text-processor.service'
import { AnalysisResult } from '../../models/analysis-result'

@Component({
  selector: 'app-text-analyzer',
  templateUrl: './text-analyzer.component.html',
  styleUrls: ['./text-analyzer.component.css']
})
export class TextAnalyzerComponent implements OnInit {

  constructor(
    private textProcessorService: TextProcessorService
  ) { }

  public inputText: string;
  public analysisResult: AnalysisResult;
  public processingDone: boolean;
  public processing: boolean;

  public clearText() {
    this.inputText = "";
  }

  public processText() {
    this.processingDone = false;
    this.processing = true;

    setTimeout(() => {
      this.analysisResult = this.textProcessorService.processText(this.inputText);
      this.processingDone = true;
      this.processing = false;
    }, 3000);
  }

  fileUpload(event) {
    var reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    reader.onload = (e) => {
      this.inputText = reader.result;
    }
  }

  ngOnInit() {
    this.inputText = "";
    this.processingDone = false;
    this.processing = false;
  }

}
