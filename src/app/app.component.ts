import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkinAnalysisComponent } from './skin-analysis/skin-analysis.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SkinAnalysisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cureskin';
}
