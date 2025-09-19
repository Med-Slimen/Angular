import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  imports: [],
  standalone:true,
  templateUrl: './binding.html',
  styles: ``
})
export class Binding {
  titre : String = "String Interpolation";
  id : String="Property Binding";
}
