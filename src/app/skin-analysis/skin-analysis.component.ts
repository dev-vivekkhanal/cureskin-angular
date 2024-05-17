import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface PageData {
  id: number;
  heading: string;
  content: string;
  barPercent: number;
}

@Component({
  selector: 'app-skin-analysis',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skin-analysis.component.html',
  styleUrl: './skin-analysis.component.css',
})
export class SkinAnalysisComponent {
  pageData: PageData[] = [
    {
      id: 1,
      heading: 'Sebum Balance',
      content:
        'Sebum is an oily substance produced by the sebaceous glands in the dermis of the skin, and it plays a crucial role in maintaining the health and integrity of the skin.',
      barPercent: 30,
    },
    {
      id: 2,
      heading: 'Inflammation Observed',
      content:
        'Inflammation on the skin signify the presence of an injury, physical trauma, infection, or irritation in that area, which is commonly associated with acne',
      barPercent: 75,
    },
    {
      id: 3,
      heading: 'Sensitivity Range',
      content:
        'Skin condition characterized by heightened reactivity and a low tolerance threshold to various external factors such as burning, itching, dryness etc.',
      barPercent: 45,
    },
    {
      id: 4,
      heading: 'Skin Renewal Rate',
      content:
        'The process of shedding dead skin cells & replacing them with new ones maintains its health, appearance, and functionality through this renewal cycle.',
      barPercent: 20,
    },
    {
      id: 5,
      heading: 'Skin Radiance',
      content:
        'Skin radiance is the natural glow, vitality, and luminosity of skin described by healthy, well-hydrated, and youthful visual appearance.',
      barPercent: 60,
    },
    {
      id: 6,
      heading: 'Skin Damage Rate',
      content:
        'The frequency at which damage occurs to the skin tissues can result from various factors like inflammatory acne.',
      barPercent: 80,
    },
  ];

  getColors(percent: number) {
    if (percent >= 26 && percent <= 65) {
      return {
        barColor: '#EBF1CE',
        pointerColor: '#5FA653',
        arrow: 'assets/greenArrow.svg',
      };
    } else {
      return {
        barColor: '#F9E7D7',
        pointerColor: '#D66736',
        arrow: 'assets/redArrow.svg',
      };
    }
  }
}
