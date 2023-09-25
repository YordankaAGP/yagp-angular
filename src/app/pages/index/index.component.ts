import { Component } from '@angular/core';
import { IBarangTransaksi } from 'src/app/interfaces/i-barang-transaksi';
import { ISupplier } from 'src/app/interfaces/i-supplier';
import { ITransaksi } from 'src/app/interfaces/i-transaksi';
import { SupplierService } from 'src/app/services/supplier.service';
import { TransaksiService } from 'src/app/services/transaksi.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  suppliers: Array<ISupplier> = [];
  transaksiList: Array<ITransaksi> = [];
  transaksiForm: ITransaksi;
  selectedBarang: IBarangTransaksi[] = [];

  addButtons: any[] = [
    {
      label: 'Simpan',
      // onButtonClick: () => this.createTransaksi(this.transaksiService),
      onButtonClick: () => {},
      class: 'bg-dark rounded-0 border-0 p-3',
    },
  ];

  // createTransaksi(transaksiService: TransaksiService) {
  //   transaksiService
  //     ?.createTransaksi(this.transaksiForm)
  //     .pipe(catchError(this.handleError))
  //     .subscribe(() => {
  //       this.getKategoriBarang();
  //       this.iKategoriBarang = {
  //         idKategoriBarang: 0,
  //         namaKategoriBarang: '',
  //       };
  //     });
  // }

  ngOnInit(): void {
    this.loadSuppliers();
    this.loadTransaksi();
  }

  constructor(
    private supplierService: SupplierService,
    private transaksiService: TransaksiService
  ) {
    this.transaksiForm = {
      grandTotal: 0,
      tanggal: new Date().toDateString(),
      supplier: [
        {
          id: 0,
          nama: '',
          alamat: '',
          listBarang: [
            {
              deskripsi: '',
              namaBarang: '',
              qty: 0,
              stok: 0,
              subtotal: 0,
              harga: 0,
              id: 0,
            },
          ],
        },
      ],
    };
  }

  loadSuppliers() {
    this.supplierService.getSuppliers().subscribe((data: ISupplier[]) => {
      this.suppliers = data;
    });
  }

  loadTransaksi() {
    this.transaksiService.getTransaksi().subscribe((data) => {
      this.transaksiList = data;
    });
  }

  replaceSupplier(supplier: ISupplier) {
    this.transaksiForm.supplier = [supplier as ISupplier<IBarangTransaksi>];
    console.log(this.transaksiForm, this.suppliers);
  }

  sendTransaksi() {
    this.transaksiService
      .createTransaksi(this.transaksiForm)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
