JOINS
This weeks assignment focuses on emphasizing the use and understanding of joining tables

What you'll need:
Access to a computer with internet access
A code editor (e.g., Visual Studio Code)
Access to a database hospital_db.sql
Submission:
Clone the project on your local computer
Create a file named answers.sql
Run the queries on MySQL workbench and once they are successfull copy and paste on the answers.sql file on VS code
Make sure you clearly comment your answers. Example:
-- question 1.1
SELECT 
    t1.column_one,
    t2.column_two
FROM 
    table_one t1
INNER JOIN 
    table_two t2 ON t1.common_column = t2.common_column;


-- question 1.2
SELECT 
    t1.column_one,
    t2.column_two
FROM 
    table_one t1
LEFT JOIN 
    table_two t2 ON t1.common_column = t2.common_column;
Once you finish the assignment, push the code to github



Questions:
1. Simple Join
Write an SQL query to retrieve the provider_name and provider_specialty for each provider in the providers table.

2. Inner Join
Write an SQL query to find all patients who have visited a provider. Display the patient_id, first_name, last_name and provider_specialty.

3. Left Join
Write an SQL query to list all patients and their visit details, including those who have not had any visits. Display patient_id, first_name, last_name and date_of_visit. Include patients with no visits.

4. Join with Aggregation
Write an SQL query to find the number of visits each provider has had. Display the provider_name and the count of visits.

5. Complex Join With Conditions
Write an SQL query to find all patients who have had visits that required admission. Display the patient_id, first_name, last_name, admission_date and discharge_date. Ensure you join all relevant tables to get this information.


Bonus Question (optional)
Write an SQL query to find the details of patients who have had visits, including their first_name, last_name, date_of_birth and the details of the visits they have had, including provider_name, visit_date, blood_pressure_systolic, blood_pressure_diastolic and visit_status. Additionally, include information about the admissions and discharges related to these visits. Display patients who had admissions where the discharge disposition was 'Home', and order the results by the date_of_visit in descending order.

