-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 22, 2021 at 06:37 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `mind_map`
--

-- --------------------------------------------------------

--
-- Table structure for table `mind_map`
--

CREATE TABLE `mind_map` (
  `id` int(11) NOT NULL,
  `name` varchar(19) DEFAULT NULL,
  `word` varchar(19) DEFAULT NULL,
  `x` int(5) DEFAULT NULL,
  `y` int(5) DEFAULT NULL,
  `size` int(9) DEFAULT NULL,
  `color` text,
  `font` text,
  `rotation` int(3) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mind_map`
--

INSERT INTO `mind_map` (`id`, `name`, `word`, `x`, `y`, `size`, `color`, `font`, `rotation`, `created_at`, `deleted_at`) VALUES
(21, 'Cody', 'Pressure', NULL, NULL, 3, 'orange', 'netsrak', NULL, '2021-02-22 02:50:27', NULL),
(25, 'James', 'Bum', 500, 500, 3, 'indigo', 'netsrak', NULL, '2021-02-22 02:55:37', NULL),
(38, 'Cody', 'Under', NULL, NULL, 1, 'red', 'Billy', NULL, '2021-02-22 03:17:35', NULL),
(40, 'james', 'bum', 1000, 500, 5, 'red', 'netsrak', NULL, '2021-02-22 03:23:01', NULL),
(41, 'james', ' ba', 1500, 500, 2, 'blue', 'Billy', NULL, '2021-02-22 03:23:49', NULL),
(42, 'james', 'ye', 2000, 500, 3, 'green', 'Billy', NULL, '2021-02-22 03:24:26', NULL),
(46, 'Bowie', ' terror', 250, 250, 3, 'blue', 'netsrak', 180, '2021-02-22 03:36:26', NULL),
(47, 'james', 'test', 5000, 5000, 2, 'violet', 'Billy', 245, '2021-02-22 04:37:19', NULL),
(48, 'james', 'test', 5000, 5000, 2, 'orange', 'netsrak', 220, '2021-02-22 04:37:55', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mind_map`
--
ALTER TABLE `mind_map`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mind_map`
--
ALTER TABLE `mind_map`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
