-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2023-06-03 13:37:25.808

-- tables
-- Table: Chamado
CREATE TABLE Chamado (
    cha_id int  NOT NULL COMMENT 'A coluna id corresponde ao código no qual e realizado um chamado, a mesma e chave primaria.',
    cha_titulo int  NOT NULL COMMENT 'A coluna titulo representa o nome de um determinado chamado durante a realização de um chamado.',
    cha_tipo int  NOT NULL COMMENT 'A coluna tipo corresponde a qual cenário a mesma se descreve durante a realização de um determinado chamado.',
    cha_descricao int  NOT NULL COMMENT 'A coluna descrição corresponde a escrita de um determinado chamado.',
    cha_status int  NOT NULL COMMENT 'A coluna status corresponde a situação em que a mesma esteja durante o momento do cadastro, se foi inicializado, em andamento ou concluída.',
    Usuario_usu_id int  NOT NULL COMMENT 'A coluna usuário id e proveniente da tabela usuário, a mesma e chave estrangeira, devido a consulta de quem realizou durante estas inscrições.',
    Midia_mid_id int  NOT NULL COMMENT 'A coluna mídia id e proveniente da tabela mídia, a mesma e chave estrangeira e corresponde ao código emitido durante a geração da mídia.',
    CONSTRAINT Chamado_pk PRIMARY KEY (cha_id)
) COMMENT 'A tabela chamado representa as ações que são realizados durante a montagem de um determinado chamado.';

-- Table: Grupo
CREATE TABLE Grupo (
    gru_id int  NOT NULL COMMENT 'A coluna id representa o código do qual um grupo foi criado, a mesma e chave primaria.',
    gru_nome int  NOT NULL COMMENT 'A coluna nome, representa o nome de um determinada frente de trabalho.',
    Time_tim_id int  NOT NULL COMMENT 'A coluna time id e uma chave estrangeira proveniente da coluna time id da tabela time, e a relação em que um time pode ter vários grupos e um grupo precisa estar ligado a um time.',
    CONSTRAINT Grupo_pk PRIMARY KEY (gru_id)
) COMMENT 'A tabela grupo representa uma subdivisão da tabela time, diferente dos times, o grupo e representado por determinados integrantes de forma exclusiva ao mesmo.';

-- Table: Historico
CREATE TABLE Historico (
    his_acao int  NOT NULL COMMENT 'A coluna ação representa o que ocorreu durante a realização deste chamado.',
    his_data int  NOT NULL COMMENT 'A coluna data representa quando ocorreu a realização do evento.',
    his_id int  NOT NULL COMMENT 'A coluna id representa o código em que armazena os dados referentes a este histórico, a mesma e chave primaria devido a sua grande importância nesta tabela.',
    Chamado_cha_id int  NOT NULL COMMENT 'A coluna chamado id e proveniente da tabela chamado, a mesma e chave estrangeira, pois carrega os dados quando um determinado chamado e finalizado.',
    CONSTRAINT Historico_pk PRIMARY KEY (his_id)
) COMMENT 'A tabela histórico representa as ações realizadas durante um determinado chamado';

-- Table: Iterresado
CREATE TABLE Iterresado (
    Chamado_cha_id int  NOT NULL COMMENT 'A coluna chamado id corresponde a uma chave composta entre a ligação da tabela chamado que e chave primaria e da tabela usuário que e chave estrangeira.',
    Usuario_usu_id int  NOT NULL COMMENT 'A coluna usuário id e uma chave composta em que a mesma corresponde a interligação da coluna usuário id que e chave primaria e a coluna chamado id que e estrangeira.',
    CONSTRAINT Iterresado_pk PRIMARY KEY (Chamado_cha_id,Usuario_usu_id)
) COMMENT 'A tabela interessado e uma entidade associativa entre usuário e chamado, pois a mesma indica interessados que são os usuários. ';

