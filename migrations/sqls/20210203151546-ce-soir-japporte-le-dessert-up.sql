CREATE SCHEMA IF NOT EXISTS `ce_soir_japporte_le_dessert` DEFAULT CHARACTER SET utf8 ;
USE `ce_soir_japporte_le_dessert` ;

CREATE TABLE IF NOT EXISTS `dessert` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `photo` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Difficulty`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `difficulty` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Receipe`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `receipe` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `time_needed` VARCHAR(50) NOT NULL,
  `number_of_persons` INT NOT NULL,
  `dessert_id` INT NOT NULL,
  `difficulty_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_receipe_dessert_idx` (`dessert_id` ASC),
  INDEX `fk_receipe_difficulty1_idx` (`difficulty_id` ASC),
  CONSTRAINT `fk_receipe_dessert`
    FOREIGN KEY (`dessert_id`)
    REFERENCES `dessert` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_receipe_difficulty`
    FOREIGN KEY (`difficulty_id`)
    REFERENCES `difficulty` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Step`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `step` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` LONGTEXT NOT NULL,
  `receipe_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_step_receipe1_idx` (`receipe_id` ASC),
  CONSTRAINT `fk_step_receipe`
    FOREIGN KEY (`receipe_id`)
    REFERENCES `receipe` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ingredient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ingredient` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `photo` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `receipe_has_ingredient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `receipe_has_ingredient` (
  `receipe_id` INT NULL,
  `ingredient_id` INT NULL,
  INDEX `fk_receipe_has_ingredient_receipe1_idx` (`receipe_id` ASC),
  INDEX `fk_receipe_has_ingredient_ingredient1_idx` (`ingredient_id` ASC),
  CONSTRAINT `fk_receipe_has_ingredient_receipe1`
    FOREIGN KEY (`receipe_id`)
    REFERENCES `receipe` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_receipe_has_ingredient_ingredient1`
    FOREIGN KEY (`ingredient_id`)
    REFERENCES `ingredient` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
