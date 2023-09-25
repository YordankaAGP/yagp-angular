import { IBarang } from './i-barang';

export interface ISupplier<T = IBarang> {
  id: number;
  alamat: string;
  nama: string;
  listBarang: T[];
}
