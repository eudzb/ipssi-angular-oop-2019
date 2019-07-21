import { Musicien } from './musicien';

export interface Group {
  id: number;
  name: string;
  musicien: Musicien[];
}
