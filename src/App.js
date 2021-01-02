import React, { useState } from "react";
import "./styles.css";

var flags = {
  "🇦🇨": "Ascension Island",
  "🇦🇩": "Andorra",
  "🇦🇪": "United Arab Emirates",
  "🇦🇫": "Afghanistan",
  "🇦🇬": "Antigua & Barbuda",
  "🇦🇮": "Anguilla",
  "🇦🇱": "Albania",
  "🇦🇲": "Armenia",
  "🇦🇴": "Angola",
  "🇦🇶": "Antarctica",
  "🇦🇷": "Argentina",
  "🇦🇸": "American Samoa",
  "🇦🇹": "Austria",
  "🇦🇺": "Australia",
  "🇦🇼": "Aruba",
  "🇦🇽": "Åland Islands",
  "🇦🇿": "Azerbaijan",
  "🇧🇦": "Bosnia & Herzegovina",
  "🇧🇧": "Barbados",
  "🇧🇩": "Bangladesh",
  "🇧🇪": "Belgium",
  "🇧🇫": "Burkina Faso",
  "🇧🇬": "Bulgaria",
  "🇧🇭": "Bahrain",
  "🇧🇮": "Burundi",
  "🇧🇯": "Benin",
  "🇧🇱": "St. Barthélemy",
  "🇧🇲": "Bermuda",
  "🇧🇳": "Brunei",
  "🇧🇴": "Bolivia",
  "🇧🇶": "Caribbean Netherlands",
  "🇧🇷": "Brazil",
  "🇧🇸": "Bahamas",
  "🇧🇹": "Bhutan",
  "🇧🇻": "Bouvet Island",
  "🇧🇼": "Botswana",
  "🇧🇾": "Belarus",
  "🇧🇿": "Belize",
  "🇨🇦": "Canada",
  "🇨🇨": "Cocos (Keeling) Islands",
  "🇨🇩": "Congo - Kinshasa",
  "🇨🇫": "Central African Republic",
  "🇨🇬": "Congo - Brazzaville",
  "🇨🇭": "Switzerland",
  "🇨🇮": "Côte d’Ivoire",
  "🇨🇰": "Cook Islands",
  "🇨🇱": "Chile",
  "🇨🇲": "Cameroon",
  "🇨🇳": "China",
  "🇨🇴": "Colombia",
  "🇨🇵": "Clipperton Island",
  "🇨🇷": "Costa Rica",
  "🇨🇺": "Cuba",
  "🇨🇻": "Cape Verde",
  "🇨🇼": "Curaçao",
  "🇨🇽": "Christmas Island",
  "🇨🇾": "Cyprus",
  "🇨🇿": "Czechia",
  "🇩🇪": "Germany",
  "🇩🇬": "Diego Garcia",
  "🇩🇯": "Djibouti",
  "🇩🇰": "Denmark",
  "🇩🇲": "Dominica",
  "🇩🇴": "Dominican Republic",
  "🇩🇿": "Algeria",
  "🇪🇦": "Ceuta & Melilla",
  "🇪🇨": "Ecuador",
  "🇪🇪": "Estonia",
  "🇪🇬": "Egypt",
  "🇪🇭": "Western Sahara",
  "🇪🇷": "Eritrea",
  "🇪🇸": "Spain",
  "🇪🇹": "Ethiopia",
  "🇪🇺": "European Union",
  "🇫🇮": "Finland",
  "🇫🇯": "Fiji",
  "🇫🇰": "Falkland Islands",
  "🇫🇲": "Micronesia",
  "🇫🇴": "Faroe Islands",
  "🇫🇷": "France",
  "🇬🇦": "Gabon",
  "🇬🇧": "United Kingdom",
  "🇬🇩": "Grenada",
  "🇬🇪": "Georgia",
  "🇬🇫": "French Guiana",
  "🇬🇬": "Guernsey",
  "🇬🇭": "Ghana",
  "🇬🇮": "Gibraltar",
  "🇬🇱": "Greenland",
  "🇬🇲": "Gambia",
  "🇬🇳": "Guinea",
  "🇬🇵": "Guadeloupe",
  "🇬🇶": "Equatorial Guinea",
  "🇬🇷": "Greece",
  "🇬🇸": "South Georgia & South Sandwich Islands",
  "🇬🇹": "Guatemala",
  "🇬🇺": "Guam",
  "🇬🇼": "Guinea-Bissau",
  "🇬🇾": "Guyana",
  "🇭🇰": "Hong Kong SAR China",
  "🇭🇲": "Heard & McDonald Islands",
  "🇭🇳": "Honduras",
  "🇭🇷": "Croatia",
  "🇭🇹": "Haiti",
  "🇭🇺": "Hungary",
  "🇮🇨": "Canary Islands",
  "🇮🇩": "Indonesia",
  "🇮🇪": "Ireland",
  "🇮🇱": "Israel",
  "🇮🇲": "Isle of Man",
  "🇮🇳": "India",
  "🇮🇴": "British Indian Ocean Territory",
  "🇮🇶": "Iraq",
  "🇮🇷": "Iran",
  "🇮🇸": "Iceland",
  "🇮🇹": "Italy",
  "🇯🇪": "Jersey",
  "🇯🇲": "Jamaica",
  "🇯🇴": "Jordan",
  "🇯🇵": "Japan",
  "🇰🇪": "Kenya",
  "🇰🇬": "Kyrgyzstan",
  "🇰🇭": "Cambodia",
  "🇰🇮": "Kiribati",
  "🇰🇲": "Comoros",
  "🇰🇳": "St. Kitts & Nevis",
  "🇰🇵": "North Korea",
  "🇰🇷": "South Korea",
  "🇰🇼": "Kuwait",
  "🇰🇾": "Cayman Islands",
  "🇰🇿": "Kazakhstan",
  "🇱🇦": "Laos",
  "🇱🇧": "Lebanon",
  "🇱🇨": "St. Lucia",
  "🇱🇮": "Liechtenstein",
  "🇱🇰": "Sri Lanka",
  "🇱🇷": "Liberia",
  "🇱🇸": "Lesotho",
  "🇱🇹": "Lithuania",
  "🇱🇺": "Luxembourg",
  "🇱🇻": "Latvia",
  "🇱🇾": "Libya",
  "🇲🇦": "Morocco",
  "🇲🇨": "Monaco",
  "🇲🇩": "Moldova",
  "🇲🇪": "Montenegro",
  "🇲🇫": "St. Martin",
  "🇲🇬": "Madagascar",
  "🇲🇭": "Marshall Islands",
  "🇲🇰": "Macedonia",
  "🇲🇱": "Mali",
  "🇲🇲": "Myanmar (Burma)",
  "🇲🇳": "Mongolia",
  "🇲🇴": "Macau SAR China",
  "🇲🇵": "Northern Mariana Islands",
  "🇲🇶": "Martinique",
  "🇲🇷": "Mauritania",
  "🇲🇸": "Montserrat",
  "🇲🇹": "Malta",
  "🇲🇺": "Mauritius",
  "🇲🇻": "Maldives",
  "🇲🇼": "Malawi",
  "🇲🇽": "Mexico",
  "🇲🇾": "Malaysia",
  "🇲🇿": "Mozambique",
  "🇳🇦": "Namibia",
  "🇳🇨": "New Caledonia",
  "🇳🇪": "Niger",
  "🇳🇫": "Norfolk Island",
  "🇳🇬": "Nigeria",
  "🇳🇮": "Nicaragua",
  "🇳🇱": "Netherlands",
  "🇳🇴": "Norway",
  "🇳🇵": "Nepal",
  "🇳🇷": "Nauru",
  "🇳🇺": "Niue",
  "🇳🇿": "New Zealand",
  "🇴🇲": "Oman",
  "🇵🇦": "Panama",
  "🇵🇪": "Peru",
  "🇵🇫": "French Polynesia",
  "🇵🇬": "Papua New Guinea",
  "🇵🇭": "Philippines",
  "🇵🇰": "Pakistan",
  "🇵🇱": "Poland",
  "🇵🇲": "St. Pierre & Miquelon",
  "🇵🇳": "Pitcairn Islands",
  "🇵🇷": "Puerto Rico",
  "🇵🇸": "Palestinian Territories",
  "🇵🇹": "Portugal",
  "🇵🇼": "Palau",
  "🇵🇾": "Paraguay",
  "🇶🇦": "Qatar",
  "🇷🇪": "Réunion",
  "🇷🇴": "Romania",
  "🇷🇸": "Serbia",
  "🇷🇺": "Russia",
  "🇷🇼": "Rwanda",
  "🇸🇦": "Saudi Arabia",
  "🇸🇧": "Solomon Islands",
  "🇸🇨": "Seychelles",
  "🇸🇩": "Sudan",
  "🇸🇪": "Sweden",
  "🇸🇬": "Singapore",
  "🇸🇭": "St. Helena",
  "🇸🇮": "Slovenia",
  "🇸🇯": "Svalbard & Jan Mayen",
  "🇸🇰": "Slovakia",
  "🇸🇱": "Sierra Leone",
  "🇸🇲": "San Marino",
  "🇸🇳": "Senegal",
  "🇸🇴": "Somalia",
  "🇸🇷": "Suriname",
  "🇸🇸": "South Sudan",
  "🇸🇹": "São Tomé & Príncipe",
  "🇸🇻": "El Salvador",
  "🇸🇽": "Sint Maarten",
  "🇸🇾": "Syria",
  "🇸🇿": "Swaziland",
  "🇹🇦": "Tristan da Cunha",
  "🇹🇨": "Turks & Caicos Islands",
  "🇹🇩": "Chad",
  "🇹🇫": "French Southern Territories",
  "🇹🇬": "Togo",
  "🇹🇭": "Thailand",
  "🇹🇯": "Tajikistan",
  "🇹🇰": "Tokelau",
  "🇹🇱": "Timor-Leste",
  "🇹🇲": "Turkmenistan",
  "🇹🇳": "Tunisia",
  "🇹🇴": "Tonga",
  "🇹🇷": "Turkey",
  "🇹🇹": "Trinidad & Tobago",
  "🇹🇻": "Tuvalu",
  "🇹🇼": "Taiwan",
  "🇹🇿": "Tanzania",
  "🇺🇦": "Ukraine",
  "🇺🇬": "Uganda",
  "🇺🇲": "U.S. Outlying Islands",
  "🇺🇳": "United Nations",
  "🇺🇸": "United States",
  "🇺🇾": "Uruguay",
  "🇺🇿": "Uzbekistan",
  "🇻🇦": "Vatican City",
  "🇻🇨": "St. Vincent & Grenadines",
  "🇻🇪": "Venezuela",
  "🇻🇬": "British Virgin Islands",
  "🇻🇮": "U.S. Virgin Islands",
  "🇻🇳": "Vietnam",
  "🇻🇺": "Vanuatu",
  "🇼🇫": "Wallis & Futuna",
  "🇼🇸": "Samoa",
  "🇽🇰": "Kosovo",
  "🇾🇪": "Yemen",
  "🇾🇹": "Mayotte",
  "🇿🇦": "South Africa",
  "🇿🇲": "Zambia",
  "🇿🇼": "Zimbabwe"
};

