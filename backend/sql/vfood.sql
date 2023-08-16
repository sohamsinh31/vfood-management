-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 15, 2023 at 02:36 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vfood`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `CartID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `FoodID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`CartID`, `UserID`, `FoodID`) VALUES
(5, 1, 141),
(234, 1, 141),
(254, 1, 141);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `CategoryID` int(11) NOT NULL,
  `Title` varchar(15) NOT NULL,
  `DemoUrl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`CategoryID`, `Title`, `DemoUrl`) VALUES
(1, 'Pizza', ''),
(2, 'Burger', ''),
(101, 'Pizza', '');

-- --------------------------------------------------------

--
-- Table structure for table `delivery`
--

CREATE TABLE `delivery` (
  `DeliveryID` int(11) NOT NULL,
  `OrderID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `Address` text NOT NULL,
  `Status` text NOT NULL,
  `Timeliine` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `delivery`
--

INSERT INTO `delivery` (`DeliveryID`, `OrderID`, `UserID`, `Address`, `Status`, `Timeliine`) VALUES
(12, 151, 1, 'Radhanpur Road , Mehsana ', 'arriving the location in 30 minutes. stay  updated', 7),
(23, 151, 1, 'Modhera Road , Mehsana ', 'arriving the location in 20 minutes. stay  updated', 8);

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `FAQID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `Question` text NOT NULL,
  `Answer` text NOT NULL,
  `Pending` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`FAQID`, `UserID`, `Question`, `Answer`, `Pending`) VALUES
(121, 1, 'how is your app so good?', 'we have made a user friendly interface and we have always tried to attract users.', 'no'),
(131, 1, 'how is your app so good?', 'we have made a user friendly interface and we have always tried to attract users.', 'no'),
(321, 1, 'how is your service?', 'We have a very good service.', 'yes');

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE `food` (
  `FoodID` int(11) NOT NULL,
  `CatagoryID` int(11) NOT NULL,
  `RestaurantID` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Description` text NOT NULL,
  `Price` int(11) NOT NULL,
  `ImageURL` text NOT NULL,
  `Nutrician` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`FoodID`, `CatagoryID`, `RestaurantID`, `Name`, `Description`, `Price`, `ImageURL`, `Nutrician`) VALUES
(141, 101, 111, 'Italian Pizza', 'toping of tomato and onion with cheese and with pizza sauce , little bit spicy and tasty', 149, 'Assets/pizza.png', 'protin : 30 gm\r\ncalories : 200cal\r\nfat : 5%\r\nyou will get good amount of protin from this food item'),
(161, 101, 111, 'Seven chesee pizza', 'Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly usually, in a ...', 199, 'Assets/pizza.png', 'protin : 430 gm\r\ncalories : 1200cal\r\nfat : 15%\r\nyou will get good amount of protin from this food item and fat also');

-- --------------------------------------------------------

--
-- Table structure for table `food_rating`
--

CREATE TABLE `food_rating` (
  `FRID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `RestaurantID` int(11) NOT NULL,
  `Star` int(11) NOT NULL,
  `Description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `food_rating`
--

INSERT INTO `food_rating` (`FRID`, `UserID`, `RestaurantID`, `Star`, `Description`) VALUES
(0, 1, 111, 5, 'goodone'),
(1, 1, 111, 3, 'average'),
(1323, 1, 111, 5, 'goodone');

-- --------------------------------------------------------

--
-- Table structure for table `hotel_rating`
--

CREATE TABLE `hotel_rating` (
  `HRID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `RestaurantID` int(11) NOT NULL,
  `Star` int(11) NOT NULL,
  `Description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hotel_rating`
--

INSERT INTO `hotel_rating` (`HRID`, `UserID`, `RestaurantID`, `Star`, `Description`) VALUES
(123, 1, 111, 4, 'nice'),
(1234, 1, 111, 5, 'goodone'),
(15234, 1, 111, 5, 'goodone');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `OrderID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `FoodID` int(11) NOT NULL,
  `RestaurantID` int(11) NOT NULL,
  `Status` varchar(50) NOT NULL,
  `Timestamp` int(11) NOT NULL,
  `Total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`OrderID`, `UserID`, `FoodID`, `RestaurantID`, `Status`, `Timestamp`, `Total`) VALUES
(51, 1, 141, 111, 'order recived', 11, 150),
(151, 1, 141, 111, 'order recived', 11, 150),
(251, 1, 141, 111, 'order not recived', 9, 2150);

-- --------------------------------------------------------

--
-- Table structure for table `restaurant`
--

