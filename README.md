Soure: http://programmerblog.net/nodejs-mongodb-rest-api/"

1. Download file .zip or clone this file.
2. Run mongo service: sudo service mongod start
3. Run in cmd/terminal: node app
4. Open Postman App and test some examples:
	- GET method: http://localhost:3000/tags => see documnets in tags collection
				  http://localhost:3000/logs => see documnets in logs collection

	- POST method: Click on Body. There are multiple options, click on x-www-form-urlencoded. You can enter data as Key, Value pairs. Key contains column name and value contains value for columns in collection.