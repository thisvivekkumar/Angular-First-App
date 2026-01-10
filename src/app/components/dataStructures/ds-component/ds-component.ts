import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ds-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ds-component.html',
  styleUrl: './ds-component.scss',
})
export class DsComponent {
  title = 'Data Structures Problems';
  example1 = 'Q.1: Check if a number is palindrome';
  example2 = 'Q.2: Check if a string is palindrome';
  inputNumber: number = 0;
  inputText: string = '';
  isNumberPalindrome: boolean = false;
  isTextPalindrome: boolean = false;

  onInputText(): boolean {
    const cleaned = this.inputText.toString();
    const reversed = cleaned.split('').reverse().join('');
    this.isTextPalindrome = cleaned === reversed;
    return this.isTextPalindrome;
  }

  onInputNumber(): boolean {
    this.isNumberPalindrome =false
    let givenNumber: number = Number(this.inputNumber);
    let originnumber: number = Number(this.inputNumber);
    let reversex: number = 0;
    let lastdigit: number = 0;
    if (givenNumber < 0) {
      this.isNumberPalindrome = false;
      return this.isNumberPalindrome;
    }
    while (givenNumber > 0) {
      lastdigit = givenNumber % 10;
      reversex *= 10;
      reversex += lastdigit;
      let xwithoutlastdigit = Math.floor(givenNumber / 10);
      givenNumber = xwithoutlastdigit;
    }
    if (originnumber  === reversex) {
      this.isNumberPalindrome = true;
      return this.isNumberPalindrome;
    }
    return this.isNumberPalindrome;
  }
}
