const express = require('express')
const app = express()

app.get('/demo/:type/:value', (req, res) => {
  const type = req.params.type
  const value = req.params.value
  // Find the user with the given user ID
  const user = userData.find((user) => {
    if(type == "id")
      return user.id === value
    else if (type == "phone")
      return user.PhoneNumber == value
  });

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
});

const userData = [
 {
   "id": "9451b3c9-98eb-468c-9bf1-52d2d0b4aed0",
   "Title": "Mrs.",
   "MiddleInitial": "D",
   "StreetAddress": "3510 Mesa Drive",
   "State": "NV",
   "StateFull": "Nevada",
   "Country": "US",
   "CountryFull": "United States",
   "Username": "Woreat",
   "Password": "Gaipah8H",
   "BrowserUserAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134",
   "TelephoneCountryCode": 91,
   "Birthday": "9/15/1943",
   "Age": 79,
   "TropicalZodiac": "Virgo",
   "CCType": "Visa",
   "CCNumber": 4716930000000000,
   "CVV2": 634,
   "CCExpires": "Aug-26",
   "NationalID": "680-01-2629",
   "UPS": "1Z 9Y2 327 13 4152 545 0",
   "WesternUnionMTCN": 1849913658,
   "MoneyGramMTCN": 92237531,
   "Color": "Green",
   "Occupation": "Specialist",
   "Company": "Multi Tech Development",
   "Vehicle": "2010 Chevrolet Optra",
   "Domain": "guidetotampabay.com",
   "BloodType": "B+",
   "Pounds": 118.1,
   "Kilograms": 53.7,
   "FeetInches": "5' 5\"",
   "Centimeters": 166,
   "GUID": "66f41425-5270-4f8d-acfe-a0f54994561f",
   "Latitude": 36.166203,
   "Longitude": -115.23965,
   "GivenName": "Sandra",
   "Surname": "Gomes",
   "City": "North Las Vegas",
   "ZipCode": 89032,
   "Gender": "female",
   "EmailAddress": "SandraDGomes@cuvox.de",
   "TelephoneNumber": "8050854285",
   "PhoneNumber" : "+918050854285",
   "MothersMaiden": "Nelson"
 },
 {
   "id": "fb2b3a80-469e-448c-8513-989ef9c4a5a1",
   "Title": "Mr.",
   "MiddleInitial": "M",
   "StreetAddress": "296 Orchard Street",
   "State": "MN",
   "StateFull": "Minnesota",
   "Country": "US",
   "CountryFull": "United States",
   "Username": "Wasseene",
   "Password": "Eethaasha6",
   "BrowserUserAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36",
   "TelephoneCountryCode": 1,
   "Birthday": "6/18/1952",
   "Age": 71,
   "TropicalZodiac": "Gemini",
   "CCType": "MasterCard",
   "CCNumber": 5199520000000000,
   "CVV2": 459,
   "CCExpires": "May-25",
   "NationalID": "468-21-5110",
   "UPS": "1Z 164 6V6 92 0688 234 3",
   "WesternUnionMTCN": 665096008,
   "MoneyGramMTCN": 70490955,
   "Color": "Blue",
   "Occupation": "Flight engineer",
   "Company": "Egghead Software",
   "Vehicle": "1992 Lexus SC",
   "Domain": "pensanteconsult.com",
   "BloodType": "O+",
   "Pounds": 199.5,
   "Kilograms": 90.7,
   "FeetInches": "5' 6\"",
   "Centimeters": 167,
   "GUID": "31563196-a27f-427d-9afc-782e7414a897",
   "Latitude": 44.811593,
   "Longitude": -93.291285,
   "GivenName": "Thomas",
   "Surname": "Smith",
   "City": "Burnsville",
   "ZipCode": 55337,
   "Gender": "male",
   "EmailAddress": "ThomasMSmith@teleworm.us",
   "TelephoneNumber": "952-736-1456",
   "PhoneNumber" : "+19527361456",
   "MothersMaiden": "Marshall"
 },
 {
   "id": "25476a68-2018-4a20-839f-3bfa6446d6a7",
   "Title": "Mr.",
   "MiddleInitial": "P",
   "StreetAddress": "2241 Hurry Street",
   "State": "VA",
   "StateFull": "Virginia",
   "Country": "US",
   "CountryFull": "United States",
   "Username": "Buit1944",
   "Password": "Yoom9yezohPh",
   "BrowserUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36",
   "TelephoneCountryCode": 1,
   "Birthday": "10/29/1944",
   "Age": 78,
   "TropicalZodiac": "Scorpio",
   "CCType": "Visa",
   "CCNumber": 4485750000000000,
   "CVV2": 903,
   "CCExpires": "Sep-27",
   "NationalID": "231-38-4300",
   "UPS": "1Z 3Y7 919 12 2386 577 0",
   "WesternUnionMTCN": 956058712,
   "MoneyGramMTCN": 66253087,
   "Color": "Red",
   "Occupation": "Creative writer",
   "Company": "Giant",
   "Vehicle": "2001 Toyota MR2",
   "Domain": "tradasys.com",
   "BloodType": "O+",
   "Pounds": 213.2,
   "Kilograms": 96.9,
   "FeetInches": "5' 5\"",
   "Centimeters": 164,
   "GUID": "ed37af5e-605f-493c-abbf-d63a2c8547c1",
   "Latitude": 37.400162,
   "Longitude": -79.836027,
   "GivenName": "Enrique",
   "Surname": "Anaya",
   "City": "Roanoke",
   "ZipCode": 24012,
   "Gender": "male",
   "EmailAddress": "EnriquePAnaya@einrot.com",
   "TelephoneNumber": "540-362-3953",
   "PhoneNumber" : "+15403623953",
   "MothersMaiden": "Cooke"
 },
 {
   "id": "6754b624-67f6-4d95-b064-d50586a6e2ce",
   "Title": "Ms.",
   "MiddleInitial": "C",
   "StreetAddress": "2728 Harley Brook Lane",
   "State": "PA",
   "StateFull": "Pennsylvania",
   "Country": "US",
   "CountryFull": "United States",
   "Username": "Looris",
   "Password": "neeXulooz9O",
   "BrowserUserAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36",
   "TelephoneCountryCode": 1,
   "Birthday": "5/23/1941",
   "Age": 82,
   "TropicalZodiac": "Gemini",
   "CCType": "Visa",
   "CCNumber": 4539230000000000,
   "CVV2": 532,
   "CCExpires": "Apr-24",
   "NationalID": "169-78-9468",
   "UPS": "1Z 637 092 25 1239 144 7",
   "WesternUnionMTCN": 4552709236,
   "MoneyGramMTCN": 33773217,
   "Color": "Blue",
   "Occupation": "Instructional designer",
   "Company": "Techo Solutions",
   "Vehicle": "2003 Isuzu D-MAX",
   "Domain": "greenwellhyd.com",
   "BloodType": "O+",
   "Pounds": 177.1,
   "Kilograms": 80.5,
   "FeetInches": "5' 6\"",
   "Centimeters": 168,
   "GUID": "0a015541-382c-496f-91e0-7cac1d96ede4",
   "Latitude": 40.367984,
   "Longitude": -77.845194,
   "GivenName": "Dana",
   "Surname": "Florez",
   "City": "Mount Union",
   "ZipCode": 17066,
   "Gender": "female",
   "EmailAddress": "DanaCFlorez@gustr.com",
   "TelephoneNumber": "814-542-4540",
   "PhoneNumber" : "+18145424540",
   "MothersMaiden": "Fletcher"
 },
 {
   "id": "2728635c-4684-4ae3-81dd-30f8ec19d55d",
   "Title": "Mr.",
   "MiddleInitial": "B",
   "StreetAddress": "255 Hamill Avenue",
   "State": "CA",
   "StateFull": "California",
   "Country": "US",
   "CountryFull": "United States",
   "Username": "Handess",
   "Password": "oeX3Ij1ee",
   "BrowserUserAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
   "TelephoneCountryCode": 1,
   "Birthday": "4/25/1960",
   "Age": 63,
   "TropicalZodiac": "Taurus",
   "CCType": "Visa",
   "CCNumber": 4532980000000000,
   "CVV2": 830,
   "CCExpires": "Jan-25",
   "NationalID": "573-49-1257",
   "UPS": "1Z 710 W78 02 0534 589 8",
   "WesternUnionMTCN": 4385448632,
   "MoneyGramMTCN": 29573437,
   "Color": "Green",
   "Occupation": "Administrative office manager",
   "Company": "McDade's",
   "Vehicle": "2001 Beijing BJ 2021",
   "Domain": "AnMRI.com",
   "BloodType": "B+",
   "Pounds": 239.4,
   "Kilograms": 108.8,
   "FeetInches": "5' 8\"",
   "Centimeters": 172,
   "GUID": "cf0b69c0-b697-4f2b-89f6-f8e7d8c9b7df",
   "Latitude": 32.99892,
   "Longitude": -117.26342,
   "GivenName": "Derrick",
   "Surname": "Archey",
   "City": "San Diego",
   "ZipCode": 92121,
   "Gender": "male",
   "EmailAddress": "DerrickBArchey@jourrapide.com",
   "TelephoneNumber": "858-357-2716",
   "PhoneNumber" : "+18583572716",
   "MothersMaiden": "Villarreal"
 },
 {
   "id": "85df3d9c-994d-4bb9-9fa4-fde584724363",
   "Title": "Mr.",
   "MiddleInitial": "A",
   "StreetAddress": "4610 Boone Crockett Lane",
   "State": "WA",
   "StateFull": "Washington",
   "Country": "US",
   "CountryFull": "United States",
   "Username": "Sadd1986",
   "Password": "QuieT8ri",
   "BrowserUserAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
   "TelephoneCountryCode": 1,
   "Birthday": "04/07/86",
   "Age": 37,
   "TropicalZodiac": "Aries",
   "CCType": "MasterCard",
   "CCNumber": 5466350000000000,
   "CVV2": 730,
   "CCExpires": "Aug-24",
   "NationalID": "534-58-3802",
   "UPS": "1Z 9A9 991 21 6368 284 1",
   "WesternUnionMTCN": 1610881819,
   "MoneyGramMTCN": 75346407,
   "Color": "Green",
   "Occupation": "Remedial education teacher",
   "Company": "Lionel Playworld",
   "Vehicle": "1996 Toyota Bandeirante",
   "Domain": "correcarga.com",
   "BloodType": "A+",
   "Pounds": 231.4,
   "Kilograms": 105.2,
   "FeetInches": "5' 8\"",
   "Centimeters": 173,
   "GUID": "9161207d-6af3-420d-b530-f55b4696a7fc",
   "Latitude": 48.732977,
   "Longitude": -122.522028,
   "GivenName": "Samuel",
   "Surname": "Dailey",
   "City": "Bellingham",
   "ZipCode": 98225,
   "Gender": "male",
   "EmailAddress": "SamuelADailey@superrito.com",
   "TelephoneNumber": "360-393-7550",
   "PhoneNumber" : "+13603937550",
   "MothersMaiden": "Sanborn"
 },
 {
   "id": "be5c5046-b5a7-4dc9-ab40-332a164fddf5",
   "Title": "Mr.",
   "MiddleInitial": "D",
   "StreetAddress": "4256 Single Street",
   "State": "MA",
   "StateFull": "Massachusetts",
   "Country": "US",
   "CountryFull": "United States",
   "Username": "Evout2001",
   "Password": "aedahc0Ohz",
   "BrowserUserAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
   "TelephoneCountryCode": 1,
   "Birthday": "1/21/2001",
   "Age": 22,
   "TropicalZodiac": "Aquarius",
   "CCType": "MasterCard",
   "CCNumber": 5378100000000000,
   "CVV2": 806,
   "CCExpires": "Apr-26",
   "NationalID": "019-22-8041",
   "UPS": "1Z 3A0 618 37 9469 382 4",
   "WesternUnionMTCN": 3046112538,
   "MoneyGramMTCN": 87911284,
   "Color": "Orange",
   "Occupation": "Sales worker",
   "Company": "Madcats Music & Books",
   "Vehicle": "2006 Honda Civic",
   "Domain": "danajweinkle.com",
   "BloodType": "O+",
   "Pounds": 182.6,
   "Kilograms": 83,
   "FeetInches": "6' 2\"",
   "Centimeters": 189,
   "GUID": "51531755-9873-47e9-82f2-fd278af5220d",
   "Latitude": 42.503331,
   "Longitude": -71.085184,
   "GivenName": "Johnny",
   "Surname": "Napier",
   "City": "Reading",
   "ZipCode": 1867,
   "Gender": "male",
   "EmailAddress": "JohnnyDNapier@jourrapide.com",
   "TelephoneNumber": "781-670-8534",
   "PhoneNumber" : "+17816708534",
   "MothersMaiden": "White"
 },
 {
   "id": "be5c5046-b5a7-4dc9-ab40-332a164fddf5",
   "Title": "Ms.",
   "MiddleInitial": "W",
   "StreetAddress": "3140 Barnes Street",
   "State": "FL",
   "StateFull": "Florida",
   "Country": "US",
   "CountryFull": "United States",
   "Username": "Drettemy",
   "Password": "Eideelu7vah",
   "BrowserUserAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36",
   "TelephoneCountryCode": 1,
   "Birthday": "3/15/1940",
   "Age": 83,
   "TropicalZodiac": "Pisces",
   "CCType": "Visa",
   "CCNumber": 4556920000000000,
   "CVV2": 933,
   "CCExpires": "Feb-27",
   "NationalID": "593-24-1865",
   "UPS": "1Z V71 140 36 3804 442 2",
   "WesternUnionMTCN": 7431253578,
   "MoneyGramMTCN": 84699312,
   "Color": "Blue",
   "Occupation": "Podiatrist",
   "Company": "Grossman's",
   "Vehicle": "2006 Toyota Corolla",
   "Domain": "reporterceu.com",
   "BloodType": "O+",
   "Pounds": 205.3,
   "Kilograms": 93.3,
   "FeetInches": "5' 1\"",
   "Centimeters": 155,
   "GUID": "771daa91-b230-4f93-a939-9018ff95c2e4",
   "Latitude": 28.55329,
   "Longitude": -81.205921,
   "GivenName": "Cheryl",
   "Surname": "Allen",
   "City": "Orlando",
   "ZipCode": 32822,
   "Gender": "female",
   "EmailAddress": "CherylWAllen@rhyta.com",
   "TelephoneNumber": "407-277-4695",
   "PhoneNumber" : "+14072774695",
   "MothersMaiden": "Burris"
 },
 {
   "id": "4adac054-fad3-41b5-9ce5-552e994858f3",
   "Title": "Mr.",
   "MiddleInitial": "J",
   "StreetAddress": "3754 Rockwell Lane",
   "State": "NC",
   "StateFull": "North Carolina",
   "Country": "US",
   "CountryFull": "United States",
   "Username": "Mannedge",
   "Password": "maekooQu3ai",
   "BrowserUserAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36",
   "TelephoneCountryCode": 1,
   "Birthday": "12/05/01",
   "Age": 21,
   "TropicalZodiac": "Sagittarius",
   "CCType": "MasterCard",
   "CCNumber": 5430330000000000,
   "CVV2": 19,
   "CCExpires": "Nov-27",
   "NationalID": "684-01-0134",
   "UPS": "1Z 100 367 42 7717 918 0",
   "WesternUnionMTCN": 7373851138,
   "MoneyGramMTCN": 85720636,
   "Color": "Blue",
   "Occupation": "Property disposal specialist",
   "Company": "Angel's",
   "Vehicle": "2011 Fiat Ducato",
   "Domain": "ihvalue.com",
   "BloodType": "A+",
   "Pounds": 222,
   "Kilograms": 100.9,
   "FeetInches": "6' 1\"",
   "Centimeters": 185,
   "GUID": "8c89c60f-e534-4b66-9b99-2b5b9625a8f0",
   "Latitude": 36.382192,
   "Longitude": -77.762243,
   "GivenName": "Jeffery",
   "Surname": "Hatchett",
   "City": "Roanoke Rapids",
   "ZipCode": 27870,
   "Gender": "male",
   "EmailAddress": "JefferyJHatchett@gustr.com",
   "TelephoneNumber": "252-519-9264",
   "PhoneNumber" : "+12525199264",
   "MothersMaiden": "Felder"
 },
 {
   "id": "8905cce7-600d-435b-b483-d6c21edf967d",
   "Title": "Mr.",
   "MiddleInitial": "N",
   "StreetAddress": "149 Nash Street",
   "State": "MI",
   "StateFull": "Michigan",
   "Country": "US",
   "CountryFull": "United States",
   "Username": "Pirclue",
   "Password": "ia0ox2Oophee",
   "BrowserUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36",
   "TelephoneCountryCode": 1,
   "Birthday": "9/20/1998",
   "Age": 24,
   "TropicalZodiac": "Virgo",
   "CCType": "Visa",
   "CCNumber": 4916050000000000,
   "CVV2": 887,
   "CCExpires": "Oct-25",
   "NationalID": "379-20-6202",
   "UPS": "1Z 9A0 180 82 8477 891 6",
   "WesternUnionMTCN": 5439715099,
   "MoneyGramMTCN": 15483536,
   "Color": "Blue",
   "Occupation": "Radiation therapist",
   "Company": "Sammy's Record Shack",
   "Vehicle": "2004 BMW M5",
   "Domain": "dmvstylists.com",
   "BloodType": "A+",
   "Pounds": 215.2,
   "Kilograms": 97.8,
   "FeetInches": "6' 1\"",
   "Centimeters": 185,
   "GUID": "2bd87777-5e1d-49bb-b081-49d3a8a58e62",
   "Latitude": 42.428088,
   "Longitude": -83.248432,
   "GivenName": "Manual",
   "Surname": "Rivera",
   "City": "Southfield",
   "ZipCode": 48075,
   "Gender": "male",
   "EmailAddress": "ManualNRivera@einrot.com",
   "TelephoneNumber": "313-217-7285",
   "PhoneNumber" : "+13132177285",
   "MothersMaiden": "Marin"
 }
]

app.listen(process.env.PORT || 3000)
