-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `contacts` (
	`contact_id` integer PRIMARY KEY,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`wife_id` text,
	`children` numeric DEFAULT 0 NOT NULL
);

*/