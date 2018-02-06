import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientInput') ingredientInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() ingredientCreated = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddIngredient() {
    this.ingredientCreated.emit({
      name: this.ingredientInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value
    });
  }
}
