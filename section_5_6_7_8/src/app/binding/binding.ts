import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './binding.html',
  styles: [],
})
export class Binding {
  titre : String = "String Interpolation";
  test : String="Two way binding"
  dis : boolean=false;
  changeText(){
    this.titre="changed text";
  }
}
