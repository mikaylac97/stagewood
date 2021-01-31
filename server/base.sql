CREATE TABLE User (
 id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
 first_name VARCHAR(100),
 last_name VARCHAR(100),
 email VARCHAR(255) UNIQUE NOT NULL,
 password VARCHAR (255),
 profile_pic VARCHAR(255),
 username VARCHAR(100)
);

INSERT INTO User (
    first_name,
    last_name,
    email,
    password,
    profile_pic,
    username
) VALUES (
    'Mikayla',
    'Castro',
    'mtryingdiff@gmail.com',
    'Test12345',
    'https://as2.ftcdn.net/jpg/03/32/59/65/500_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg',
    'mtryingdiff'
);
