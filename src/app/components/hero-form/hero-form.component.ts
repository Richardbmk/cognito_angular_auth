import { Component } from '@angular/core';
import { HeroForm } from 'src/app/hero-form';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new HeroForm(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new HeroForm(42, '', '');
  }

  skyDog(): HeroForm {
    const myHero = new HeroForm(
      42,
      'SkyDog',
      'Fetch any object at any distance',
      'Leslie Rollover'
    );
    console.log('My hero is called ' + myHero.name);
    return myHero;
  }

  showFormControls(form: any) {
    return form && form.controls.name && form.controls.name.value;
  }
}
