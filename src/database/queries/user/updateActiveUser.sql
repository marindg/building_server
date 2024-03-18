UPDATE "User"
SET active = $2, updatedAt = CURRENT_TIMESTAMP
WHERE idclerk = $1;

