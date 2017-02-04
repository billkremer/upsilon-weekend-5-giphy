CREATE DATABASE upsilon_giphy_favs;


CREATE TABLE giphy_favs (
	id SERIAL PRIMARY KEY,
	giphy_url TEXT,
	giphy_comment TEXT,
--	giphy_alt_text TEXT --???
	);


INSERT INTO giphy_favs (giphy_url, giphy_comment)
VALUES 	('https://media3.giphy.com/media/Hx0byU4vrktXi/giphy.gif', 'Vacuum the living room'),
				('http://media1.giphy.com/media/lBKe0jjCo0wLu/giphy.gif,''Wash the dishes'),
				('http://media0.giphy.com/media/JU5c9UULUcGl2/giphy.gif','Pretty Sure');
