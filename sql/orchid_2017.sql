-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2017 at 04:45 PM
-- Server version: 5.5.32
-- PHP Version: 5.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `orchid_2017`
--
CREATE DATABASE IF NOT EXISTS `orchid_2017` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `orchid_2017`;

-- --------------------------------------------------------

--
-- Table structure for table `import_event`
--

CREATE TABLE IF NOT EXISTS `import_event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vendorId` float DEFAULT NULL,
  `fromDate` date DEFAULT NULL,
  `toDate` date DEFAULT NULL,
  `preorderDeadline` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `import_event`
--

INSERT INTO `import_event` (`id`, `vendorId`, `fromDate`, `toDate`, `preorderDeadline`) VALUES
(1, 0, '0000-00-00', '0000-00-00', '0000-00-00'),
(2, 1, '0000-00-00', '0000-00-00', '0000-00-00'),
(3, 2, '0000-00-00', '0000-00-00', '0000-00-00'),
(4, 3, '0000-00-00', '0000-00-00', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `offering`
--

CREATE TABLE IF NOT EXISTS `offering` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orchidId` float DEFAULT NULL,
  `vendorId` float DEFAULT NULL,
  `cost` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `offering`
--

INSERT INTO `offering` (`id`, `orchidId`, `vendorId`, `cost`) VALUES
(2, 3, 3, 20),
(3, 3, 2, 15),
(4, 5, 4, 10),
(5, 6, 4, 25);

-- --------------------------------------------------------

--
-- Table structure for table `orchid`
--

CREATE TABLE IF NOT EXISTS `orchid` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `genus` varchar(255) DEFAULT NULL,
  `species` varchar(255) DEFAULT NULL,
  `affinis` tinyint(1) DEFAULT '0',
  `variety` varchar(255) DEFAULT NULL,
  `clonal_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `orchid`
--

INSERT INTO `orchid` (`id`, `genus`, `species`, `affinis`, `variety`, `clonal_name`) VALUES
(3, 'Tuberolabium', 'quisumbingii', 0, '', ''),
(4, 'Epidendrum', 'hugomedinae', 1, '', ''),
(5, 'Ceratocentron', 'fesselii', 0, '', ''),
(6, 'Eria', 'floribunda', 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `vendor`
--

CREATE TABLE IF NOT EXISTS `vendor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `vendor`
--

INSERT INTO `vendor` (`id`, `name`, `country`) VALUES
(1, 'name', 'country'),
(2, 'Purificacion Orchids', 'Philippines'),
(3, 'Ecuagenera', 'Ecuador'),
(4, 'Orquideas del Valle ', 'Columbia');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
