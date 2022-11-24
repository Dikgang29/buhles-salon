-- Add insert scripts here
create database salon_test;
create role salon_admin login password 'salon123';
grant all privileges on database salon_test to salon_admin;

-- GRANT ALL PRIVILEGES on TABLE user_names TO salon_admin;
-- GRANT ALL PRIVILEGES on SEQUENCE user_names_id_seq TO salon_admin