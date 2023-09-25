import { IBarang } from './i-barang';

export interface IBarangTransaksi extends IBarang {
  stok: number;
  qty: number;
  subtotal: number;
}
