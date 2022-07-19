
const tables = {
    studios:
        `'studio-tsar'.'studios'(
        'idstudios' INT NOT NULL AUTO_INCREMENT,
        'name' VARCHAR(45) NULL,
        'location' VARCHAR(45) NULL,
        PRIMARY KEY('idstudios'))`,
    users:
        `'studio-tsar'.'users' (
        'idusers' INT NOT NULL AUTO_INCREMENT,
        'name' VARCHAR(45) NULL,
        'second-name' VARCHAR(45) NULL,
        'email' VARCHAR(45) NULL,
        'password' VARCHAR(45) NULL,
        'validation-code' VARCHAR(45) NULL,
        'restore-password-code' VARCHAR(45) NULL,
        'instagram-account' VARCHAR(45) NULL,
        'privileges' VARCHAR(45) NULL,
        'biography' VARCHAR(45) NULL,
        'avatar' VARCHAR(45) NULL,
        'telephone' VARCHAR(45) NULL,
        'working-at-studio' INT NULL,
        'owner-of-studio' INT NULL,
        'account-state' VARCHAR(45) NULL,
        PRIMARY KEY ('idusers'),
        INDEX 'working-at-studio_idx' ('working-at-studio' ASC) VISIBLE,
        INDEX 'fk_users_1_idx' ('owner-of-studio' ASC) VISIBLE,
        UNIQUE INDEX 'email_UNIQUE' ('email' ASC) VISIBLE,
        UNIQUE INDEX 'telephone_UNIQUE' ('telephone' ASC) VISIBLE,
        CONSTRAINT 'working-at-studio'
          FOREIGN KEY ('working-at-studio')
          REFERENCES 'studio-tsar'.'studios' ('idstudios')
          ON DELETE NO ACTION
          ON UPDATE NO ACTION,
        CONSTRAINT 'fk_users_1'
          FOREIGN KEY ('owner-of-studio')
          REFERENCES 'studio-tsar'.'studios' ('idstudios')
          ON DELETE NO ACTION
          ON UPDATE NO ACTION)`,
    clients:
        `'studio-tsar'.'clients'(
        'idclients' INT NOT NULL AUTO_INCREMENT,
        'name' VARCHAR(45) NULL,
        'second-name' VARCHAR(45) NULL,
        'telephone' VARCHAR(45) NULL,
        'email' VARCHAR(45) NULL,
        'instagram-account' VARCHAR(45) NULL,
        'national-id' VARCHAR(45) NULL,
        'registration-date' VARCHAR(45) NULL,
        'medical-observations' VARCHAR(45) NULL,
        'registered-by-user' INT NOT NULL,
        PRIMARY KEY('idclients'),
        INDEX 'fk_clients_1_idx'('registered-by-user' ASC) VISIBLE,
        UNIQUE INDEX 'telephone_UNIQUE'('telephone' ASC) VISIBLE,
        UNIQUE INDEX 'email_UNIQUE'('email' ASC) VISIBLE,
        UNIQUE INDEX 'national-id_UNIQUE'('national-id' ASC) VISIBLE,
        CONSTRAINT 'fk_clients_1'
        FOREIGN KEY('registered-by-user')
        REFERENCES 'studio-tsar'.'users'('idusers')
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)`,
    proyects:
        `'studio-tsar'.'proyects'(
        'idproyects' INT NOT NULL AUTO_INCREMENT,
        'name' VARCHAR(45) NULL,
        'description' VARCHAR(45) NULL,
        'proyect-state' VARCHAR(45) NULL,
        'budget' VARCHAR(45) NULL,
        'client-id' INT NOT NULL,
        'user-id' INT NOT NULL,
        'studio-id' INT NULL,
        'creation-date' DATE NOT NULL,
        PRIMARY KEY('idproyects'),
        INDEX 'fk_proyects_1_idx'('client-id' ASC) VISIBLE,
        INDEX 'fk_proyects_2_idx'('user-id' ASC) VISIBLE,
        INDEX 'fk_proyects_3_idx'('studio-id' ASC) VISIBLE,
        CONSTRAINT 'fk_proyects_1'
        FOREIGN KEY('client-id')
        REFERENCES 'studio-tsar'.'clients'('idclients')
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
        CONSTRAINT 'fk_proyects_2'
        FOREIGN KEY('user-id')
        REFERENCES 'studio-tsar'.'users'('idusers')
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
        CONSTRAINT 'fk_proyects_3'
        FOREIGN KEY('studio-id')
        REFERENCES 'studio-tsar'.'studios'('idstudios')
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)`
}

module.exports={tables};