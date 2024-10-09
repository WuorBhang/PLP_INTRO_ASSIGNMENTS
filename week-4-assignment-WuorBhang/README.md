# SQL Practice with INSERT, UPDATE, DELETE, IFNULL and COALESCE
This exercises are focused on data manipulation and handling NULL values using the sample data provided earlier. The exercises cover the following SQL operations: INSERT, UPDATE, DELETE, IFNULL, and COALESCE.

## What you'll need:
- Access to a computer
- A code editor eg Visual Studio Code

## Submission
- Clone the project on your local computer
- Create a file named ```answers.sql```
- Run the queries on MySQL workbench and once they are successfull copy and paste on the ```answers.sql``` file on VS code
- Make sure you clearly comment your answers. For example:
```sql
-- question 1.2
INSERT INTO table_name (column1, column2, column3)
VALUES ('data1', 'data2', 'data3');

-- question 1.2
DELETE FROM users
WHERE user_id = 3;
```
- Once you finish the assignment, push the code to github.

<br/><br/>
## Part 1: INSERT Data
**1.1).** Add a new patient with the following details <br/>
- First Name: John
- Second Name: Doe
- Date of Birth: 15-11-1980
- Gender: Male
- Language: English

<br/>

## Part 2: UPDATE Data
**2.1).** Write a query to change John Doe's languge from "English" to "Spanish"

<br/>

## Part 3: DELETE Data
**3.1).** Delete the patient with the patient_id number 10

<br/>

## Part 4: Handling NULL Values
**4.1).** Write a query to find that takes all the names and the emails of the providers and if any of them has a ```NULL``` email, replace it with ```N/A```<br/>
**4.2).** Write a query that takes the names and contact details of the provider whether phone number or email and if any of the two is missing, replace it with ```Missing details```

<br/><br/>
## Bonus question(Optional)
Write a query to retrieve all providers whose speciality is pediatrics and they are missing either of the contact details.

<br/><br/>
# NOTE: Do not fork this repository