var flagsReverse = {
  "Ascension Island": "🇦🇨",
  Andorra: "🇦🇩",
  "United Arab Emirates": "🇦🇪",
  Afghanistan: "🇦🇫",
  "Antigua & Barbuda": "🇦🇬",
  Anguilla: "🇦🇮",
  Albania: "🇦🇱",
  Armenia: "🇦🇲",
  Angola: "🇦🇴",
  Antarctica: "🇦🇶",
  Argentina: "🇦🇷",
  "American Samoa": "🇦🇸",
  Austria: "🇦🇹",
  Australia: "🇦🇺",
  Aruba: "🇦🇼",
  "Åland Islands": "🇦🇽",
  Azerbaijan: "🇦🇿",
  "Bosnia & Herzegovina": "🇧🇦",
  Barbados: "🇧🇧",
  Bangladesh: "🇧🇩",
  Belgium: "🇧🇪",
  "Burkina Faso": "🇧🇫",
  Bulgaria: "🇧🇬",
  Bahrain: "🇧🇭",
  Burundi: "🇧🇮",
  Benin: "🇧🇯",
  "St. Barthélemy": "🇧🇱",
  Bermuda: "🇧🇲",
  Brunei: "🇧🇳",
  Bolivia: "🇧🇴",
  "Caribbean Netherlands": "🇧🇶",
  Brazil: "🇧🇷",
  Bahamas: "🇧🇸",
  Bhutan: "🇧🇹",
  "Bouvet Island": "🇧🇻",
  Botswana: "🇧🇼",
  Belarus: "🇧🇾",
  Belize: "🇧🇿",
  Canada: "🇨🇦",
  "Cocos (Keeling) Islands": "🇨🇨",
  "Congo - Kinshasa": "🇨🇩",
  "Central African Republic": "🇨🇫",
  "Congo - Brazzaville": "🇨🇬",
  Switzerland: "🇨🇭",
  "Côte d’Ivoire": "🇨🇮",
  "Cook Islands": "🇨🇰",
  Chile: "🇨🇱",
  Cameroon: "🇨🇲",
  China: "🇨🇳",
  Colombia: "🇨🇴",
  "Clipperton Island": "🇨🇵",
  "Costa Rica": "🇨🇷",
  Cuba: "🇨🇺",
  "Cape Verde": "🇨🇻",
  Curaçao: "🇨🇼",
  "Christmas Island": "🇨🇽",
  Cyprus: "🇨🇾",
  Czechia: "🇨🇿",
  Germany: "🇩🇪",
  "Diego Garcia": "🇩🇬",
  Djibouti: "🇩🇯",
  Denmark: "🇩🇰",
  Dominica: "🇩🇲",
  "Dominican Republic": "🇩🇴",
  Algeria: "🇩🇿",
  "Ceuta & Melilla": "🇪🇦",
  Ecuador: "🇪🇨",
  Estonia: "🇪🇪",
  Egypt: "🇪🇬",
  "Western Sahara": "🇪🇭",
  Eritrea: "🇪🇷",
  Spain: "🇪🇸",
  Ethiopia: "🇪🇹",
  "European Union": "🇪🇺",
  Finland: "🇫🇮",
  Fiji: "🇫🇯",
  "Falkland Islands": "🇫🇰",
  Micronesia: "🇫🇲",
  "Faroe Islands": "🇫🇴",
  France: "🇫🇷",
  Gabon: "🇬🇦",
  "United Kingdom": "🇬🇧",
  Grenada: "🇬🇩",
  Georgia: "🇬🇪",
  "French Guiana": "🇬🇫",
  Guernsey: "🇬🇬",
  Ghana: "🇬🇭",
  Gibraltar: "🇬🇮",
  Greenland: "🇬🇱",
  Gambia: "🇬🇲",
  Guinea: "🇬🇳",
  Guadeloupe: "🇬🇵",
  "Equatorial Guinea": "🇬🇶",
  Greece: "🇬🇷",
  "South Georgia & South Sandwich Islands": "🇬🇸",
  Guatemala: "🇬🇹",
  Guam: "🇬🇺",
  "Guinea-Bissau": "🇬🇼",
  Guyana: "🇬🇾",
  "Hong Kong SAR China": "🇭🇰",
  "Heard & McDonald Islands": "🇭🇲",
  Honduras: "🇭🇳",
  Croatia: "🇭🇷",
  Haiti: "🇭🇹",
  Hungary: "🇭🇺",
  "Canary Islands": "🇮🇨",
  Indonesia: "🇮🇩",
  Ireland: "🇮🇪",
  Israel: "🇮🇱",
  "Isle of Man": "🇮🇲",
  India: "🇮🇳",
  "British Indian Ocean Territory": "🇮🇴",
  Iraq: "🇮🇶",
  Iran: "🇮🇷",
  Iceland: "🇮🇸",
  Italy: "🇮🇹",
  Jersey: "🇯🇪",
  Jamaica: "🇯🇲",
  Jordan: "🇯🇴",
  Japan: "🇯🇵",
  Kenya: "🇰🇪",
  Kyrgyzstan: "🇰🇬",
  Cambodia: "🇰🇭",
  Kiribati: "🇰🇮",
  Comoros: "🇰🇲",
  "St. Kitts & Nevis": "🇰🇳",
  "North Korea": "🇰🇵",
  "South Korea": "🇰🇷",
  Kuwait: "🇰🇼",
  "Cayman Islands": "🇰🇾",
  Kazakhstan: "🇰🇿",
  Laos: "🇱🇦",
  Lebanon: "🇱🇧",
  "St. Lucia": "🇱🇨",
  Liechtenstein: "🇱🇮",
  "Sri Lanka": "🇱🇰",
  Liberia: "🇱🇷",
  Lesotho: "🇱🇸",
  Lithuania: "🇱🇹",
  Luxembourg: "🇱🇺",
  Latvia: "🇱🇻",
  Libya: "🇱🇾",
  Morocco: "🇲🇦",
  Monaco: "🇲🇨",
  Moldova: "🇲🇩",
  Montenegro: "🇲🇪",
  "St. Martin": "🇲🇫",
  Madagascar: "🇲🇬",
  "Marshall Islands": "🇲🇭",
  Macedonia: "🇲🇰",
  Mali: "🇲🇱",
  "Myanmar (Burma)": "🇲🇲",
  Mongolia: "🇲🇳",
  "Macau SAR China": "🇲🇴",
  "Northern Mariana Islands": "🇲🇵",
  Martinique: "🇲🇶",
  Mauritania: "🇲🇷",
  Montserrat: "🇲🇸",
  Malta: "🇲🇹",
  Mauritius: "🇲🇺",
  Maldives: "🇲🇻",
  Malawi: "🇲🇼",
  Mexico: "🇲🇽",
  Malaysia: "🇲🇾",
  Mozambique: "🇲🇿",
  Namibia: "🇳🇦",
  "New Caledonia": "🇳🇨",
  Niger: "🇳🇪",
  "Norfolk Island": "🇳🇫",
  Nigeria: "🇳🇬",
  Nicaragua: "🇳🇮",
  Netherlands: "🇳🇱",
  Norway: "🇳🇴",
  Nepal: "🇳🇵",
  Nauru: "🇳🇷",
  Niue: "🇳🇺",
  "New Zealand": "🇳🇿",
  Oman: "🇴🇲",
  Panama: "🇵🇦",
  Peru: "🇵🇪",
  "French Polynesia": "🇵🇫",
  "Papua New Guinea": "🇵🇬",
  Philippines: "🇵🇭",
  Pakistan: "🇵🇰",
  Poland: "🇵🇱",
  "St. Pierre & Miquelon": "🇵🇲",
  "Pitcairn Islands": "🇵🇳",
  "Puerto Rico": "🇵🇷",
  "Palestinian Territories": "🇵🇸",
  Portugal: "🇵🇹",
  Palau: "🇵🇼",
  Paraguay: "🇵🇾",
  Qatar: "🇶🇦",
  Réunion: "🇷🇪",
  Romania: "🇷🇴",
  Serbia: "🇷🇸",
  Russia: "🇷🇺",
  Rwanda: "🇷🇼",
  "Saudi Arabia": "🇸🇦",
  "Solomon Islands": "🇸🇧",
  Seychelles: "🇸🇨",
  Sudan: "🇸🇩",
  Sweden: "🇸🇪",
  Singapore: "🇸🇬",
  "St. Helena": "🇸🇭",
  Slovenia: "🇸🇮",
  "Svalbard & Jan Mayen": "🇸🇯",
  Slovakia: "🇸🇰",
  "Sierra Leone": "🇸🇱",
  "San Marino": "🇸🇲",
  Senegal: "🇸🇳",
  Somalia: "🇸🇴",
  Suriname: "🇸🇷",
  "South Sudan": "🇸🇸",
  "São Tomé & Príncipe": "🇸🇹",
  "El Salvador": "🇸🇻",
  "Sint Maarten": "🇸🇽",
  Syria: "🇸🇾",
  Swaziland: "🇸🇿",
  "Tristan da Cunha": "🇹🇦",
  "Turks & Caicos Islands": "🇹🇨",
  Chad: "🇹🇩",
  "French Southern Territories": "🇹🇫",
  Togo: "🇹🇬",
  Thailand: "🇹🇭",
  Tajikistan: "🇹🇯",
  Tokelau: "🇹🇰",
  "Timor-Leste": "🇹🇱",
  Turkmenistan: "🇹🇲",
  Tunisia: "🇹🇳",
  Tonga: "🇹🇴",
  Turkey: "🇹🇷",
  "Trinidad & Tobago": "🇹🇹",
  Tuvalu: "🇹🇻",
  Taiwan: "🇹🇼",
  Tanzania: "🇹🇿",
  Ukraine: "🇺🇦",
  Uganda: "🇺🇬",
  "U.S. Outlying Islands": "🇺🇲",
  "United Nations": "🇺🇳",
  "United States": "🇺🇸",
  Uruguay: "🇺🇾",
  Uzbekistan: "🇺🇿",
  "Vatican City": "🇻🇦",
  "St. Vincent & Grenadines": "🇻🇨",
  Venezuela: "🇻🇪",
  "British Virgin Islands": "🇻🇬",
  "U.S. Virgin Islands": "🇻🇮",
  Vietnam: "🇻🇳",
  Vanuatu: "🇻🇺",
  "Wallis & Futuna": "🇼🇫",
  Samoa: "🇼🇸",
  Kosovo: "🇽🇰",
  Yemen: "🇾🇪",
  Mayotte: "🇾🇹",
  "South Africa": "🇿🇦",
  Zambia: "🇿🇲",
  Zimbabwe: "🇿🇼"
};

