create database cricket;
use cricket;
create table Batsman_data
(Batsman_name varchar(15), country varchar(10),
matches_played int, run_scored int, average float(4), innings int);
insert into Batsman_data values('RG Sharma', 'India', 9, 648, 81.00, 9);
insert into Batsman_data values('DA Warner', 'AUS', 10, 647, 71.88, 10);
insert into Batsman_data values('Shakib AI Hasan','BDESH', 8, 606, 86.57, 8);
insert into Batsman_data values('KS Williamson','NZ', 10, 578, 82.57, 9);
insert into Batsman_data values('JE Root','ENG', 11, 556, 61.77, 11);
insert into Batsman_data values('JM Bairstow','ENG', 11, 532, 48.36, 11);
insert into Batsman_data values('AJ Finch','AUS', 10, 507, 50.70, 10);
insert into Batsman_data values('Babar Azam','PAK', 8, 474, 67.71, 8);
insert into Batsman_data values('BA Stokes','ENG', 11, 465, 66.42, 10);
insert into Batsman_data values('JJ Roy','ENG', 8,443,63.28,7);
insert into Batsman_data values('V Kohli','India', 9, 443, 55.37,9);
insert into Batsman_data values('F du Plessis','SA',9,387,64.50,8);
insert into Batsman_data values('SPD Smith','AUS',10, 379, 37.90, 10);
insert into Batsman_data values('AT Carey','AUS',10, 375, 62.50, 9);
insert into Batsman_data values('EJG Morgan','ENG',11, 371, 41.22, 10);
insert into Batsman_data values('JO Holder', 'WI' , 9, 170, 108.97, 7);
insert into Batsman_data values('Rahmat Shah', 'AFG' , 9, 257, 36.71 , 9);
update Batsman_data
set average= 20.75
where Batsman_name='JO Holder';
insert into Batsman_data values('AD Mathews', 'SL' , 7, 244, 40.66 , 7);
insert into Batsman_data values('MDKJ Perera', 'SL' , 7, 273, 39.00 , 7);
insert into Batsman_data values('FDM Karunaratne', 'SL' , 7, 222, 37.00 , 7);
insert into Batsman_data values('WIA Fernando', 'SL' , 4, 203, 50.75 , 4);
insert into Batsman_data values('Najibullah', 'AFG' , 8, 230, 28.75 , 8);
insert into Batsman_data values('Gulbadin', 'AFG' , 9, 197, 24.62 , 9);
insert into Batsman_data values('CH Gayle', 'WI' , 9, 242, 30.25 , 8);
insert into Batsman_data values('SD Hope', 'WI' , 9, 274, 34.25 , 8);
insert into Batsman_data values('MS Dhoni', 'India' , 9, 273, 45.50 , 8);
insert into Batsman_data values('HH Pandya', 'India' , 9, 226, 32.28 , 9);
insert into Batsman_data values('Fakhar Zaman', 'PAK' , 8, 186, 23.25 , 8);
insert into Batsman_data values('Haris Sohail', 'PAK' , 5, 198, 39.60 , 5);
insert into Batsman_data values('LRPL Taylor', 'NZ' , 10, 350, 38.88 , 9);
insert into Batsman_data values('JDS Neesham', 'NZ' , 10, 232, 33.14 , 8);
insert into Batsman_data values('Tamim Iqbal', 'BDESH' , 8, 235, 29.37 , 8);
insert into Batsman_data values('Mahmudullah', 'BDESH' , 7, 219, 43.80 , 6);
insert into Batsman_data values('Q De Kock', 'SA' , 9, 305, 38.12 , 9);
insert into Batsman_data values('HM Amla', 'SA' , 7, 203, 40.60 , 7);


--  Creating table 2 Bowler_data
create table Bowler_data 
( Bowler_name varchar(15), country varchar(10), overs float(4), 
 runs_given int, wickets int);
insert into Bowler_data values('MA Starc','AUS',92.2, 502, 27);
insert into Bowler_data values('LH Ferguson','NZ', 83.4, 409, 21);
insert into Bowler_data values('JC Archer','ENG', 100.5, 461, 20);
insert into Bowler_data values('Mustafizur','BDESH', 72.1, 484, 20);
insert into Bowler_data values('JJ Bumrah','INDIA', 84.0, 371, 18);
insert into Bowler_data values('MA Wood','ENG', 89.4, 463, 18);
insert into Bowler_data values('Mohd Amir','PAK', 73.0, 358, 17);
insert into Bowler_data values('TA Boult','NZ',99.0, 479, 17);
insert into Bowler_data values('Afridi','PAK',47.1, 234, 16);
insert into Bowler_data values('CR Woakes','ENG', 85.0, 446, 16);
insert into Bowler_data values('JDS Neesham','NZ', 54.3, 292, 15);
insert into Bowler_data values('Shami','India',35.1, 193, 14);
insert into Bowler_data values('MJ Henry','NZ',80.2,392,14);
insert into Bowler_data values('PJ Cummins','AUS', 86.1,427, 14);
insert into Bowler_data values('CH Morris','SA',63.4, 341, 13);

-- Creating Table 3 Team_details
create table Team_details
( Team_name varchar(10), matches_played int, total_run_scored int) ;
insert into Team_details values('ENG', 10, 2957);
insert into Team_details values('AUS',9,2586);
insert into Team_details values('NZ',10,2154);
insert into Team_details values('IND',9,2516);
insert into Team_details values('SA',8,2009);
insert into Team_details values('SL',7,1621);
insert into Team_details values('PAK',8,2025);
insert into Team_details values('WI',8,1969);
insert into Team_details values('AFG',9,1831);
update Team_details
set Team_name='India'
where Team_name='IND';
-- Query 2
select Batsman_name, run_scored from Batsman_data where 1=1 order by run_scored DESC LIMIT 5;
-- Query 3
select Bowler_name, country from Bowler_data where 1=1 order by wickets DESC LIMIT 5;
-- Query 4
select Team_name, total_run_scored/ matches_played as Average_score from Team_details;
-- Query 5
update Batsman_data inner join Team_details
on Batsman_data.country=Team_details.team_name
set Batsman_data.run_scored=Batsman_data.run_scored+10
where Team_details.total_run_scored/Team_details.matches_played=(select min(Team_details.total_run_scored/Team_details.matches_played) 
from Team_details);
-- Query 6
alter table Team_details 
add column highest_marks_scored int;
update Team_details 
set highest_marks_scored=397
where Team_name='ENG';
update Team_details 
set highest_marks_scored=291
where Team_name='NZ';
update Team_details 
set highest_marks_scored=381
where Team_name='AUS';
update Team_details 
set highest_marks_scored=352
where Team_name='India';
update Team_details 
set highest_marks_scored=325
where Team_name='SA';
update Team_details 
set highest_marks_scored=338
where Team_name='SL';
update Team_details 
set highest_marks_scored=348
where Team_name='PAK';
update Team_details 
set highest_marks_scored=333
where Team_name='BDESH';
update Team_details 
set highest_marks_scored=321
where Team_name='WI';
update Team_details 
set highest_marks_scored=288
where Team_name='AFG';
alter table Team_details
rename column highest_marks_scored to highest_run_scored;
-- Procedure
delimiter $$
create procedure get_highestscore
( country_name varchar(10))
begin
select Team_name, highest_run_scored from Team_details
where Team_name = country_name;
end$$
call get_highestscore('India');