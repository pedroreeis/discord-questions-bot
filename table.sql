/* Para usufruir do bot, você precisa de um banco de dados com essas tabelas. */

CREATE TABLE `zc_questions` (
	`question_id` INT(4) NOT NULL AUTO_INCREMENT,
	`question_name` TEXT NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	`question_keywords` TEXT NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	`question_answers` TEXT NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	PRIMARY KEY (`question_id`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;
