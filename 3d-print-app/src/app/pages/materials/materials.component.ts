import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materials',
  standalone: true,
  imports: [
    FooterComponent,
    TranslateModule,
    CommonModule
  ],
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.scss'
})
export class MaterialsComponent {
  materials = [
    {
      title: 'PLA',
      content: 'materials_p-2',
      showFullText: false
    },
    {
      title: 'PETG',
      content: 'materials_p-3',
      showFullText: false
    },
    {
      title: 'ASA',
      content: 'materials_p-4',
      showFullText: false
    },
    {
      title: 'ABS',
      content: 'materials_p-5',
      showFullText: false
    },
    {
      title: 'TPU',
      content: 'materials_p-6',
      showFullText: false
    }
  ];

  expandedIndex: number | null = null;

  toggleMaterial(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
