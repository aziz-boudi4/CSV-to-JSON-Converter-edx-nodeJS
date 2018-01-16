const fs = require('fs');
const csv = require('csvtojson')
const csvFilePath = './customer-data.csv'

const convertCsvToJson = (theCsvFilePath=csvFilePath) => {
  // create a json variable where the converted csv will be pushed
  const myJson =[];

  csv()
    .fromFile(theCsvFilePath)
    .on('json', (jsonObj) => {
      // push converted csv to the array json
      myJson.push(jsonObj)
      fs.writeFileSync(('customer-data.json'), JSON.stringify(myJson))
    })
    .on('done', (error) => {
      if (error) throw error
      console.log(`end csv has been converted into JSON file and has been saved in customer-data.json`)
    })
}

convertCsvToJson(process.argv[2]);
