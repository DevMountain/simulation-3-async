insert into table Friends ( hobbies, birthdayYear, birthdayMonth, birthdayDay, gender, name_last, name_first, hairColor, eyeColor )
    values ( $1, $2, $3, $4, $5, $6, $7, $8, $9 )
    returning *;