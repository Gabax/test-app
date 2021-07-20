import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

type ProgressTrackerType = 'REGULAR' | 'LIGHT';

export interface IPrograssTrackerItem {
  title: string;
  description?: string;
  state: ProgressTrackerState;
}

export enum ProgressTrackerState {
  ACTIVE = 'ACTIVE',
  DONE = 'DONE',
  REST = 'REST',
}

@Component({
  selector: 'app-progress-tracker',
  templateUrl: './progress-tracker.component.html',
  styleUrls: ['./progress-tracker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressTrackerComponent {
  @Input() progressSteps!: IPrograssTrackerItem[];
  @Input() variant: ProgressTrackerType = 'REGULAR';

  progressTrackerStateEnum = ProgressTrackerState;
}
