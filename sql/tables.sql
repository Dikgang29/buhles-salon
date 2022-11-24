-- Table create scripts here
create table client (
	id serial not null primary key,
	first_name text not null,
    last_name text not null,
    phone_number varchar(10) not null
);




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
    phone_number varchar(10) not null,
    commission_percentage NUMERIC(3,2)
);

create table booking(
    id serial primary key not null,
    client_id int not null,
    treatment_id int not null,
    stylist_id int not null,
    booking_date date not null,
    booking_time time not null,
    foreign key (client_id) references client(id) ,
    foreign key (treatment_id) references treatment(id),
    foreign key (stylist_id) references stylist(id)
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

-- inserting stylists
insert into stylist (stylist_name,stylist_last_name,phone_number,commission_percentage) values('Paballo','Semi','0784516098',0.09);
insert into stylist (stylist_name,stylist_last_name,phone_number,commission_percentage) values('Tetelo','Sithole','0845789601',0.19);
insert into stylist (stylist_name,stylist_last_name,phone_number,commission_percentage) values('Fifi','Mphahlele','086415796',0.07);
insert into stylist (stylist_name,stylist_last_name,phone_number,commission_percentage) values('Katlego','Danke','0785554890',0.15);