-- Question 1: Simple Join
-- Retrieve the provider_name and provider_specialty for each provider in the providers table.
SELECT 
    provider_name,
    provider_specialty
FROM 
    providers;

-- Question 2: Inner Join
-- Find all patients who have visited a provider. Display the patient_id, first_name, last_name and provider_specialty.
SELECT 
    p.patient_id,
    p.first_name,
    p.last_name,
    pr.provider_specialty
FROM 
    patients p
INNER JOIN 
    visits v ON p.patient_id = v.patient_id
INNER JOIN 
    providers pr ON v.provider_id = pr.provider_id;

-- Question 3: Left Join
-- List all patients and their visit details, including those who have not had any visits. Display patient_id, first_name, last_name and date_of_visit.
SELECT 
    p.patient_id,
    p.first_name,
    p.last_name,
    v.date_of_visit
FROM 
    patients p
LEFT JOIN 
    visits v ON p.patient_id = v.patient_id;

-- Question 4: Join with Aggregation
-- Find the number of visits each provider has had. Display the provider_name and the count of visits.
SELECT 
    pr.provider_name,
    COUNT(v.visit_id) as num_visits
FROM 
    providers pr
INNER JOIN 
    visits v ON pr.provider_id = v.provider_id
GROUP BY 
    pr.provider_name;

-- Question 5: Complex Join With Conditions
-- Find all patients who have had visits that required admission. Display the patient_id, first_name, last_name, admission_date and discharge_date.
SELECT 
    p.patient_id,
    p.first_name,
    p.last_name,
    a.admission_date,
    a.discharge_date
FROM 
    patients p
INNER JOIN 
    visits v ON p.patient_id = v.patient_id
INNER JOIN 
    admissions a ON v.visit_id = a.visit_id
WHERE 
    a.admission_date IS NOT NULL AND a.discharge_date IS NOT NULL;

-- Bonus Question (optional)
-- Find the details of patients who have had visits, including their first_name, last_name, date_of_birth and the details of the visits they have had.
-- Additionally, include information about the admissions and discharges related to these visits.
-- Display patients who had admissions where the discharge disposition was 'Home', and order the results by the date_of_visit in descending order.
SELECT 
    p.first_name,
    p.last_name,
    p.date_of_birth,
    v.date_of_visit,
    pr.provider_name,
    v.blood_pressure_systolic,
    v.blood_pressure_diastolic,
    v.visit_status,
    a.admission_date,
    a.discharge_date
FROM 
    patients p
INNER JOIN 
    visits v ON p.patient_id = v.patient_id
INNER JOIN 
    providers pr ON v.provider_id = pr.provider_id
LEFT JOIN 
    admissions a ON v.visit_id = a.visit_id
WHERE 
    a.discharge_disposition = 'Home'
ORDER BY 
    v.date_of_visit DESC;