-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2024 at 11:01 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bezz`
--

-- --------------------------------------------------------

--
-- Table structure for table `berita`
--

CREATE TABLE `berita` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `kategori_id` int(11) NOT NULL,
  `deskripsi` text NOT NULL,
  `tanggal_input` timestamp NOT NULL DEFAULT current_timestamp(),
  `gambar` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `berita`
--

INSERT INTO `berita` (`id`, `judul`, `kategori_id`, `deskripsi`, `tanggal_input`, `gambar`) VALUES
(12, 'Presiden Majelis Umum PBB: Keamanan air jaga perdamaian', 2, 'Nusa Dua, Bali (ANTARA) - Presiden Majelis Umum Perserikatan Bangsa-Bangsa (PBB) ke-78 Dennis Francis menegaskan bahwa kerja sama internasional dalam menangani masalah air dan mewujudkan keamanan air merupakan langkah menjaga perdamaian.\n\n“Investasi dalam kerja sama air secara global merupakan investasi untuk perdamaian sebagai awal untuk mewujudkan stabilitas pasokan air jangka panjang,” ucap Francis dalam Pertemuan Tingkat Tinggi World Water Forum (WWF) ke-10 di Nusa Dua, Bali, Senin.\n\nMenurut dia, saat ini manusia hidup pada masa di mana perdamaian antarnegara dapat dengan sangat mudah terganggu, termasuk dipicu oleh masalah air. Terlebih, memulihkan perdamaian memerlukan upaya yang sangat keras begitu konflik terbuka terpicu.\n\nPragmatisme itu, kata Francis, mendorong komunitas internasional untuk melakukan semua hal yang diperlukan untuk mencegah ketegangan dan konflik terbuka dipicu akibat masalah air.\n\nDia mengingatkan bahwa keamanan air sangat penting dalam pencapaian seluruh 70 Tujuan Pembangunan Berkelanjutan (SDGs), karena kelancaran pemenuhan target SDGs tergantung pada keberadaan air.\n\nOleh karena itu, kata Francis, demi menyelesaikan masalah air, komunitas internasional harus bersatu dan bertindak secara strategis, serta memperkuat inisiatif kerja sama di bidang air.\n\nDia juga optimistis WWF-10 yang baru saja dibuka dapat mendorong kerja sama internasional dalam menangani masalah air.\n\n“Saya berharap forum ini secara berarti akan memacu perkembangan kerja sama internasional serta perumusan dan penerapan aksi konkret untuk menstabilkan ketersediaan dan manajemen air jangka menengah dan panjang,” kata dia.\n\nWWF-10 yang digelar di Nusa Dua, Bali, pada 18—25 Mei, membahas konservasi air, air bersih dan sanitasi, ketahanan pangan dan energi, serta mitigasi bencana alam.\n\nSebanyak 244 sesi pembahasan terkait air dalam WWF ke-10 diharapkan dapat memberikan hasil konkret mengenai pengelolaan air secara global.', '2024-05-29 14:31:15', 'https://img.antaranews.com/cache/1200x800/2024/05/20/KTT-World-Water-Forum2a.jpg'),
(13, 'Cerita PNS 28 Tahun Ikut Tabungan Perumahan, Pas Pensiun Cuma Dapat Rp 6,6 Juta', 1, 'Putri (bukan nama sebenarnya), seorang pensiunan guru PNS peserta program tabungan perumahan yang waktu itu namanya Bapertarum, hanya mendapat pencairan Rp 6,6 juta dari periode kepesertaannya selama 28 tahun.\n\nProgram Bapertarum-PNS dibuat pada 15 Februari 1993 berdasarkan Keputusan Presiden Nomor 14 Tahun 1993 untuk meningkatkan kesejahteraan PNS melalui beberapa skema bantuan dalam memiliki rumah yang layak.\nSetiap PNS diwajibkan untuk iuran sejumlah dana dari gajinya per bulan sesuai dengan golongan masing-masing, mulai dari Rp 3.000 untuk Golongan I, Rp 5.000 Golongan II, Rp 7.000 Golongan III, dan Rp 10.000 Golongan IV.\nWaktu itu nilai iuran yang ditampung tidak mengalami peningkatan hingga iuran Taperum-PNS dihentikan oleh Menteri Keuangan pada Agustus 2020.\nPutri bercerita sudah bekerja sebagai PNS sejak 1996 dan mulai terdaftar sebagai peserta Taperum. Dia pensiun di Januari 2024.\n\"Jumlah simpanan di Tapera saya Rp 6.677.939. Saya sudah bekerja sebagai PNS sejak 1996 dan ikut Taperum sejak saat itu,\" kata Putri kepada kumparan, Rabu (29/5).\n\nPutri mengaku hingga sekarang belum bisa mencairkan tabungannya tersebut. \"Karena harus menunggu 3 bulan dari kepesertaan nonaktif, tercatat di Tapera kepesertaan aktif saya di Mei 2024, sehingga kemungkinan bisa dicairkan di Agustus 2024,\" ujar Putri.\nSetelah dibubarkannya Bapertarum-PNS pada 2018, semua aset untuk dan atas nama Bapertarum-PNS dilikuidasi sesuai dengan amanat Undang-undang Nomor 4 Tahun 2016 Tentang Tabungan Perumahan Rakyat. Hasil likuidasi tersebut kemudian dikembalikan kepada PNS Aktif sebagai saldo awal Peserta Tapera dan PNS Pensiun atau ahli warisnya secara langsung.\nPutri menuturkan iuran yang dibayarnya ketika menjadi peserta Taperum senilai Rp 10.000 per bulan. Lalu, ketika menjadi peserta Tapera, porsi potongan iuran dari gajinya jadi lebih besar.\n\"Tidak dijelasin berapa imbal hasil pengembangannya sejak 2020 jadi Tapera. Saya juga tidak pernah pakai fasilitas Tapera,\" tutur Putri.', '2024-05-29 15:15:02', 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1637564263/vihm2q3le4rapbizedsg.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `id` int(11) NOT NULL,
  `kategori` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`id`, `kategori`) VALUES
(1, 'Nasional'),
(2, 'Internasional'),
(3, 'Kesehatan'),
(4, 'Olahraga'),
(5, 'Sains');

-- --------------------------------------------------------

--
-- Table structure for table `trending`
--

CREATE TABLE `trending` (
  `id` int(11) NOT NULL,
  `trending` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trending`
--

INSERT INTO `trending` (`id`, `trending`) VALUES
(1, 'Internasional'),
(2, 'indonesia'),
(5, 'test1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `berita`
--
ALTER TABLE `berita`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kategori` (`kategori_id`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trending`
--
ALTER TABLE `trending`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `berita`
--
ALTER TABLE `berita`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `trending`
--
ALTER TABLE `trending`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `berita`
--
ALTER TABLE `berita`
  ADD CONSTRAINT `berita_ibfk_1` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
