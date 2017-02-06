CREATE DATABASE upsilon_giphy_favs;


CREATE TABLE giphy_favs (
	id SERIAL PRIMARY KEY,
	giphy_url TEXT,
	giphy_comment TEXT,
	giphy_alt TEXT
	);


INSERT INTO giphy_favs (giphy_url, giphy_comment, giphy_alt)
VALUES
				('http://media0.giphy.com/media/Py6pbctfBRcw8/giphy.gif', 'Vacuum the living room', 		'http://giphy.com/gifs/tocaboca-dance-toca-boca-Py6pbctfBRcw8'),
				('http://media3.giphy.com/media/n1Old9s8Qumk0/giphy.gif', 'Wash the dishes', 'http://giphy.com/gifs/dancing-robot-n1Old9s8Qumk0'),
				('http://media2.giphy.com/media/sAEQIkGWVLHVK/giphy.gif','Pretty Sure', 'http://giphy.com/gifs/orange-sAEQIkGWVLHVK');
