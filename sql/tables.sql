-- Table create scripts here
create table client (
	id serial not null primary key,
	first_name text not null,
    last_name text not null,
    phone_number varchar(10) not null
);

GRANT ALL PRIVILEGES on TABLE client TO salon_admin;



create table treatment (
	id serial not null primary key,
	treatment_type text not null,
    code text not null,
    price int not null
);


create table stylist (
	id serial not null primary key,
	stylist_name text not null,
    stylist_last_name text not null,
    phone_number int not null,
    commission_percentage NUMERIC(3,2)
);














-- inserting treatments
insert into treatment(treatment_type,code,price) values('Pedicure','pedi',175);
insert into treatment(treatment_type,code,price) values('Manicure','mani',215);
insert into treatment(treatment_type,code,price) values('Make up','make',185);
insert into treatment(treatment_type,code,price) values('Brows & Lashes','b&l',240);

-- inserting clients
insert into client (first_name,last_name,phone_number) values('Pabi','Masemola','0725789641');
insert into client (first_name,last_name,phone_number) values('Lerato','Lekgau','0625478931');
insert into client (first_name,last_name,phone_number) values('Tshego','Bambo','0724569803');
insert into client (first_name,last_name,phone_number) values('KB','Matsaung','0827780466');
insert into client (first_name,last_name,phone_number) values('Kaboentle','Bee','0787952031');
insert into client (first_name,last_name,phone_number) values('Boitumelo','Bambo','0798851005');
insert into client (first_name,last_name,phone_number) values('Nare','Moloto','0797891005');
insert into client (first_name,last_name,phone_number) values('Lebogang','Ramoba','0784561230');