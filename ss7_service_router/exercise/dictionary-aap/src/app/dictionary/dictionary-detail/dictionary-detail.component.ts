import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DictionaryService} from "../../service/dictionary.service";
import {Word} from "../../model/word";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  // @ts-ignore
  word: Word;

  constructor(private activatedRoute: ActivatedRoute,
              private dictionaryService: DictionaryService) {
    this.activatedRoute.paramMap.subscribe(date => {
      const chacracter = date.get("word");
      if (chacracter != null) {
        // @ts-ignore
        this.word = this.dictionaryService.findByWord(chacracter);
      }
    }, error => {

    }, () => {

    })
  }

  ngOnInit(): void {
  }

}
