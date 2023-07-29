<template>
  <q-card-section class=" text-h4">A. Pelaksanaan Pendidikan </q-card-section>
  <div class="q-pa-md dosen">

    <div class="row">
      <div class="col-md-1 col-xs-12, text-h6 text-center">No</div>
      <div class="col-md-5 col-xs-12, text-h6 text-center">Kegiatan</div>
      <div class="col-md-2 col-xs-12, text-h6 text-center">Bukti Kegiatan.</div>
      <div class="col-md-2 col-xs-12, text-h6 text-center">Batas Maksimal</div>
      <div class="col-md-1 col-xs-12, text-h6 text-center">SKS</div>
      <div class="col-md-1 col-xs-12, text-h6 text-center">Lampiran</div>

      <div class="col-md-1 col-xs-12, text-center">1</div>
      <div class="col-md-5 col-xs-12">Melaksanakan perkuliahan (tutorial,tatap muka,dan/ atau daring) dan membimbing, menguji serta menyelenggarakan pendidikan di laboratorium/ praktikkeguruan/ bengkel/ studio/ kebun percobaan/ teknologi pengajaran dan praktek lapangan (tatap muka dan/ atau daring)(Maksimal 12 SKS)
      </div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12"></div>
      <div class="col-md-1 col-xs-12"></div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12, text-bold">1. Asisten Ahli untuk :</div>
      <div class="col-md-2 col-xs-12"> Pindah SK penugasan Asli dan bukti kinerja</div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12"></div>
      <div class="col-md-1 col-xs-12"></div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12">a. Beban mengajar 10 SKS pertama </div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-2 col-xs-12">10/Semester</div>
      <div class="col-md-1 col-xs-12, text-center">1</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12">b. Beban mengajar 2 SKS berikutnya </div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-2 col-xs-12">2/Semester</div>
      <div class="col-md-1 col-xs-12, text-center">1</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12, text-bold">2. Lektor/Lektor kepala/Profesor untuk :</div>
      <div class="col-md-2 col-xs-12">Pindah SK penugasan Asli dan bukti kinerja</div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12"></div>
      <div class="col-md-1 col-xs-12"></div>

      <div class="col-md-1 col-xs-12, text-center">2</div>
      <div class="col-md-5 col-xs-12">Membimbing seminar mahasiswa (setiap semester) </div>
      <div class="col-md-2 col-xs-12">Pindah SK penugasan Asli dan bukti kinerja</div>
      <div class="col-md-2 col-xs-12">Tidak dibatasi</div>
      <div class="col-md-1 col-xs-12, text-center">1</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

      <div class="col-md-1 col-xs-12, text-center">3</div>
      <div class="col-md-5 col-xs-12">Membimbing KKN,praktik kerja nyata, praktik kerja lapangan : termasuk didalamnya membimbing pelatihan militer mahasiswa, pertukaran pelajar, magang, kuliah berbasis penelitihan, wirausaha dan bentk lain pengabdian mahasiswa. </div>
      <div class="col-md-2 col-xs-12">Pindah SK penugasan Asli dan bukti kinerja</div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12, text-center">2</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

      <div class="col-md-1 col-xs-12, text-center">4</div>
      <div class="col-md-5 col-xs-12">Membimbing dan ikut membimbing dalam menghasilkan disertai, tesis, skripsi dan laporan akhir studi yang sesuai dengan bidang tugasnya</div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12, text-bold">1. Pembimbing utama per orang (setiap mahasiswa) :</div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12">a. disertasi</div>
      <div class="col-md-2 col-xs-12">Pindai lembar pengesahan dan bukti kinerja</div>
      <div class="col-md-2 col-xs-12">10 lulusan/ Semester</div>
      <div class="col-md-1 col-xs-12, text-center">1,33</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12">b. Tesis</div>
      <div class="col-md-2 col-xs-12">Pindai lembar pengesahan dan bukti kinerja</div>
      <div class="col-md-2 col-xs-12">10 lulusan/ Semester</div>
      <div class="col-md-1 col-xs-12, text-center">1</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12">c. Skripsi</div>
      <div class="col-md-2 col-xs-12">Pindai lembar pengesahan dan bukti kinerja</div>
      <div class="col-md-2 col-xs-12">10 lulusan/ Semester</div>
      <div class="col-md-1 col-xs-12, text-center">0,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12">d. Laporan / tugas akhir studi</div>
      <div class="col-md-2 col-xs-12">Pindai lembar pengesahan dan bukti kinerja</div>
      <div class="col-md-2 col-xs-12">10 lulusan/ Semester</div>
      <div class="col-md-1 col-xs-12, text-center">0,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12, text-bold">2. Pembimbing pendamping / pembantu per orang (setiap mahasiswa) :</div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12">a. Disertasi</div>
      <div class="col-md-2 col-xs-12">Pindai lembar pengesahan dan bukti kinerja</div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12, text-center">1</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12">b. Tesis</div>
      <div class="col-md-2 col-xs-12">Pindai lembar pengesahan dan bukti kinerja</div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12, text-center">0,75</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12">c. Skripsi</div>
      <div class="col-md-2 col-xs-12">Pindai lembar pengesahan dan bukti kinerja</div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12, text-center">0,25</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12">d. Laporan / tugas akhir studi</div>
      <div class="col-md-2 col-xs-12">Pindai lembar pengesahan dan bukti kinerja</div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12, text-center">0,25</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </div>

        <div class="col-md-1 col-xs-12, text-center">5</div>
      <div class="col-md-5 col-xs-12">Bertugas sebagai penguji pada ujian akhir / profesi** (setiap mahasiswa) </div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12, text-bold">1. Ketua penguji</div>
      <div class="col-md-2 col-xs-12">Pindai SK penugasan dan bukti kinerja dan undangan</div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12, text-center">0,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12, text-bold">2. Anggota penguji</div>
      <div class="col-md-2 col-xs-12">Pindai SK penugasan dan bukti kinerja</div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12, text-center">0,25</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </div>

      <div class="col-md-1 col-xs-12, text-center">6</div>
      <div class="col-md-5 col-xs-12">Melakukan pembinaan kegiatan mahasiswa dibidang akademik (PA) dan kemahasiswaan (BEM, Memperwa, dan lain-lain)</div>
      <div class="col-md-2 col-xs-12">Pindai SK penugasan dan bukti kinerja (SKS/Kinerja)</div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12, text-center">2</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12">Membimbing mahasiswa menghasilkan produk saintifik bereputasi dan mendapat pengakuan tingkat</div>
      <div class="col-md-2 col-xs-12">Output produk dan bukti pengakuan per SKS (SKS Maksimal)</div>
      <div class="col-md-2 col-xs-12">Internasional</div>
      <div class="col-md-1 col-xs-12, text-center">10</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12">Membimbing mahasiswa menghasilkan produk saintifik bereputasi dan mendapat pengakuan tingkat</div>
      <div class="col-md-2 col-xs-12">Output produk dan bukti pengakuan per SKS (SKS Maksimal)</div>
      <div class="col-md-2 col-xs-12">Nasional</div>
      <div class="col-md-1 col-xs-12, text-center">5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12">membimbing mahasiswa mengikuti kompetensi dibidang akademik dan kemahasiswaan bereputasi dan mencapai juara tingkat</div>
      <div class="col-md-2 col-xs-12">Piagam, mendali/ piala kejuaraan/ kompetensi (SKS Maksimal)</div>
      <div class="col-md-2 col-xs-12">Internasional</div>
      <div class="col-md-1 col-xs-12, text-center">10</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12">membimbing mahasiswa mengikuti kompetensi dibidang akademik dan kemahasiswaan bereputasi dan mencapai juara tingkat</div>
      <div class="col-md-2 col-xs-12">Piagam, mendali/ piala kejuaraan/ kompetensi (SKS Maksimal)</div>
      <div class="col-md-2 col-xs-12">Nasional</div>
      <div class="col-md-1 col-xs-12, text-center">5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </div>

      <div class="col-md-1 col-xs-12, text-center">7.</div>
      <div class="col-md-5 col-xs-12">Mengembangkan bahan kuliah</div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12, text-bold">1. Buku ajar (cetak/ elektronik)</div>
      <div class="col-md-2 col-xs-12">file produk (SKS / produk)</div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12, text-center">5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12, text-bold">2. mengembangkan bahan pengajaran / modul bahan kuliah yang mempunyai nilai kebaharuan/ manual/ pedoman/ akademik/ pedoman pemagangan/ pedoman pembelajaran/ dalam bentuk case study/ problem base learning/ projek based learning</div>
      <div class="col-md-2 col-xs-12">file produk (SKS / produk)</div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12, text-center">5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12, text-bold">3. mengembangkan bahan pengajaran / modul bahan kuliah yang mempunyai nilai kebaharuan/ manual/ pedoman/ akademik/ pedoman pembelajaran</div>
      <div class="col-md-2 col-xs-12">file produk (SKS / produk)</div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12, text-center">2</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </div>

      <div class="col-md-1 col-xs-12, text-center">8.</div>
      <div class="col-md-5 col-xs-12, text-bold">menduduki jabatan perguruan tinggi (nama jabatan dapat menyesuiakan dengan stuktur OTK masing masing dan ditetapkan PT (setiap semester)</div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-2 col-xs-12"></div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12, text-bold">1. Rektor</div>
      <div class="col-md-2 col-xs-12">Pindai SK jabatan</div>
      <div class="col-md-2 col-xs-12">1 jabtan / semester</div>
      <div class="col-md-1 col-xs-12, text-center">6</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12, text-bold">2. Kepala LL Dikti/Direktur Politeknik/Wakil Rektor/Dekan/Derektur Pascasarjana/ketua senat fakultas</div>
      <div class="col-md-2 col-xs-12">Pindai SK jabatan</div>
      <div class="col-md-2 col-xs-12">1 jabtan / semester</div>
      <div class="col-md-1 col-xs-12, text-center">5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12, text-bold">3. Ketua Sekolah Tinggi/Ketua Lembaga/Wakil Dekan/ Wakil Derektur Pascasarjana/ketua senat fakultas</div>
      <div class="col-md-2 col-xs-12">Pindai SK jabatan</div>
      <div class="col-md-2 col-xs-12">1 jabtan / semester</div>
      <div class="col-md-1 col-xs-12, text-center">4</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12, text-bold">4. Wakil ketua sekolah tinggi/ Wakil direktur politeknik/direktur Akademi</div>
      <div class="col-md-2 col-xs-12">Pindai SK jabatan</div>
      <div class="col-md-2 col-xs-12">1 jabtan / semester</div>
      <div class="col-md-1 col-xs-12, text-center">4</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12, text-bold">5. Wakil direktur akademi/ Seketaris lembaga/ ketua jurusan/Departemen/bagian/prodi </div>
      <div class="col-md-2 col-xs-12">Pindai SK jabatan</div>
      <div class="col-md-2 col-xs-12">1 jabtan / semester</div>
      <div class="col-md-1 col-xs-12, text-center">3</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-5 col-xs-12, text-bold">6. Kepala Laboratorium/ Seketaris Jurusan/Departemen/bagian </div>
      <div class="col-md-2 col-xs-12">Pindai SK jabatan</div>
      <div class="col-md-2 col-xs-12">1 jabtan / semester</div>
      <div class="col-md-1 col-xs-12, text-center">3</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

      <div class="col-md-1 col-xs-12, text-center">9.</div>
      <div class="col-md-5 col-xs-12">pendampingan, pembimbingan, mentoring mahasiswa secara terstuktur menghasilkan diantaranya : karya inovatif, karya teknologi yang bermanfaat bagi kesejateraan masyarakat dan industri; proyek kewirausahaan; starup/usaha rintisan; magang industri; bina esa inovatif dan kegiatan yang diakui/ ditugaskan kemendikbud dan dilaksanakan secara penuh waktu oleh dosen diluar institusi </div>
      <div class="col-md-2 col-xs-12">Pindai keputusan dirjen, surat tugas rektor/ direktur/laporan</div>
      <div class="col-md-2 col-xs-12">setiap semester (bagi dosen Lektor ke atas)</div>
      <div class="col-md-1 col-xs-12, text-center">12</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

      <div class="col-md-1 col-xs-12, text-center">9.</div>
      <div class="col-md-5 col-xs-12">pendampingan, pembimbingan, mentoring mahasiswa secara terstuktur menghasilkan diantaranya : karya inovatif, karya teknologi yang bermanfaat bagi kesejateraan masyarakat dan industri; proyek kewirausahaan; starup/usaha rintisan; magang industri; bina esa inovatif dan kegiatan yang diakui/ ditugaskan kemendikbud dan dilaksanakan secara penuh waktu oleh dosen diluar institusi </div>
      <div class="col-md-2 col-xs-12">Pindai keputusan dirjen, surat tugas rektor/ direktur/laporan</div>
      <div class="col-md-2 col-xs-12">setiap semester (bagi Dosen Asisten Ahli)</div>
      <div class="col-md-1 col-xs-12, text-center">5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

    </div>
  </div>

  <q-card-section class=" text-h4">B. Pelaksanaan Penelitian </q-card-section>
  <div class="q-pa-md dosen">

    <div class="row">
      <div class="col-md-1 col-xs-12, text-h6 text-center">No</div>
      <div class="col-md-9 col-xs-12, text-h6 text-center">Kegiatan</div>
      <div class="col-md-1 col-xs-12, text-h6 text-center">SKS</div>
      <div class="col-md-1 col-xs-12, text-h6 text-center">Lampiran</div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center">1</div>
      <div class="col-md-9 col-xs-12">menghasilkan karya ilmia sesuai dengan bidang Ilmunya</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">a. Hasil penelitihan atau hasil pemikiran yang dipublikasi dalam bentuk buku</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1. Buku Referensi</div>
      <div class="col-md-1 col-xs-12, text-center">10</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">2. Monograf</div>
      <div class="col-md-1 col-xs-12, text-center">5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12">b. Hasil penelitihan atau hasil pemikiran dalam buku yang dipublikasi dan berisi berbagai tulisan dari berbagai penuis (book chapter)</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1. Internasional</div>
      <div class="col-md-1 col-xs-12, text-center">3,75</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
      </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1. Nasional</div>
      <div class="col-md-1 col-xs-12, text-center">2,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">c. Jurnal Ilmia</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1. Artikel pada jurnal Internasional Bereputasi</div>
      <div class="col-md-1 col-xs-12, text-center">10</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">2. Artikel pada jurnal Internasional terindeks pada basis data Internasional</div>
      <div class="col-md-1 col-xs-12, text-center">7,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">3. Artikel pada jurnal Nasional Terakreditasi</div>
      <div class="col-md-1 col-xs-12, text-center">6,25</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">4. Artikel pada jurnal Nasional</div>
      <div class="col-md-1 col-xs-12, text-center">2,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">5. jurnal Ilmia yang ditulis dalam bahasa resmin PBB namun tidak memenuhu syarat - syarat sebagai jurnal ilmia internasional</div>
      <div class="col-md-1 col-xs-12, text-center">2,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center">2</div>
      <div class="col-md-9 col-xs-12 ">hasil penelitihan atau hasil pemikiran yang didesiminasikan</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1. Dipresentasikan secara oral dan dimuat dalam proseding yang diduplikasikan (ber ISSN/ISBN)</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">a. Internasional Terindeks pada scimagojr dan scopus</div>
      <div class="col-md-1 col-xs-12, text-center">7,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">b. Internasional Terindeks Scopus, IEEE Explor, SPIE</div>
      <div class="col-md-1 col-xs-12, text-center">6,25</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">c. Internasional</div>
      <div class="col-md-1 col-xs-12, text-center">3,75</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">d. Nasional</div>
      <div class="col-md-1 col-xs-12, text-center">2,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">2. Disajikan dalam bentuk poster dan dimuat dalam prosiding yang dipublikasi :</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">a. Internasional</div>
      <div class="col-md-1 col-xs-12, text-center">2,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">b. Nasional</div>
      <div class="col-md-1 col-xs-12, text-center">1,25</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">3. Disajikan dalam seminar/simposiun/lokakarya, tetapi tidak dimuat dalam prosiding yang dipublikasikan:</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">a. Internasional</div>
      <div class="col-md-1 col-xs-12, text-center">1,25</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">b. Nasional</div>
      <div class="col-md-1 col-xs-12, text-center">0,75</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">4. Hasil penelitian/pemikiran yang tidak disajikan dalam seminar/simposiun/lokakarya, tetapi dimuat dalam prosiding:</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">a. Internasional</div>
      <div class="col-md-1 col-xs-12, text-center">2,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">b. Nasional</div>
      <div class="col-md-1 col-xs-12, text-center">1,25</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">5. Hasil penelitian atau pemikiran atau kerjasama industri termasuk penelitian penugasan dari kementrian atau LPNK yang tidak dipublikasi (tersimpan dalam perpustakaan) yang dilakukan secara melembaga</div>
      <div class="col-md-1 col-xs-12, text-center">2</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">6. mengedit/menyunting karya ilmiah dalam bentuk buku yang diterbitkan (ber ISBN)</div>
      <div class="col-md-1 col-xs-12, text-center">2,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">7. Membuat rancangan dan karya teknologi yang dipatenkan atau seni yang terdaftar di HKI</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>
    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1. Internasional/Nasional</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">a. Diterapkan pada perusahaan multinasional/BUMN/Nasional</div>
      <div class="col-md-1 col-xs-12, text-center">20</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">b. Diterapkan pada perusahaan lainnya</div>
      <div class="col-md-1 col-xs-12, text-center">10</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">c. Digunakan pada UMKM/masyarakat UMKM</div>
      <div class="col-md-1 col-xs-12, text-center">10</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">d. Digunakan pada UMKM/masyarakat Desa</div>
      <div class="col-md-1 col-xs-12, text-center">10</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">2. Menghasilkan Paten bersertifikat Internasional/Nasional yang belum diterapkan</div>
      <div class="col-md-1 col-xs-12, text-center">10</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">8. Karya inovatif/karya teknologi tepat guna/karya desain/karya senitidak dipatenkan/tidak terdaftar HKI/tidak dipublikasikan, tetapi diaplikasikan pada industri/berdampak pada kesejahteraan masyarakat dan berkontribusi pada peningkatan daya saing bangsa</div>
      <div class="col-md-1 col-xs-12, text-center">10</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">9. Rumusan kebijakan yang monumental dalam bentuk arahan/kertas kebijakan (policy brief/policy paper), naskah akademik, model kebijakan strategis atau rekomendasi kebijakan yang berkontribusi terhadap pengembangan kebijakan dan pembangunan</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">a. Tingkat Internasional</div>
      <div class="col-md-1 col-xs-12, text-center">5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">b. Tingkat Nasional</div>
      <div class="col-md-1 col-xs-12, text-center">3,75</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">c. Tingkat Lokal</div>
      <div class="col-md-1 col-xs-12, text-center">2,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>

    </div>
    </div>

  <q-card-section class=" text-h4">C. Pelaksanaan Pengabdian Kepada Masyarakat </q-card-section>
  <div class="q-pa-md dosen">

    <div class="row">
      <div class="col-md-1 col-xs-12, text-h6 text-center">No</div>
      <div class="col-md-9 col-xs-12, text-h6 text-center">Kegiatan</div>
      <div class="col-md-1 col-xs-12, text-h6 text-center">SKS</div>
      <div class="col-md-1 col-xs-12, text-h6 text-center">Lampiran</div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1. Melaksanakan pengembangan hasil pendidikan dan penelitian</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">a. Dimanfaatkan oleh Masyarakat Internasional/industri/Perusahaan Internasional atau Perusahaan Multinasional </div>
      <div class="col-md-1 col-xs-12, text-center">10</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">b. Dimanfaatkan oleh Masyarakat Nasional/industri/Perusahaan Nasional/BUMN</div>
      <div class="col-md-1 col-xs-12, text-center">7,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">c. Dimanfaatkan oleh Masyarakat Provinsi/industri/Perusahaan Daerah/BUMD/UMKM</div>
      <div class="col-md-1 col-xs-12, text-center">5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">d. Dimanfaatkan oleh Masyarakat Terbatas/Pada industri atau Perusahaa Tertentu</div>
      <div class="col-md-1 col-xs-12, text-center">2</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">2. Memberi latihan/penyuluhan/penataran/ceramah/pendampingan pada masyarakat, terjadwal/terprogram</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1. Terjadwal/terprogram</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">a. Dalam satu semester atau lebih:</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1). Tingkat Internasional, tiap program </div>
      <div class="col-md-1 col-xs-12, text-center">6</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">2). Tingkat Nasional, tiap program</div>
      <div class="col-md-1 col-xs-12, text-center">3</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">3). Tingkat Lokal, tiap program</div>
      <div class="col-md-1 col-xs-12, text-center">1</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">b. Kurang dari satu semester dan minimal satu bulan</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1). Tingkat Internasional, tiap program </div>
      <div class="col-md-1 col-xs-12, text-center">3</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">2). Tingkat Nasional, tiap program</div>
      <div class="col-md-1 col-xs-12, text-center">1,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">3). Tingkat Lokal, tiap program</div>
      <div class="col-md-1 col-xs-12, text-center">0,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">c. insidential, tiap kegiatan/program::</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1. Internasional ST Dirjen/Direktur tiap program </div>
      <div class="col-md-1 col-xs-12, text-center">0,75</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">2. Nasional ST Dirjen/Direktur tiap program</div>
      <div class="col-md-1 col-xs-12, text-center">0,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">3. Provinsi/Lokal ST Rektor/Dekan tiap Program</div>
      <div class="col-md-1 col-xs-12, text-center">0,25</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">3. Memberi pelayanan kepada masyarakat atau kegiatan lain yang menunjang pelaksanaan tugas pemerintahan dan pembangunan</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">a. Berdasarkan bidang keahlian, tiap program </div>
      <div class="col-md-1 col-xs-12, text-center">0,375</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">b. Berdasarkan penugasan lembaga perguruan tinggi, tiap program</div>
      <div class="col-md-1 col-xs-12, text-center">0,25</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">c. Berdasarkan fungsi/jabatan, Tiap program</div>
      <div class="col-md-1 col-xs-12, text-center">0,125</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">d. Pengurus Organisasi Sosial Kemasyarakatan, tiap semester</div>
      <div class="col-md-1 col-xs-12, text-center">0,25</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">4. Membuat/menulis karya pengabdian masyarakat yang tidak dipublikasikan, tiap karya</div>
      <div class="col-md-1 col-xs-12, text-center">1</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">5. Hasil kegiatan pengabdian kepada masyarakat yang dipublikasikan di sebuah berkala/jurnal ilmiah pengabdian kepada masyarakat atau teknologi tepat guna, merupakan diseminasi dari luaran program kegiatan pengabdian kepada masyarakat, tiap karya</div>
      <div class="col-md-1 col-xs-12, text-center">2,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">6. Berperan serta aktif dalam pengelolaan jurnal ilmiah:</div>
      <div class="col-md-1 col-xs-12, text-center">SKS MAKS</div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">a. Editor/dewan penyunting/dewan redaksi jurnal ilmiah internasional, tiap semester</div>
      <div class="col-md-1 col-xs-12, text-center">10</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">b. Editor/dewan penyunting/dewan redaksi jurnal ilmiah nasional, tiap semester</div>
      <div class="col-md-1 col-xs-12, text-center">5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

  <q-card-section class=" text-h4">D. Unsur Penunjang </q-card-section>
  <div class="q-pa-md dosen">

    <div class="row">
      <div class="col-md-1 col-xs-12, text-h6 text-center">No</div>
      <div class="col-md-9 col-xs-12, text-h6 text-center">Kegiatan</div>
      <div class="col-md-1 col-xs-12, text-h6 text-center">SKS</div>
      <div class="col-md-1 col-xs-12, text-h6 text-center">Lampiran</div>
    </div>

  <div class="row">
      <div class="col-md-1 col-xs-12, text-center">1</div>
      <div class="col-md-9 col-xs-12 ">Menjadi anggota dalam suatu Panitia/Badan pada Perguruan Tinggi</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">a. sebagai tim peningkatan mutu program studi dengan tujuan meraih akreditasi tingkat internasional</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1. Sebagai ketua merangkap anggota, tiap semester</div>
      <div class="col-md-1 col-xs-12, text-center">6</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">2. Sebagai wakil ketua merangkap anggota, tiap semester</div>
      <div class="col-md-1 col-xs-12, text-center">5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">3. Sebagai sekretaris merangkap anggota, tiap semester</div>
      <div class="col-md-1 col-xs-12, text-center">4</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">4. Sebagai anggota, tiap semester</div>
      <div class="col-md-1 col-xs-12, text-center">4</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">b. Sebagai Ketua/Wakil Ketua/Sekretaris merangkap anggota</div>      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1. Tingkat PT setiap SK</div>
      <div class="col-md-1 col-xs-12, text-center">0,75</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">2. Tingkat Fakultas/Jurusan setiap SK</div>
      <div class="col-md-1 col-xs-12, text-center">0,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">c. Sebagai anggota</div>
       <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1. Tingkat PT setiap SK</div>
      <div class="col-md-1 col-xs-12, text-center">0,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">2. Tingkat Fakultas/jurusan setiap SK</div>
      <div class="col-md-1 col-xs-12, text-center">0,25</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center">2.</div>
      <div class="col-md-9 col-xs-12 "> Menjadi anggota panitia/badan pada lembaga pemerintah</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">a. Panitia Pusat, sebagai</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1. Ketua/Wakil Ketua, tiap kepanitiaan</div>
      <div class="col-md-1 col-xs-12, text-center">0,75</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">2. Anggota, tiap kepanitiaan</div>
      <div class="col-md-1 col-xs-12, text-center">0,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">b. Panitia Daerah, sebagai</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1. Ketua/Wakil Ketua, tiap kepanitiaan</div>
      <div class="col-md-1 col-xs-12, text-center">0,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">2. Anggota, tiap kepanitiaan</div>
      <div class="col-md-1 col-xs-12, text-center">0,25</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center">3</div>
      <div class="col-md-9 col-xs-12 ">Menjadi anggota organisasi profesi</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">a. Tingkat Internasional, sebagai:</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1. Pengurus, tiap periode jabatan/semester</div>
      <div class="col-md-1 col-xs-12, text-center">0,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">2. Anggota, tiap periode jabatan/semester</div>
      <div class="col-md-1 col-xs-12, text-center">0,25</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">b. Tingkat Nasional, sebagai:</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1. Pengurus, tiap periode jabatan/semester</div>
      <div class="col-md-1 col-xs-12, text-center">0,25</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">2. Anggota, tiap periode jabatan/semester</div>
      <div class="col-md-1 col-xs-12, text-center">0,125</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center">4.</div>
      <div class="col-md-9 col-xs-12 ">Mewakili Perguruan Tinggi/Lembaga Pemerintah duduk dalam panitia antar lembaga, tiap kepanitiaan</div>
      <div class="col-md-1 col-xs-12, text-center">0,25</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center">5.</div>
      <div class="col-md-9 col-xs-12 ">Menjadi anggota delegasi Nasional kepertemuan Internasional</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">a. Sebagai ketua delegasi, tiap kegiatan</div>
      <div class="col-md-1 col-xs-12, text-center">0,75</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">b. Sebagai Anggota, tiap kegiatan</div>
      <div class="col-md-1 col-xs-12, text-center">0,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center">6</div>
      <div class="col-md-9 col-xs-12 ">Berperan serta aktif dalam pertemuan ilmia</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">a. Tingkat Internasional/Nasional/Regional :</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1. Ketua, tiap kegiatan</div>
      <div class="col-md-1 col-xs-12, text-center">0,75</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">2. Anggota/Peserta, tiap kegiatan</div>
      <div class="col-md-1 col-xs-12, text-center">0,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">b. Dilingkungan Perguruan tinggi sebagai :</div>
      <div class="col-md-1 col-xs-12, text-center">0,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">1. Ketua, tiap kegiatan</div>
      <div class="col-md-1 col-xs-12, text-center">0,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">2. Anggota/Peserta, tiap kegiatan</div>
      <div class="col-md-1 col-xs-12, text-center">0,25</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center">7.</div>
      <div class="col-md-9 col-xs-12 ">Mendapatkan tanda jasa/penghargaan</div>
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-1 col-xs-12"></div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">a. Penghargaan/tanda jasa Satya lencana 30 tahun</div>
      <div class="col-md-1 col-xs-12, text-center">3</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">b. Penghargaan/tanda jasa Satya lencana 20 tahun</div>
      <div class="col-md-1 col-xs-12, text-center">2</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">c. Penghargaan/tanda jasa Satya lencana 10 tahun</div>
      <div class="col-md-1 col-xs-12, text-center">1</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">d. Tingkat Internasional, tiap Tanda Jasa/Penghargaan</div>
      <div class="col-md-1 col-xs-12, text-center">5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">e. Tingkat Nasional, tiap tanda jasa Penghargaan </div>
      <div class="col-md-1 col-xs-12, text-center">3</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center"></div>
      <div class="col-md-9 col-xs-12 ">f. Tingkat Provinsi/Lokal, tiap tanda jasa Penghargaan </div>
      <div class="col-md-1 col-xs-12, text-center">1</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1 col-xs-12, text-center">8.</div>
      <div class="col-md-9 col-xs-12 ">Keanggotaan dalam tim penilaian/ kegiatan lainnya dari kementrian (tiap semester) </div>
      <div class="col-md-1 col-xs-12, text-center">0,5</div>
      <div class="col-md-1 col-xs-12">
        <q-file outlined v-model="lampiran">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
      </div>
    </div>

  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        lampiran: null
      }
    }
  }
}
</script>
<style lang="sass">
.dosen
  .row > div
    padding: 5px 5px
    background: rgba(#999,.15)
    border: 1px solid rgba(#999,.2)
  .row
    background: rgba(#aa0, .1)
</style>
