import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-quize',
  templateUrl: './main-quize.component.html',
  styleUrls: ['./main-quize.component.css']
})
export class MainQuizeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public question: any;
  public answers: any;
  public message: any;
  public buttonStr: string = "התחל";
  public rightCounter: number = 0;
  public enableSelection: boolean = true;
  public enableButton: boolean = true;
  public operation: string = "x";

  public startQuiz() {
    
    this.question = {
      left: this.randomNumber(),
      right: this.randomNumber()
    };
    this.answers = [
      this.question.left * this.question.right,
      this.randomAnswer(),
      this.randomAnswer(),
      this.randomAnswer()
    ];
    this.shuffleAnswers();
    this.message = null;
    this.buttonStr = "הבא";
    this.enableSelection = true;
    this.enableButton = false;
  }

  public checkAnswer(answer: number) {
    if (!this.enableSelection) {
      return;
    }
    
    if (answer === this.getAns()) {
      this.message = '!נכון מאוד';
      this.enableSelection = false;
      this.enableButton = true;
      this.rightCounter++;
    } else {
      this.message = 'טעות';
    }
  }

  private getAns(): number {
    if (this.operation === "x") {
      return this.question.left * this.question.right;
    } else {
      return this.question.left + this.question.right;
    }
  }

  public getColor(index: number) {
    return this.message === 'Correct!' && this.answers[index] === this.getAns() ?
      'green' : 'red';
  }

  public randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  randomAnswer() {
    let toNum = this.operation === "x" ? 100 : 20;
    return Math.floor(Math.random() * toNum) + 1;
  }

  shuffleAnswers() {
    for (let i = this.answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.answers[i], this.answers[j]] = [this.answers[j], this.answers[i]];
    }
  }

}
