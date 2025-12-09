CREATE TABLE `contacts` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`phone` varchar(155) NOT NULL,
	`email` varchar(255) NOT NULL,
	`location` varchar(255) NOT NULL,
	`message` varchar(255) DEFAULT 'Null'
);
--> statement-breakpoint
CREATE TABLE `login_attempts` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`sessionId` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`attemptedAt` timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`role` enum('user','admin') DEFAULT 'user'
);
