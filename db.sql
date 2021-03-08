-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 08, 2021 at 06:08 PM
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
  `font` text,
  `rotation` int(3) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mind_map`
--

INSERT INTO `mind_map` (`id`, `name`, `word`, `x`, `y`, `style`, `size`, `font`, `rotation`, `created_at`, `deleted_at`) VALUES
(121, 'ht', 'hello             ', 5000, 4692, NULL, 2, 'Billy', 0, '2021-03-02 17:43:53', NULL),
(123, 'cody', 'ok', 5397, 4270, NULL, 2, 'Billy', 0, '2021-03-02 20:26:01', NULL),
(124, 'cody', 'ok', 5397, 4270, NULL, 2, 'Billy', 0, '2021-03-02 20:26:40', NULL),
(125, 'goofbye', 'hwllo', 5001, 4908, NULL, 2, 'Billy', 0, '2021-03-06 00:33:42', NULL),
(126, 'goofbye', 'hwllo', 5001, 4908, NULL, 2, 'Billy', 0, '2021-03-06 00:38:33', NULL),
(127, 'goofbye', 'hwllo', 5001, 4908, NULL, 2, 'Billy', 0, '2021-03-06 00:38:54', NULL),
(128, 'goofbye', 'hwllo', 5001, 4908, NULL, 2, 'Billy', 0, '2021-03-06 00:39:46', NULL),
(129, 'goofbye', 'hwllo', 5001, 4908, NULL, 2, 'Billy', 0, '2021-03-06 00:40:16', NULL),
(130, 'goofbye', 'hwllo', 5001, 4908, NULL, 2, 'Billy', 0, '2021-03-06 00:40:26', NULL),
(131, 'goofbye', 'hwllo', 5001, 4908, NULL, 2, 'Billy', 0, '2021-03-06 00:40:28', NULL),
(132, 'goofbye', 'hwllo', 5001, 4908, NULL, 2, 'Billy', 0, '2021-03-06 00:41:02', NULL),
(133, 'goofbye', 'hwllo', 5001, 4908, NULL, 2, 'Billy', 0, '2021-03-06 00:43:53', NULL),
(134, 'goofbye', 'hwllo', 5001, 4908, NULL, 2, 'Billy', 0, '2021-03-06 00:48:38', NULL),
(135, 'goofbye', 'hwllo', 5001, 4908, NULL, 2, 'Billy', 0, '2021-03-06 00:48:43', NULL),
(136, 'goofbye', 'hwllo', 5001, 4908, NULL, 2, 'Billy', 0, '2021-03-06 00:52:47', NULL),
(137, 'goofbye', 'hwllo', 5001, 4908, NULL, 2, 'Billy', 0, '2021-03-06 00:55:44', NULL),
(138, 'fff', 'hel', 5001, 5001, NULL, 2, 'Billy', 0, '2021-03-06 00:56:47', NULL),
(139, 'fff', 'hel', 5001, 5001, NULL, 2, 'Billy', 0, '2021-03-06 00:57:20', NULL),
(140, 'fff', 'hel', 5001, 5001, 'red-TB', 2, 'Billy', 0, '2021-03-06 00:58:11', NULL),
(141, 'fff', 'hel', 5001, 5001, 'red-TB', 2, 'Billy', 0, '2021-03-06 00:58:27', NULL),
(142, 'fff', 'hel', 5001, 5001, 'red-TB', 2, 'Billy', 0, '2021-03-06 01:01:06', NULL),
(143, 'fff', 'hel', 5001, 5001, 'red-TB', 2, 'Billy', 0, '2021-03-06 01:01:33', NULL),
(144, 'world', 'hello', 5196, 4807, 'undefined', 2, 'Billy', 0, '2021-03-06 01:05:40', NULL),
(145, 'world', 'hello', 5196, 4807, 'undefined', 2, 'Billy', 0, '2021-03-06 01:06:33', NULL),
(146, 'world', 'hello', 5097, 4766, 'blue-TB', 2, 'Billy', 0, '2021-03-06 01:06:54', NULL),
(147, 'hello', 'world', 4992, 4840, 'green-bkg', 2, 'Billy', 0, '2021-03-06 01:09:00', NULL),
(148, 'ye', 'he', 4732, 4808, 'green-TB', 5, 'Billy', 95, '2021-03-06 01:10:23', NULL),
(149, 'ye', 'he', 4732, 4808, 'green-TB', 5, 'Billy', 95, '2021-03-06 01:12:57', NULL),
(150, 'ye', 'he', 4732, 4808, 'green-TB', 5, 'Billy', 95, '2021-03-06 01:16:36', NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;
