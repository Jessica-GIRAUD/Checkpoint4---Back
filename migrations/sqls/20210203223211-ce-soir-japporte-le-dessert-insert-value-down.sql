/* Replace with your SQL commands */


ALTER TABLE receipe_has_ingredient DROP FOREIGN KEY fk_receipe_has_ingredient_receipe1;
ALTER TABLE receipe_has_ingredient DROP FOREIGN KEY fk_receipe_has_ingredient_ingredient1;
ALTER TABLE receipe DROP FOREIGN KEY fk_receipe_dessert;
ALTER TABLE step DROP FOREIGN KEY fk_step_receipe;
ALTER TABLE receipe DROP FOREIGN KEY fk_receipe_difficulty;

TRUNCATE dessert ;
TRUNCATE difficulty;
TRUNCATE receipe;
TRUNCATE step;
TRUNCATE ingredient;
TRUNCATE receipe_has_ingredient;