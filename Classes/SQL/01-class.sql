CREATE TABLE students (
    student_id SERIAL PRIMARY KEY, --serial auto incremented, Primary key is unique  + never be null
    first_name VARCHAR(50) NOT NULL, --my first name should have max 50 letters
    last_name VARCHAR(50), -- 50 * 8 bits

    email VARCHAR(322) UNIQUE NOT NULL,
    phone_number VARCHAR(10) UNIQUE, --4000 bytes vs 10 bytes
    country_code VARCHAR(4),

    age INT CHECK (age > 12)

    current_status VARCHAR(20) DEFAULT 'active' CHECK (current_status IN ('active', 'graduated', 'dropped_out')) -- ()->  this is array
    
    masterji_handle VARCHAR(50) UNIQUE, -- masterji username

    has_joined_masterji BOOLEAN DEFAULT FALSE,

    current_score INT DEFAULT 0 CHECK (current_score >= 0  AND current_score <= 100)

    
)
