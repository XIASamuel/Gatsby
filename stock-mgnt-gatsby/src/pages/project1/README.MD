# :blush: GPA Tracker for ABAC VMS Student
### Author: CHUANGJIAN XIA
A web application in Gatsby to help students keep track of their grades and calculate their GPA. <br/>
This Web Application allows student to create semester and add course with grade to specific semester. The GPA per semester and Overall GPA will be calculated automatically and generate a line chart to see the GPA for everysemester
(This is only for VMS students in Assumption University of Thailand whose student ID is 62xxxxx or 63xxxxx.)

## Getting Started
To run the GPA Tracker on your local machine, follow these steps:
1. Install NVM (Node Version Manager): https://github.com/nvm-sh/nvm

2. Use NVM to install Node version 18:
```
nvm install 18
```

3. Create a new Gatsby Project:
```
npx gatsby new stock-mgnt-gatsby
```

4. Download Used library:
```
npm i chart.js
npm i react-chartjs-2
```

5. Clone this repository
6. Start the development server with
```
npm run develop
```

7. Open http://localhost:8000 in your browser to view the application

## Example of Running Program (Screenshot)
### 1. Choose Major (CS or IT):
![Screenshot_20230209_113003](https://user-images.githubusercontent.com/118668843/217877980-55f7e84b-10bc-457f-8ce5-3e36c7aef735.png)

### 2. Create Semester:
![Screenshot_20230209_113042](https://user-images.githubusercontent.com/118668843/217878519-ae7da038-1562-40da-ae5e-3e9ac0d5a215.png)
![Screenshot_20230209_113118](https://user-images.githubusercontent.com/118668843/217878553-a916cf31-3f8b-412b-8e5a-a16873374471.png)
<br>Click the Button "Create Semester" and The Semester list will show

### 3. Choose course from Course List and Click "Add" Button:
![Screenshot_20230209_113018](https://user-images.githubusercontent.com/118668843/217879804-d022f0fc-a455-4767-821f-88483a8ac0c9.png)

### 4. Choose Semester and Grade:
![Screenshot_20230209_113136](https://user-images.githubusercontent.com/118668843/217880020-80ffa63c-c7e4-4c25-86cf-1b2f37a649f6.png)
![Screenshot_20230209_113150](https://user-images.githubusercontent.com/118668843/217880041-f0fbd295-196b-4de6-993d-d0fa9219491e.png)
After choose both semester and grade, Click on "Add To Semester" Button. (If you haven't select both semester and grade, the add button will not work) 

### 5. The Semester GPA and Overall GPA has calculated and generated line Chart:
![Screenshot_20230209_113256](https://user-images.githubusercontent.com/118668843/217881414-a85d7cee-7ede-4ab6-b2dd-f44fa4bfd942.png)

### 6. Click "Clear Semester" Button to clear all data:
### 7. Click "Home" Button back to index page which is choose Major
    
### 8. If you choose Information Technology, the function is same as Computer Science (Showed above)
![Screenshot_20230209_113400](https://user-images.githubusercontent.com/118668843/217881450-6cc64cb4-a7d8-4fe0-805b-c2bfa77e70eb.png)

## :face_exhaling:Features and Shorts
Features: <br>
1. This Web Application is easy to understand and use
2. All vms student (62x and 63x) can easily track on their GPA and the line Chart is clealy shows the GPA for Everysemester, and shows you whether you are Progress or Regression

Shorts: <br>
1. If you insert course into wrong semester or set the wrong grade, you can't delete that record and you can only clear all semester and do it again.
2. You can add Same Course again and again with different grade
3. Each semester don't have course limit
