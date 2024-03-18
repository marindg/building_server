UPDATE "User"
SET name = $2, avatarUrl = $3, email = $4, updatedAt = CURRENT_TIMESTAMP, role = $5, agencyId = $6
WHERE id = $1 OR idclerk = $7;

