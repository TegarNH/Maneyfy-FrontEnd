const pengeluaran = `
    <div class="pengeluaran shadow-sm col-12 col-sm-12 col-lg-3 text-center">
      <button type="button" class="btn titleKelola" data-bs-toggle="modal" data-bs-target="#kelolaKategoriPengeluaran">
      Kategori Pengeluaran
      </button>

      <div class="modal fade" id="kelolaKategoriPengeluaran" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">Kelola Kategori Pengeluaran</h4>
              <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div id="list-category-spending"></div>         
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-add add-spending btn-icon-focus" data-bs-toggle="modal" data-bs-target="#tambahKategoriPengeluaran">
                <p>+</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="tambahKategoriPengeluaran" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">Tambah Kategori Pengeluaran</h4>
              <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#kelolaKategoriPengeluaran"></button>
            </div>
            <body-tambah-spending></body-tambah-spending>
            <div class="modal-footer p-3">
              <div class="d-grid w-100 d-md-flex justify-content-md-end">
                <button type="button" id="btnTambahSpending" class="btn btn-primary btn-primary-color px-4">Tambah</button>
              </div>
            </div>     
          </div>
        </div>
      </div>

      <div class="modal fade" id="editKategoriPengeluaran" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">Edit Kategori Pengeluaran</h4>
              <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#kelolaKategoriPengeluaran"></button>
            </div>
            <body-edit-spending></body-edit-spending>      
          </div>
        </div>
      </div>

      <div class="modal fade" id="iconTambahKategoriPengeluaran" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">Pilih Icon Pengeluaran</h4>
              <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#tambahKategoriPengeluaran"></button>
            </div>
            <div class="modal-body row gap-1">
              <div class="grid-icon-list list-icon-spending"></div>   
            </div>
            <div class="modal-footer">
              <div class="d-grid d-md-flex justify-content-md-end">
                <button type="button" class="btn btn-primary btnChooseIconSpending btn-primary-color px-4" data-bs-toggle="modal" data-bs-target="#tambahKategoriPengeluaran">Pilih</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="iconEditKategoriPengeluaran" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">Pilih Icon Pengeluaran</h4>
              <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#editKategoriPengeluaran"></button>
            </div>
            <div class="modal-body row gap-1">
              <div class="grid-icon-list list-icon-spending"></div>   
            </div>
            <div class="modal-footer">
              <div class="d-grid d-md-flex justify-content-md-end">
                <button type="button" class="btn btn-primary btnChooseIconSpending btn-primary-color px-4" data-bs-toggle="modal" data-bs-target="#editKategoriPengeluaran">Pilih</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="hapusKategoriPengeluaran" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">Hapus Kategori Pengeluaran?</h4>
              <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#kelolaKategoriPengeluaran"></button>
            </div>
            <body-delete-spending></body-delete-spending>    
          </div>
        </div>
      </div>
    </div>
`;

export default pengeluaran;
