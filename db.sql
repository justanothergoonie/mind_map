-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 13, 2021 at 09:43 PM
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
  `style` varchar(10) DEFAULT NULL,
  `size` int(9) DEFAULT NULL,
  `rotation` int(3) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mind_map`
--

INSERT INTO `mind_map` (`id`, `name`, `word`, `x`, `y`, `style`, `size`, `rotation`, `created_at`, `deleted_at`) VALUES
(177, 'MindMap', 'Hello! Welcome', 5001, 5001, 'pb-pitb', 32, 0, '2021-03-13 21:34:29', NULL),
(178, 'MindMap', 'Click the Crosshair', 4998, 5101, 'gb-ytb', 32, 0, '2021-03-13 21:37:29', NULL),
(180, 'MindMap', 'To Circus MindMap', 5001, 5051, 'ob-lotb', 32, 0, '2021-03-13 21:41:51', NULL),
(181, 'MindMap', 'To add a word', 5001, 5151, 'bb-ptb', 32, 0, '2021-03-13 21:42:42', NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=182;
