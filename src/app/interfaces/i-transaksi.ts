import { IBarangTransaksi } from './i-barang-transaksi';
import { ISupplier } from './i-supplier';

export interface ITransaksi {
  tanggal: string;
  grandTotal: number;
  supplier: ISupplier<IBarangTransaksi>[];
}
