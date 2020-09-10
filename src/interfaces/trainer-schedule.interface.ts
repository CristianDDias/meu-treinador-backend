type Weekday = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export interface TrainerSchedule {
  weekday: Weekday;
  startTime: string;
  endTime: string;
}
