# Host: localhost  (Version: 5.5.53)
# Date: 2020-08-27 20:02:17
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (20,'13479626879','123456'),(21,'13479626878','123456'),(22,'13528861269','123456'),(24,'123456789888','123456');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

#
# Structure for table "xq"
#

DROP TABLE IF EXISTS `xq`;
CREATE TABLE `xq` (
  `product_id` varchar(300) NOT NULL,
  `product_name` varchar(300) NOT NULL,
  `product_img` varchar(30) NOT NULL,
  `product_price` varchar(30) NOT NULL,
  `product_num` varchar(30) NOT NULL,
  `submission_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

#
# Data for table "xq"
#

/*!40000 ALTER TABLE `xq` DISABLE KEYS */;
INSERT INTO `xq` VALUES ('1','iQ00影音耳机极速黄','../images/7.jpg','99',' ','2020-08-26 20:39:52'),('10','vivo X27 Pro','../images/p5.jpg','3298','0','2020-08-26 14:09:42'),('11','NEX 3S 5G版','../images/p6.jpg','4998','0','2020-08-26 14:09:43'),('12','vivo X30 5G版','../images/p7.jpg','2998','0','2020-08-26 14:09:43'),('13','vivo 缤纷耳机','../images/i1.jpg','49','0','2020-08-26 14:09:44'),('14','iQOO 影音耳机','../images/i2.jpg','129','0','2020-08-26 14:09:44'),('15','vivo X50 硅胶保护壳','../images/i3.jpg','59','0','2020-08-26 14:09:45'),('16','iQOO 3 砂岩手机保护壳','../images/i4.jpg','59','0','2020-08-26 14:09:45'),('17','iQOO 闪电游戏手柄','../images/i5.jpg','199','0','2020-08-26 14:09:45'),('18','闪充手游数据线','../images/i6.jpg','59','0','2020-08-26 14:09:46'),('19','vivo TWS Neo 真无线耳机','../images/i7.jpg','499','0','2020-08-26 14:09:46'),('2','vivo TWS Neo无线耳机','../images/8.jpg','489','0','2020-08-26 14:09:48'),('20','vivo 44W闪充充电器','../images/i8.jpg','119','8','2020-08-26 14:17:27'),('3','vivo 18W闪充充电器','../images/10.jpg','39','0','2020-08-26 14:09:48'),('4','iQOO Neo3','../images/l1.webp','1998','0','2020-08-26 14:09:49'),('5','vivo X50 5G版','../images/l2.webp','3498','0','2020-08-26 20:22:11'),('6','iQOO Z1 5G版','../images/l3.webp','2498','0','2020-08-26 20:22:14'),('7','iQOO 3 5G版','../images/p1.jpg','3498','0','2020-08-26 14:09:50'),('8','vivo S6 5G版','../images/p2.jpg','2498','0','2020-08-26 14:09:51'),('9','vivo Y70s 5G版','../images/p3.jpg','2098','0','2020-08-26 14:09:53');
/*!40000 ALTER TABLE `xq` ENABLE KEYS */;