-- Table: Midia
CREATE TABLE Midia (
    mid_arquivo int  NOT NULL COMMENT 'A coluna id corresponde ao código que e gerado ao inserir os arquivos, a mesma e chave primaria.',
    Chamado_cha_id int  NOT NULL COMMENT 'A coluna chamado id e correspondente da tabela chamado , a mesma c chave estrangeira devido a sua interligação com o mesmo.',
    CONSTRAINT Midia_pk PRIMARY KEY (mid_arquivo)
) COMMENT 'A tabela mídia corresponde aos dados de imagens e vídeos emitidos durante a realização de um determinado chamado.';

-- Table: Time
CREATE TABLE Time (
    tim_id int  NOT NULL COMMENT 'A coluna id corresponde ao código em que foi criado uma equipe, a mesma e de chave primaria devido a sua importância com a tabela usuários.',
    tim_nome int  NOT NULL COMMENT 'A coluna nome representa a entidade no qual um usuário e cadastrado, podendo ter vários grupos dentro desta equipe.',
    CONSTRAINT Time_pk PRIMARY KEY (tim_id)
) COMMENT 'A tabela time representa os nomes das agremiações nos quais cada um possui um determinado grupo de trabalho.';

-- Table: Usuario
CREATE TABLE Usuario (
    usu_id int  NOT NULL COMMENT 'A coluna usuário id representa a interligação com a tabela chamado.',
    usu_nome int  NOT NULL COMMENT 'A coluna usuário nome representa qual e o nome do usuário que esteja acessando durante o cadastro.',
    usu_email int  NOT NULL COMMENT 'A coluna usuário e-mail representa qual e o e-mail utilizado pelo usuário durante o cadastro, o mesmo deve ser corporativo para ter maior controle. ',
    usu_senha int  NOT NULL COMMENT 'A coluna usuário senha e utilizada para saber a senha em que um determinado usuário tem acesso, porem a mesma deve ser criptografada para evitar invasões de hackers e terceiros.',
    usu_nivel_acesso int  NOT NULL COMMENT 'A coluna nível de acesso corresponde ao nível no qual um determinado usuário foi cadastrado.',
    Time_tim_id int  NOT NULL COMMENT 'A coluna time id e uma chave estrangeira da coluna time id da tabela time, representa a relação de um usuário com um time.',
    CONSTRAINT Usuario_pk PRIMARY KEY (usu_id)
) COMMENT 'A tabela usuário indica como devera ser o perfil e o nível de uso no ato do cadastro.';

-- foreign keys
-- Reference: Chamado_Usuario (table: Chamado)
ALTER TABLE Chamado ADD CONSTRAINT Chamado_Usuario FOREIGN KEY Chamado_Usuario (Usuario_usu_id)
    REFERENCES Usuario (usu_id);

-- Reference: Grupo_Time (table: Grupo)
ALTER TABLE Grupo ADD CONSTRAINT Grupo_Time FOREIGN KEY Grupo_Time (Time_tim_id)
    REFERENCES Time (tim_id);

-- Reference: Historico_Chamado (table: Historico)
ALTER TABLE Historico ADD CONSTRAINT Historico_Chamado FOREIGN KEY Historico_Chamado (Chamado_cha_id)
    REFERENCES Chamado (cha_id);

-- Reference: Iterresado_Chamado (table: Iterresado)
ALTER TABLE Iterresado ADD CONSTRAINT Iterresado_Chamado FOREIGN KEY Iterresado_Chamado (Chamado_cha_id)
    REFERENCES Chamado (cha_id);

-- Reference: Iterresado_Usuario (table: Iterresado)
ALTER TABLE Iterresado ADD CONSTRAINT Iterresado_Usuario FOREIGN KEY Iterresado_Usuario (Usuario_usu_id)
    REFERENCES Usuario (usu_id);

-- Reference: Midia_Chamado (table: Midia)
ALTER TABLE Midia ADD CONSTRAINT Midia_Chamado FOREIGN KEY Midia_Chamado (Chamado_cha_id)
    REFERENCES Chamado (cha_id);

-- Reference: Usuario_Time (table: Usuario)
ALTER TABLE Usuario ADD CONSTRAINT Usuario_Time FOREIGN KEY Usuario_Time (Time_tim_id)
    REFERENCES Time (tim_id);

-- End of file.

