-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 21, 2021 at 06:40 PM
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
  `name` varchar(19) NOT NULL,
  `word` varchar(19) NOT NULL,
  `x` int(5) NOT NULL,
  `y` int(5) NOT NULL,
  `size` int(9) NOT NULL,
  `color` text NOT NULL,
  `font` text NOT NULL,
  `rotation` int(3) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mind_map`
--

INSERT INTO `mind_map` (`id`, `name`, `word`, `x`, `y`, `size`, `color`, `font`, `rotation`, `created_at`, `deleted_at`) VALUES
(1, 'Cody', 'Pressure', 100, 100, 10, 'Red', 'Roboto', 180, '2021-02-19 19:06:02', NULL),
(2, 'Cody', 'under', 100, 100, 5000, 'Blue', 'Roboto', 360, '2021-02-21 02:13:45', NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
