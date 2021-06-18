# Assignment 19:  React Employee Directory

  [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)

***

  ## Description:
  This application uses several technologies that will allow a user to tracker a simple budget.  The application can sense if there is an internet connection to ensure the transaction is save online or offline.    
   
***
  ## Table of Contents:
  1.  [Description](#description)
  2.  [Demonstration](#demonstration)
  3.  [Installation](#installation)
  4.  [Screenshots](#screenshots)
  5.  [Technologies](#technologies)
  6.  [Usage](#usage)
  7.  [License](#license)
  8.  [Contributing](#contributing)
  9.  [Tests](#tests)
  10.  [Questions](#questions)

***
  ## Demonstration:
  [Deployed Website Link on Heroku]()

***
  ## Installation:
  To use this application, the user can fork or clone.  Then run `npm install`. See the technologies section for the application dependencies.  In addition, the user will need to connect to an active or local Mongo database server for full functionality.  However, any users may freely use this deployed application at the above deploy application website.

***
  ## Screenshots:
  ### (Deployed Application)
  ![Deployed Application](./public/images/)

  ### (Entering Multiple Transactions)
  ![Entering Multiple Transactions](./public/images/)

  ### (Entering Transaction No Internet)
  ![Entering Transaction No Internet](./public/images/)

  ### (Clearing IndexedDB to Save In MongoDB)
  ![Clearing IndexedDB to Save In MongoDB](./public/images/)

  ### (Offline Transactions Saved to Database)
  ![Offline Transactions Saved to Database](./public/images/)

***
  ## Technologies
    - Node.js
    - Express.js
    - MongoDB
    - Mongoose
    - Javascript
    - Dotenv
    - Morgan
    - Bootstrap
    - indexedDB 

  ## Usage:
  This application utilizes several web and database technologies that allows a user to enter transactions that are saved in a budget tracker.  The transactions are saved in MongDb when there is an internet connection and index_db when the application is offline.  Offline transactions are saved in the index_db until the application goes back online.  The storage of the transaction is transparent to the average user and is seemlessly stored into a Mongo database. The Morgan logger module is used to monitor user request and responses.   
   
***
  ## License:
  This project falls under the MIT License.  The full documentation for this license can be found at [MIT Full Documentation](https://choosealicense.com/licenses/mit).

  Below is an excerpt of the MIT License.
  <br>
  Copyright <YEAR> <COPYRIGHT HOLDER>
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  ## Contributing:
  To contribute to this project, please send an email.  
  <br>
  The contributors for this project are:
    - D. Javan Worthy

***
  ## Tests:
  The web browser can be used to test this application.  Transactions and the dollar amounts can be inputted and then verified if the data is saved in index_db when offline and Mongodb Atlas with online.  In addition, data/communication routes must be verified before this application can be properly deployed. In addition, there must be an operational database and it must be connected to the application to receive the full functionality.  

***
  ## Questions:
  - The GitHub profiles for this project are:
   - https://github.com/djavanw
 
  - If there are any questions, please contact Alex at emailfake@gmail.com.