CREATE TABLE `restaurant` (
  `RestaurantID` int(11) NOT NULL,
  `Name` text NOT NULL,
  `Description` text NOT NULL,
  `Phone` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `Address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restaurant`
--

INSERT INTO `restaurant` (`RestaurantID`, `Name`, `Description`, `Phone`, `city`, `Address`) VALUES
(1, 'Lords Plaza', 'a very big and 4 story building 5 star hotel only for rich poeple gareeb are not allowed ', 0, 'Ankleshwar', 'Ankleshwar'),
(111, 'Lords Plaza', 'a very big and 4 story building 5 star hotel only for rich poeple gareeb are not allowed ', 0, 'Ankleshwar', 'Ankleshwar'),
(211, 'Hotel Decent', 'affordable hotel and good stay and situated at center of the city', 12248455, 'Ankleshwar', 'Ankleshwar');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Password` varchar(15) NOT NULL,
  `PhoneNo` varchar(13) NOT NULL,
  `Address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `Name`, `Email`, `Password`, `PhoneNo`, `Address`) VALUES
(1, 'Yuvraj Brahmbhatt', 'yuvraj@gmail.com', 'yuvi23', '0123456789', 'Mehsana, Gujarat , India (384002)'),
(2, 'SohamSinh', 'soham@gmail.com', 'soham123', '0123456789', 'Shreeji villa,Ankleshwar');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`CartID`),
  ADD KEY `usercart_fk` (`UserID`),
  ADD KEY `foodcart_fk` (`FoodID`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`CategoryID`);

--
-- Indexes for table `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`DeliveryID`),
  ADD KEY `order_fk` (`OrderID`),
  ADD KEY `userid_fk` (`UserID`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`FAQID`),
  ADD KEY `userfaq_fk` (`UserID`);

--
-- Indexes for table `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`FoodID`),
  ADD KEY `category_fk` (`CatagoryID`),
  ADD KEY `restaurnat_fk` (`RestaurantID`);

--
-- Indexes for table `food_rating`
--
ALTER TABLE `food_rating`
  ADD PRIMARY KEY (`FRID`),
  ADD KEY `userfrating_fk` (`UserID`),
  ADD KEY `restaurnatfrating_fk` (`RestaurantID`);

--
-- Indexes for table `hotel_rating`
--
ALTER TABLE `hotel_rating`
  ADD PRIMARY KEY (`HRID`),
  ADD KEY `userhrating_fk` (`UserID`),
  ADD KEY `restaurnathrating_fk` (`RestaurantID`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`OrderID`),
  ADD KEY `user_fk` (`UserID`),
  ADD KEY `food_fk` (`FoodID`),
  ADD KEY `restaurant_fk` (`RestaurantID`);

--
-- Indexes for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`RestaurantID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `foodcart_fk` FOREIGN KEY (`FoodID`) REFERENCES `food` (`FoodID`),
  ADD CONSTRAINT `usercart_fk` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `delivery`
--
ALTER TABLE `delivery`
  ADD CONSTRAINT `order_fk` FOREIGN KEY (`OrderID`) REFERENCES `order` (`OrderID`),
  ADD CONSTRAINT `userid_fk` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `faqs`
--
ALTER TABLE `faqs`
  ADD CONSTRAINT `userfaq_fk` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `food`
--
ALTER TABLE `food`
  ADD CONSTRAINT `category_fk` FOREIGN KEY (`CatagoryID`) REFERENCES `category` (`CategoryID`),
  ADD CONSTRAINT `restaurnat_fk` FOREIGN KEY (`RestaurantID`) REFERENCES `restaurant` (`RestaurantID`);

--
-- Constraints for table `food_rating`
--
ALTER TABLE `food_rating`
  ADD CONSTRAINT `restaurnatfrating_fk` FOREIGN KEY (`RestaurantID`) REFERENCES `restaurant` (`RestaurantID`),
  ADD CONSTRAINT `userfrating_fk` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `hotel_rating`
--
ALTER TABLE `hotel_rating`
  ADD CONSTRAINT `restaurnathrating_fk` FOREIGN KEY (`RestaurantID`) REFERENCES `restaurant` (`RestaurantID`),
  ADD CONSTRAINT `userhrating_fk` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `food_fk` FOREIGN KEY (`FoodID`) REFERENCES `food` (`FoodID`),
  ADD CONSTRAINT `restaurant_fk` FOREIGN KEY (`RestaurantID`) REFERENCES `restaurant` (`RestaurantID`),
  ADD CONSTRAINT `user_fk` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
