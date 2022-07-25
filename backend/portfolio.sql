-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 25 juil. 2022 à 14:35
-- Version du serveur :  8.0.21
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `portfolio`
--

-- --------------------------------------------------------

--
-- Structure de la table `content`
--

DROP TABLE IF EXISTS `content`;
CREATE TABLE IF NOT EXISTS `content` (
  `skills` int NOT NULL,
  `experience` int NOT NULL,
  `training` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `language`
--

DROP TABLE IF EXISTS `language`;
CREATE TABLE IF NOT EXISTS `language` (
  `id` int NOT NULL AUTO_INCREMENT,
  `language_name` varchar(255) DEFAULT NULL,
  `language_icon` varchar(255) DEFAULT NULL,
  `year_of_xp` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `language`
--

INSERT INTO `language` (`id`, `language_name`, `language_icon`, `year_of_xp`) VALUES
(1, 'Javascript', 'url-image-javascript', 2),
(2, 'Java', 'url-image-java', 2),
(3, 'React', 'url-image-react', 1),
(4, 'HTML', 'url-image-html', 3),
(5, 'Node.js', 'url-image-node', 1),
(6, 'Express', 'url-img-express', 1),
(7, 'java', 'url-img-ruby', 7),
(8, 'SQL et Java', 'url-img-ruby', 10);

-- --------------------------------------------------------

--
-- Structure de la table `languageknowlege`
--

DROP TABLE IF EXISTS `languageknowlege`;
CREATE TABLE IF NOT EXISTS `languageknowlege` (
  `user_id` int DEFAULT NULL,
  `language_id` int DEFAULT NULL,
  KEY `language_id` (`language_id`),
  KEY `user_id` (`user_id`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `languageknowlege`
--

INSERT INTO `languageknowlege` (`user_id`, `language_id`) VALUES
(1, 2),
(1, 4),
(1, 1),
(1, 3),
(1, 6);

-- --------------------------------------------------------

--
-- Structure de la table `project`
--

DROP TABLE IF EXISTS `project`;
CREATE TABLE IF NOT EXISTS `project` (
  `id` int NOT NULL AUTO_INCREMENT,
  `project_name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `progression` int DEFAULT NULL,
  `nb_of_collaborators` int DEFAULT NULL,
  `source_url` varchar(255) NOT NULL,
  `project_picture` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `project`
--

INSERT INTO `project` (`id`, `project_name`, `created_at`, `description`, `progression`, `nb_of_collaborators`, `source_url`, `project_picture`) VALUES
(1, 'Ecomission', '2022-07-07 12:15:14', 'Description : Ce projet consiste à ....', 80, 1, '', 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvamVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'),
(2, 'Hackathon', '2022-06-06 12:15:14', 'Decription : ce projet de hackathon consistait à ...', 60, 1, '', 'https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'),
(3, 'projet 6', '2024-07-07 22:00:00', 'description du projet 6', 10, 10, '', 'https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'),
(4, 'projet resto', '2022-05-09 12:18:24', 'Description: ce projet est exclusivement pensé pour les amateurs de la bonne bouffe ... :)', 100, 0, '', 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvamVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'),
(9, 'Projet 9', '2024-07-07 22:00:00', 'description du projet 9', 80, 3, '', 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'),
(10, 'projet portfolio', '2024-07-07 22:00:00', 'description du projet', 80, 3, 'https://github.com/jeanlamarre16/portfolio', 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvamVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'),
(11, ' projet 7', '2024-07-07 22:00:00', 'description du projet 7', 80, 3, '', 'https://images.unsplash.com/photo-1531771686035-25f47595c87a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'),
(12, 'projet 8', '2024-07-07 22:00:00', 'description du projet 8', 80, 3, '', 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'),
(14, 'Projet 10', '2024-07-07 22:00:00', 'description du projet 10', 80, 3, '', 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'),
(16, 'Projet 5', '2024-07-07 22:00:00', 'description du projet 5', 80, 3, '', 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'),
(17, 'Nom à définir', '2024-07-07 22:00:00', 'description du projet', 80, 3, '', 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');

-- --------------------------------------------------------

--
-- Structure de la table `usedlanguage`
--

DROP TABLE IF EXISTS `usedlanguage`;
CREATE TABLE IF NOT EXISTS `usedlanguage` (
  `project_id` int DEFAULT NULL,
  `language_id` int DEFAULT NULL,
  KEY `project_id` (`project_id`),
  KEY `language_id` (`language_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `usedlanguage`
--

INSERT INTO `usedlanguage` (`project_id`, `language_id`) VALUES
(1, 2),
(1, 3),
(1, 4),
(2, 1),
(2, 2),
(2, 4);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `profession` varchar(255) NOT NULL,
  `adress` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `postalcode` varchar(7) NOT NULL,
  `age` int DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `training` varchar(255) DEFAULT NULL,
  `presentation` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `firstname`, `lastname`, `profession`, `adress`, `city`, `phone`, `postalcode`, `age`, `gender`, `email`, `password`, `training`, `presentation`, `status`) VALUES
(1, 'Jean Lamarre', 'ALFRED', 'Développeur Web et mobile', '6 D rue du Saule Blanc', 'Thouaré-Sur-Loire', '0629349334', '44470', 42, 'Male', 'jeanlamarre16@yahoo.fr', '', 'Wild Code School', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,\r\n          nam quam? Quaerat necessitatibus, reiciendis dolorum, saepe debitis\r\n          molestias quo corporis ea minus pariatur labore obcaecati explicabo\r\n          vitae odio quasi a\r\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,\r\n          nam quam? Quaerat necessitatibus, reiciendis dolorum, saepe debitis\r\n          molestias quo corporis ea minus pariatur labore obcaecati explicabo\r\n          vitae odio quasi a', 'owner'),
(2, 'Attila', 'Simon', '', '', '', '', '', 35, 'Male', '', '', 'wild code school', 'Salut tout le monde, Je collabore sur ce projet avec Mister Lamarre, spécialement sur le back sur des technos telles que mySQL et Python', 'collaborator'),
(3, 'jean', 'lamarre', '', '16 rue du', 'thouaré', '06....', '44444', 15, 'male', 'jean@yahoo.fr', '$argon2id$v=19$m=4096,t=3,p=1$CKqiKVx0yGrnSHlU0ZlSHA$9VJ0pF+4S79/WeOwCkdzmL4KYUPbPUC4XhEw0si4QK4', 'formation de ...', 'je suis ...', 'collaborateur');

-- --------------------------------------------------------

--
-- Structure de la table `work_on`
--

DROP TABLE IF EXISTS `work_on`;
CREATE TABLE IF NOT EXISTS `work_on` (
  `user_id` int DEFAULT NULL,
  `project_id` int DEFAULT NULL,
  KEY `project_id` (`project_id`),
  KEY `user_id` (`user_id`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `work_on`
--

INSERT INTO `work_on` (`user_id`, `project_id`) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
