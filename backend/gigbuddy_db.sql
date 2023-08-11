drop database gigbuddydb;
drop user gigbuddy;

-- create user and database
create user gigbuddy with password 'password';
create database gigbuddydb with template=template0 owner=gigbuddy;
\connect gigbuddydb;


-- grant default privileges to user
alter default privileges grant all on tables to gigbuddy;
alter default privileges grant all on sequences to gigbuddy;

--create user table
create table gb_users(
user_id integer primary key not null,
first_name varchar(20) not null,
last_name varchar(20) not null,
email varchar(50)not null,
password text not null,
attend_event_id integer not null
);

--create events table
create table gb_event(
event_id integer primary key not null,
event_name varchar(20) not null,
event_venue varchar(20) not null,
event_address varchar (200) not null,
performer_name varchar (50),
description varchar(200) not null,
attend_event_id integer not null
);

--create attending event table
create table gb_attend_event(
attend_event_id integer primary key not null,
event_id integer not null,
event_name varchar(20) not null,
user_id integer not null
);

--assign foreign keys to user table
alter table gb_users add constraint attend_fk
foreign key (attend_event_id) references gb_attend_event(attend_event_id);

--assign foreign keys to events table
alter table gb_event add constraint attend_fk
foreign key (attend_event_id) references gb_attend_event(attend_event_id);

--assign foreign keys to attending events table
alter table gb_attend_event add constraint event_fk
foreign key (event_id) references gb_event(event_id);
alter table gb_attend_event add constraint user_fk
foreign key (user_id) references gb_users(user_id);

--generate primary key values
create sequence gb_users increment 1 start 1;
create sequence gb_event increment 1 start 1;
create sequence gb_attend_event increment 1 start 1000;