var flagArray = Object.keys(flags);

export default function App() {
  const [meaning, setMeaning] = useState("");
  const [reverse, setReverse] = useState("");
  const [bigflag, setBigFlag] = useState("");

  const flagNamePrinter = (flag) => {
    console.log(flag);

    var flagName = flags[flag];

    var bigFlag = flagsReverse[flagName];

    setBigFlag(bigFlag);

    setMeaning(flagName);
  };

  const checkFlagName = (event) => {
    var userInput = event.target.value; // to get what value user entered in the input
    var flagName = flags[userInput]; //to get flagname from flags object
    var countryName = flagsReverse[userInput]; //to get Flag from reverse flag Object

    setReverse(countryName); //
  };

  return (
    <div className="App">
      <h2 className="padding1rem">
        Country Flag
        <span className="blueText"> Interpreter</span>{" "}
      </h2>

      <input
        className="input padding1rem"
        onChange={checkFlagName}
        placeholder="Enter Flag Emoji or Country Name"
      />
      <p>
        <strong>
          <small>Note: </small>
        </strong>
        <small>
          Country first Letter should be in Caps Lock, e.g.,{" "}
          <strong>India</strong>
        </small>
      </p>

      <h3 className="padding1rem">☝️ Above entered name belong to 👇: </h3>
      <div>
        <span className="blueText bigFlag">{reverse}</span>
      </div>

      <h3>
        You clicked: <span className="blueText">{meaning}</span>
      </h3>

      <h1>
        <span className="bigFlag">{bigflag}</span>
      </h1>
      <div>
        {flagArray.map((flag) => {
          return (
            <span
              onClick={() => flagNamePrinter(flag)}
              className="padding1rem bigFlags"
              key={flag}
            >
              {flag}
            </span>
          );
        })}
      </div>

      <footer>
        <h3>
          Made by <strong>Shubam Bhasin</strong> with ❤️ in Jammu and Kashmir
        </h3>
        <h4>All Rights Reserved</h4>
        <ul className="non-bullet">
          <li className="list-inline padding1rem">
            <a href="http://github.com/shubambhasin">
              <i className="fa fa-github" aria-hidden="true">
                {" "}
                Github
              </i>
            </a>
          </li>
          <li className="list-inline padding1rem">
            <a href="https://www.linkedin.com/in/shubam-bhasin-3854a4144/">
              <i className="fa fa-linkedin" aria-hidden="true">
                {" "}
                LinkedIn
              </i>
            </a>
          </li>

          <li className="list-inline padding1rem">
            <a href="http://instagram.com/shubambhasin">
              <i className="fa fa-instagram" aria-hidden="true">
                Instagram
              </i>
            </a>
          </li>
          <li className="list-inline padding1rem">
            <a href="https://facebook.com/shubam.bhasin">
              <i className="fa fa-facebook" aria-hidden="true">
                Facebook
              </i>
            </a>
          </li>
          <li className="list-inline padding1rem">
            <a href="/">
              <i className="fa fa-reddit" aria-hidden="true">
                {" "}
                Reddit
              </i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
