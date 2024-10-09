import random
from faker import Faker

fake = Faker()

# Configuration
NUM_PATIENTS = 1000
NUM_PROVIDERS = 100
NUM_APPOINTMENTS = 3000  # 3 appointments per patient on average

# Specialties list
SPECIALTIES = [
    'Pediatrics', 'Cardiology', 'Dermatology', 'Neurology',
    'Orthopedics', 'Oncology', 'Psychiatry', 'Radiology',
    'Gastroenterology', 'Endocrinology', 'Nephrology',
    'Ophthalmology', 'Urology', 'Rheumatology', 'Hematology'
]

# Open a file to write the SQL script
with open('hospital_database.sql', 'w') as f:
    # Create Database and Tables
    f.write('-- Create the hospital database\n')
    f.write('CREATE DATABASE IF NOT EXISTS HospitalDB;\n')
    f.write('USE HospitalDB;\n\n')

    # Create Patients Table
    f.write('-- Create the patients table\n')
    f.write('CREATE TABLE IF NOT EXISTS patients (\n')
    f.write('    patient_id INT AUTO_INCREMENT PRIMARY KEY,\n')
    f.write('    first_name VARCHAR(50),\n')
    f.write('    last_name VARCHAR(50),\n')
    f.write('    date_of_birth DATE,\n')
    f.write('    gender ENUM(\'Male\', \'Female\', \'Other\'),\n')
    f.write('    language VARCHAR(50)\n')
    f.write(');\n\n')

    # Create Providers Table
    f.write('-- Create the providers table\n')
    f.write('CREATE TABLE IF NOT EXISTS providers (\n')
    f.write('    provider_id INT AUTO_INCREMENT PRIMARY KEY,\n')
    f.write('    provider_name VARCHAR(100),\n')
    f.write('    speciality VARCHAR(100),\n')
    f.write('    phone_number VARCHAR(20),\n')
    f.write('    email VARCHAR(100)\n')
    f.write(');\n\n')

    # Create Appointments Table
    f.write('-- Create the appointments table\n')
    f.write('CREATE TABLE IF NOT EXISTS appointments (\n')
    f.write('    appointment_id INT AUTO_INCREMENT PRIMARY KEY,\n')
    f.write('    patient_id INT,\n')
    f.write('    provider_id INT,\n')
    f.write('    appointment_date DATE,\n')
    f.write('    reason VARCHAR(255),\n')
    f.write('    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),\n')
    f.write('    FOREIGN KEY (provider_id) REFERENCES providers(provider_id)\n')
    f.write(');\n\n')

    # Insert Patients
    f.write('-- Insert data into patients table\n')
    f.write('INSERT INTO patients (first_name, last_name, date_of_birth, gender, language) VALUES\n')
    patient_values = []
    for _ in range(NUM_PATIENTS):
        first_name = fake.first_name().replace("'", "''")
        last_name = fake.last_name().replace("'", "''")
        dob = fake.date_of_birth(minimum_age=0, maximum_age=100).strftime('%Y-%m-%d')
        gender = random.choice(['Male', 'Female', 'Other'])
        language = fake.language_name().replace("'", "''")
        patient_values.append(f"('{first_name}', '{last_name}', '{dob}', '{gender}', '{language}')")
    # Join all patient entries with commas and end with a semicolon
    f.write(',\n'.join(patient_values) + ';\n\n')

    # Insert Providers
    f.write('-- Insert data into providers table\n')
    f.write('INSERT INTO providers (provider_name, speciality, phone_number, email) VALUES\n')
    provider_values = []
    for _ in range(NUM_PROVIDERS):
        provider_name = f"Dr. {fake.first_name()} {fake.last_name()}".replace("'", "''")
        speciality = random.choice(SPECIALTIES)
        phone_number = fake.phone_number().replace("'", "''")
        email = fake.email().replace("'", "''")
        # Introduce NULL emails randomly (10% chance)
        if random.random() < 0.1:
            email_value = 'NULL'
        else:
            email_value = f"'{email}'"
        provider_values.append(f"('{provider_name}', '{speciality}', '{phone_number}', {email_value})")
    f.write(',\n'.join(provider_values) + ';\n\n')

    # Insert Appointments
    f.write('-- Insert data into appointments table\n')
    f.write('INSERT INTO appointments (patient_id, provider_id, appointment_date, reason) VALUES\n')
    appointment_values = []
    for _ in range(NUM_APPOINTMENTS):
        patient_id = random.randint(1, NUM_PATIENTS)
        provider_id = random.randint(1, NUM_PROVIDERS)
        appointment_date = fake.date_between(start_date='-2y', end_date='today').strftime('%Y-%m-%d')
        reason = fake.sentence(nb_words=6).replace("'", "''")
        appointment_values.append(f"({patient_id}, {provider_id}, '{appointment_date}', '{reason}')")
    # Join all appointment entries with commas and end with a semicolon
    f.write(',\n'.join(appointment_values) + ';\n')

print("SQL script 'hospital_database.sql' has been generated successfully.")
