import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientInput') ingredientInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shopplingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAddIngredient() {

    const name = this.ingredientInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.shopplingListService.addIngredient(newIngredient);
  }

}
