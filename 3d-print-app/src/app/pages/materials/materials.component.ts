import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

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
export class MaterialsComponent implements OnInit {
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
  sliceValue: number = 152;

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateSliceValue(window.innerWidth);
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.onResize.bind(this));
    }
  }

  onResize(event: any) {
    this.updateSliceValue(event.target.innerWidth);
  }

  updateSliceValue(width: number) {
    this.sliceValue = width >= 600 ? 315 : 152;
  }

  getSliceValue(): number {
    return this.sliceValue;
  }

  toggleMaterial(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
