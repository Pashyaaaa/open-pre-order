-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 05, 2023 at 03:58 AM
-- Server version: 8.0.30
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `openpo`
--

-- --------------------------------------------------------

--
-- Table structure for table `catalog`
--

CREATE TABLE `catalog` (
  `id` int NOT NULL,
  `nama_produk` varchar(255) DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `harga` int DEFAULT NULL,
  `publish` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `catalog`
--

INSERT INTO `catalog` (`id`, `nama_produk`, `gambar`, `url`, `harga`, `publish`) VALUES
(1, 'Nasi Goreng', '3e619b7035d817019573b43c883bcdfa.png', 'http://localhost:5000/images/3e619b7035d817019573b43c883bcdfa.png', 12000, 1),
(2, 'Nasi Bebek', '2cce58f7e4ebe2224b8df5abe67f8a2a.png', 'http://localhost:5000/images/2cce58f7e4ebe2224b8df5abe67f8a2a.png', 15000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `whatsapp` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `tanggal_order` datetime NOT NULL,
  `tanggal_ambil` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `nama`, `whatsapp`, `alamat`, `tanggal_order`, `tanggal_ambil`) VALUES
(1, 'test payment gateway', '088888881', 'Jl. Jalan', '2023-11-16 04:48:20', '2023-11-09 05:00:00'),
(2, 'pashya', '088888881', 'Jl. Jalan', '2023-11-16 04:49:03', '2023-11-09 05:00:00'),
(3, 'test', '088888881', 'Jl. Jalan', '2023-11-17 02:05:18', '2023-11-09 05:00:00'),
(4, 'a', 'a', 'a', '2023-11-21 01:32:51', '2023-11-22 03:36:00'),
(5, 'a', 'a', 'a', '2023-11-21 01:33:16', '2023-11-22 01:33:00'),
(6, 'a', 'a', 'a', '2023-11-21 01:34:13', '2023-11-22 01:34:00'),
(7, 'a', 'a', 'a', '2023-11-21 01:36:34', '2023-11-21 02:36:00'),
(8, 'a', 'a', 'a', '2023-11-21 01:38:35', '2023-11-21 03:38:00');

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE `order_detail` (
  `id` int NOT NULL,
  `jumlah` varchar(255) DEFAULT NULL,
  `harga` varchar(255) DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  `catalog_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`id`, `jumlah`, `harga`, `order_id`, `catalog_id`) VALUES
(1, '2', '30000', NULL, 2),
(2, '2', '30000', NULL, 2),
(3, '5', '60000', NULL, 1),
(4, '1', '15000', NULL, 2),
(5, '5', '60000', NULL, 1),
(6, '1', '15000', NULL, 2),
(7, '5', '60000', 1, 1),
(8, '1', '15000', 1, 2),
(9, '5', '60000', 2, 1),
(10, '1', '15000', 2, 2),
(11, '5', '60000', 3, 1),
(12, '1', '15000', 3, 2),
(13, '1', '15000', 4, 2),
(14, '2', '24000', 4, 1),
(15, '1', '12000', 6, 1),
(16, '2', '30000', 6, 2),
(17, '1', '12000', 7, 1),
(18, '1', '12000', 8, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`) VALUES
(1, 'user3', 'email@gmail.com', '$2b$10$e9wdnhLi7TGUf2onyvxoxOgR.pmA5OwtHWv/iqt3kaldeVZq40jhi', NULL),
(2, 'user3', 'email@gmail.com', '$2b$10$guEpfBh6cCLKueRNaUmuteswmq52ClC7h6FvJ.d2t0WzGQmiE7feS', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `catalog`
--
ALTER TABLE `catalog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `catalog_id` (`catalog_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `catalog`
--
ALTER TABLE `catalog`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `order_detail_ibfk_2` FOREIGN KEY (`catalog_id`) REFERENCES `catalog` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
