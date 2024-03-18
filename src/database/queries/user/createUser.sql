INSERT INTO "User" ( name, avatarUrl, email, createdAt, updatedAt, role, agencyId, idclerk)
VALUES (
    $1,
    $2,
    $3, 
    CURRENT_TIMESTAMP, 
    CURRENT_TIMESTAMP, 
    $4,
    $5,
    $6
);