insert into Friends ( img, auth_id )
    values ( $1, $2 )
    returning *;