# HealthTOM - Radiology Worklist 

> A web application that allows radiologists to view and manage their exam worklist powered 
> with DICOM Viewer


# Features
- [x] Radiologists can securely log in to the web application.
- [X] Create a new Exam.
- [X] Comprehensive view the list of exams.
- [X] View DICOM images from local computer.
- [X] Viewing Functionalites
  - Window/Level
  - Zoom
  - Rotate
  - Pan
- [X] Add, Move & Remove Measurement tool to & from DICOM images.
  - [X] Length
  - [X] Angle
  - [X] Ellipse
  - [X] Rectangle
  - [X] Freehand
  - [X] Eraser


## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of `node.js` and `npm`.
* You have a `Windows` machine. This project may run on other operating systems but it was developed and tested on `Windows`.
* You have ASP.NET Core 8 installed on your machine.
* You have SQL Server.
* You have SSMS.

## Installation

To install <project_name>, follow these steps:

1. Clone the repository:
```bash
git clone git@github.com:1brahimmohamed/HealthTOM-Radiology-Worklist.git
```

2. Navigate to the project directory:
```bash
cd HealthTOM-Radiology-Worklist
```

3. Install the frontend dependencies:
```bash
cd cli
npm install
```

## Run the application

To use <project_name>, follow these steps:

1. Start the backend server:
```bash
cd srv
dotnet watch run
```
2. Start the frontend server:
```bash
cd cli
npm run dev
```

3. Open your web browser and visit `http://localhost:5173`.


## Demo
[demo.mp4](demo%2Fdemo.mp4)


## Contact

If you want to contact me you can reach me at `ibrahim.mohamed01@eng-stu.cu.edu.eg`
