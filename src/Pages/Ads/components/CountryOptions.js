import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";
const CountryOptions = ({ setCountry }) => {
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState(null); // Use null initially to indicate no selection

  useEffect(() => {
    // Fetch user's IP address information
    fetch("https://ipinfo.io?token=05eab31960567f")
      .then((response) => response.json())
      .then((data) => {
        const isoCountryCode = data.country || "Unknown";
        // Fetch full country name based on ISO code
        fetch(`https://restcountries.com/v3.1/alpha?codes=${isoCountryCode}`)
          .then((response) => response.json())
          .then((countryData) => {
            if (countryData[0]) {
              setSelectedCountry({
                label: countryData[0].name.common,
                value: countryData[0].name.common,
              });
              setCountry({
                label: countryData[0].name.common,
                value: countryData[0].name.common,
              });
            } else {
              setSelectedCountry({
                label: "Unknown",
                value: "Unknown",
              });
            }
          })
          .catch((error) => {
            console.error("Error fetching full country name:", error);
            setSelectedCountry({
              label: "Unknown",
              value: "Unknown",
            });
          });
      })
      .catch((error) => {
        console.error("Error fetching IP address information:", error);
        setSelectedCountry({ label: "Unknown", value: "Unknown" });
      });
  }, []);

  const options = [
    { value: "Afghanistan", label: t("countries.Afghanistan") },
    { value: "land Islands", label: t("countries.land Islands") },
    { value: "Albania", label: t("countries.Albania") },
  { value: "Algeria", label: t("countries.Algeria") },
  { value: "American Samoa", label: t("countries.American Samoa") },
  { value: "Andorra", label: t("countries.Andorra") },
  { value: "Angola", label: t("countries.Angola") },
  { value: "Anguilla", label: t("countries.Anguilla") },
  { value: "Antarctica", label: t("countries.Antarctica") },
  { value: "Antigua and Barbuda", label: t("countries.Antigua and Barbuda") },
  { value: "Argentina", label: t("countries.Argentina") },
  { value: "Armenia", label: t("countries.Armenia") },
  { value: "Aruba", label: t("countries.Aruba") },
  { value: "Australia", label: t("countries.Australia") },
  { value: "Austria", label: t("countries.Austria") },
  { value: "Azerbaijan", label: t("countries.Azerbaijan") },
  { value: "Bahamas", label: t("countries.Bahamas") },
  { value: "Bahrain", label: t("countries.Bahrain") },
  { value: "Bangladesh", label: t("countries.Bangladesh") },
  { value: "Barbados", label: t("countries.Barbados") },
  { value: "Belarus", label: t("countries.Belarus") },
  { value: "Belgium", label: t("countries.Belgium") },
  { value: "Belize", label: t("countries.Belize") },
  { value: "Benin", label: t("countries.Benin") },
  { value: "Bermuda", label: t("countries.Bermuda") },
  { value: "Bhutan", label: t("countries.Bhutan") },
  {
    value: "Bolivia, Plurinational State of",
    label: t("countries.Bolivia, Plurinational State of"),
  },
  { value: "Bosnia and Herzegovina", label: t("countries.Bosnia and Herzegovina") },
  { value: "Botswana", label: t("countries.Botswana") },
  { value: "Bouvet Island", label: t("countries.Bouvet Island") },
  { value: "Brazil", label: t("countries.Brazil") },
  {
    value: "British Indian Ocean Territory",
    label: t("countries.British Indian Ocean Territory"),
  },
  { value: "Brunei Darussalam", label: t("countries.Brunei Darussalam") },
  { value: "Bulgaria", label: t("countries.Bulgaria") },
  { value: "Burkina Faso", label: t("countries.Burkina Faso") },
  { value: "Burundi", label: t("countries.Burundi") },
  { value: "Cambodia", label: t("countries.Cambodia") },
  { value: "Cameroon", label: t("countries.Cameroon") },
  { value: "Canada", label: t("countries.Canada") },
  { value: "Cape Verde", label: t("countries.Cape Verde") },
  { value: "Cayman Islands", label: t("countries.Cayman Islands") },
  { value: "Central African Republic", label: t("countries.Central African Republic") },
  { value: "Chad", label: t("countries.Chad") },
  { value: "Chile", label: t("countries.Chile") },
  { value: "China", label: t("countries.China") },
  { value: "Christmas Island", label: t("countries.Christmas Island") },
  { value: "Cocos (Keeling) Islands", label: t("countries.Cocos (Keeling) Islands") },
  { value: "Colombia", label: t("countries.Colombia") },
  { value: "Comoros", label: t("countries.Comoros") },
  { value: "Congo", label: t("countries.Congo") },
  {
    value: "Congo, the Democratic Republic of the",
    label: t("countries.Congo, the Democratic Republic of the"),
  },
  { value: "Cook Islands", label: t("countries.Cook Islands") },
  { value: "Costa Rica", label: t("countries.Costa Rica") },
  { value: "Côte d'Ivoire", label: t("countries.Côte d'Ivoire") },
  { value: "Croatia", label: t("countries.Croatia") },
  { value: "Cuba", label: t("countries.Cuba") },
  { value: "Cyprus", label: t("countries.Cyprus") },
  { value: "Czech Republic", label: t("countries.Czech Republic") },
  { value: "Denmark", label: t("countries.Denmark") },
  { value: "Djibouti", label: t("countries.Djibouti") },
  { value: "Dominica", label: t("countries.Dominica") },
  { value: "Dominican Republic", label: t("countries.Dominican Republic") },
  { value: "Ecuador", label: t("countries.Ecuador") },
  { value: "Egypt", label: t("countries.Egypt") },
  { value: "El Salvador", label: t("countries.El Salvador") },
  { value: "Equatorial Guinea", label: t("countries.Equatorial Guinea") },
  { value: "Eritrea", label: t("countries.Eritrea") },
  { value: "Estonia", label: t("countries.Estonia") },
  { value: "Ethiopia", label: t("countries.Ethiopia") },
  {
    value: "Falkland Islands (Malvinas)",
    label: t("countries.Falkland Islands (Malvinas)"),
  },
  { value: "Faroe Islands", label: t("countries.Faroe Islands") },
  { value: "Fiji", label: t("countries.Fiji") },
  { value: "Finland", label: t("countries.Finland") },
  { value: "France", label: t("countries.France") },
  { value: "French Guiana", label: t("countries.French Guiana") },
  { value: "French Polynesia", label: t("countries.French Polynesia") },
  {
    value: "French Southern Territories",
    label: t("countries.French Southern Territories"),
  },
  { value: "Gabon", label: t("countries.Gabon") },
  { value: "Gambia", label: t("countries.Gambia") },
  { value: "Georgia", label: t("countries.Georgia") },
  { value: "Germany", label: t("countries.Germany") },
  { value: "Ghana", label: t("countries.Ghana") },
  { value: "Gibraltar", label: t("countries.Gibraltar") },
  { value: "Greece", label: t("countries.Greece") },
  { value: "Greenland", label: t("countries.Greenland") },
  { value: "Grenada", label: t("countries.Grenada") },
  { value: "Guadeloupe", label: t("countries.Guadeloupe") },
  { value: "Guam", label: t("countries.Guam") },
  { value: "Guatemala", label: t("countries.Guatemala") },
  { value: "Guernsey", label: t("countries.Guernsey") },
  { value: "Guinea", label: t("countries.Guinea") },
  { value: "Guinea-Bissau", label: t("countries.Guinea-Bissau") },
  { value: "Guyana", label: t("countries.Guyana") },
  { value: "Haiti", label: t("countries.Haiti") },
  {
    value: "Heard Island and McDonald Islands",
    label: t("countries.Heard Island and McDonald Islands"),
  },
  {
    value: "Holy See (Vatican City State)",
    label: t("countries.Holy See (Vatican City State)"),
  },
  { value: "Honduras", label: t("countries.Honduras") },
  { value: "Hong Kong", label: t("countries.Hong Kong") },
  { value: "Hungary", label: t("countries.Hungary") },
  { value: "Iceland", label: t("countries.Iceland") },
  { value: "India", label: t("countries.India") },
  { value: "Indonesia", label: t("countries.Indonesia") },
  { value: "Iran, Islamic Republic of", label: t("countries.Iran, Islamic Republic of") },
  { value: "Iraq", label: t("countries.Iraq") },
  { value: "Ireland", label: t("countries.Ireland") },
  { value: "Isle of Man", label: t("countries.Isle of Man") },
  { value: "Israel", label: t("countries.Israel") },
  { value: "Italy", label: t("countries.Italy") },
  { value: "Jamaica", label: t("countries.Jamaica") },
  { value: "Japan", label: t("countries.Japan") },
  { value: "Jersey", label: t("countries.Jersey") },
  { value: "Jordan", label: t("countries.Jordan") },
  { value: "Kazakhstan", label: t("countries.Kazakhstan") },
  { value: "Kenya", label: t("countries.Kenya") },
  { value: "Kiribati", label: t("countries.Kiribati") },
  {
    value: "Korea, Democratic People's Republic of",
    label: t("countries.Korea, Democratic People's Republic of"),
  },
  { value: "Korea, Republic of", label: t("countries.Korea, Republic of") },
  { value: "Kuwait", label: t("countries.Kuwait") },
  { value: "Kyrgyzstan", label: t("countries.Kyrgyzstan") },
  {
    value: "Lao People's Democratic Republic",
    label: t("countries.Lao People's Democratic Republic"),
  },
  { value: "Latvia", label: t("countries.Latvia") },
  { value: "Lebanon", label: t("countries.Lebanon") },
  { value: "Lesotho", label: t("countries.Lesotho") },
  { value: "Liberia", label: t("countries.Liberia") },
  { value: "Libyan Arab Jamahiriya", label: t("countries.Libyan Arab Jamahiriya") },
  { value: "Liechtenstein", label: t("countries.Liechtenstein") },
  { value: "Lithuania", label: t("countries.Lithuania") },
  { value: "Luxembourg", label: t("countries.Luxembourg") },
  { value: "Macao", label: t("countries.Macao") },
  {
    value: "Macedonia, the former Yugoslav Republic of",
    label: t("countries.Macedonia, the former Yugoslav Republic of"),
  },
  { value: "Madagascar", label: t("countries.Madagascar") },
  { value: "Malawi", label: t("countries.Malawi") },
  { value: "Malawi", label: t("countries.Malawi") },
  { value: "Malaysia", label: t("countries.Malaysia") },
  { value: "Maldives", label: t("countries.Maldives") },
  { value: "Mali", label: t("countries.Mali") },
  { value: "Malta", label: t("countries.Malta") },
  { value: "Marshall Islands", label: t("countries.Marshall Islands") },
  { value: "Martinique", label: t("countries.Martinique") },
  { value: "Mauritania", label: t("countries.Mauritania") },
  { value: "Mauritius", label: t("countries.Mauritius") },
  { value: "Mayotte", label: t("countries.Mayotte") },
  { value: "Mexico", label: t("countries.Mexico") },
  { value: "Micronesia, Federated States of", label: t("countries.Micronesia, Federated States of") },
  { value: "Moldova, Republic of", label: t("countries.Moldova, Republic of") },
  { value: "Monaco", label: t("countries.Monaco") },
  { value: "Mongolia", label: t("countries.Mongolia") },
  { value: "Montenegro", label: t("countries.Montenegro") },
  { value: "Montserrat", label: t("countries.Montserrat") },
  { value: "Morocco", label: t("countries.Morocco") },
  { value: "Mozambique", label: t("countries.Mozambique") },
  { value: "Myanmar", label: t("countries.Myanmar") },
  { value: "Namibia", label: t("countries.Namibia") },
  { value: "Nauru", label: t("countries.Nauru") },
  { value: "Nepal", label: t("countries.Nepal") },
  { value: "Netherlands", label: t("countries.Netherlands") },
  { value: "Netherlands Antilles", label: t("countries.Netherlands Antilles") },
  { value: "New Caledonia", label: t("countries.New Caledonia") },
  { value: "New Zealand", label: t("countries.New Zealand") },
  { value: "Nicaragua", label: t("countries.Nicaragua") },
  { value: "Niger", label: t("countries.Niger") },
  { value: "Nigeria", label: t("countries.Nigeria") },
  { value: "Niue", label: t("countries.Niue") },
  { value: "Norfolk Island", label: t("countries.Norfolk Island") },
  { value: "Northern Mariana Islands", label: t("countries.Northern Mariana Islands") },
  { value: "Norway", label: t("countries.Norway") },
  { value: "Oman", label: t("countries.Oman") },
  { value: "Pakistan", label: t("countries.Pakistan") },
  { value: "Palau", label: t("countries.Palau") },
  { value: "Palestinian Territory, Occupied", label: t("countries.Palestinian Territory, Occupied") },
  { value: "Panama", label: t("countries.Panama") },
  { value: "Papua New Guinea", label: t("countries.Papua New Guinea") },
  { value: "Paraguay", label: t("countries.Paraguay") },
  { value: "Peru", label: t("countries.Peru") },
  { value: "Philippines", label: t("countries.Philippines") },
  { value: "Pitcairn", label: t("countries.Pitcairn") },
  { value: "Poland", label: t("countries.Poland") },
  { value: "Portugal", label: t("countries.Portugal") },
  { value: "Puerto Rico", label: t("countries.Puerto Rico") },
  { value: "Qatar", label: t("countries.Qatar") },
  { value: "Réunion", label: t("countries.Réunion") },
  { value: "Romania", label: t("countries.Romania") },
  { value: "Russian Federation", label: t("countries.Russian Federation") },
  { value: "Rwanda", label: t("countries.Rwanda") },
  { value: "Saint Barthélemy", label: t("countries.Saint Barthélemy") },
  { value: "Saint Helena, Ascension and Tristan da Cunha", label: t("countries.Saint Helena, Ascension and Tristan da Cunha") },
  { value: "Saint Kitts and Nevis", label: t("countries.Saint Kitts and Nevis") },
  { value: "Saint Lucia", label: t("countries.Saint Lucia") },
  { value: "Saint Martin (French part)", label: t("countries.Saint Martin (French part)") },
  { value: "Saint Pierre and Miquelon", label: t("countries.Saint Pierre and Miquelon") },
  { value: "Saint Vincent and the Grenadines", label: t("countries.Saint Vincent and the Grenadines") },
  { value: "Samoa", label: t("countries.Samoa") },
  { value: "San Marino", label: t("countries.San Marino") },
  { value: "Sao Tome and Principe", label: t("countries.Sao Tome and Principe") },
  { value: "Saudi Arabia", label: t("countries.Saudi Arabia") },
  { value: "Senegal", label: t("countries.Senegal") },
  { value: "Serbia", label: t("countries.Serbia") },
  { value: "Seychelles", label: t("countries.Seychelles") },
  { value: "Sierra Leone", label: t("countries.Sierra Leone") },
  { value: "Singapore", label: t("countries.Singapore") },
  { value: "Slovakia", label: t("countries.Slovakia") },
  { value: "Slovenia", label: t("countries.Slovenia") },
  { value: "Solomon Islands", label: t("countries.Solomon Islands") },
  { value: "Somalia", label: t("countries.Somalia") },
  { value: "South Africa", label: t("countries.South Africa") },
  { value: "South Georgia and the South Sandwich Islands", label: t("countries.South Georgia and the South Sandwich Islands") },
  { value: "Spain", label: t("countries.Spain") },
  { value: "Sri Lanka", label: t("countries.Sri Lanka") },
  { value: "Sudan", label: t("countries.Sudan") },
  { value: "Suriname", label: t("countries.Suriname") },
  { value: "Svalbard and Jan Mayen", label: t("countries.Svalbard and Jan Mayen") },
  { value: "Swaziland", label: t("countries.Swaziland") },
  { value: "Sweden", label: t("countries.Sweden") },
  { value: "Switzerland", label: t("countries.Switzerland") },
  { value: "Syrian Arab Republic", label: t("countries.Syrian Arab Republic") },
  { value: "Taiwan, Province of China", label: t("countries.Taiwan, Province of China") },
  { value: "Tajikistan", label: t("countries.Tajikistan") },
  { value: "Tanzania, United Republic of", label: t("countries.Tanzania, United Republic of") },
  { value: "Thailand", label: t("countries.Thailand") },
  { value: "Timor-Leste", label: t("countries.Timor-Leste") },
  { value: "Togo", label: t("countries.Togo") },
  { value: "Tokelau", label: t("countries.Tokelau") },
  { value: "Tonga", label: t("countries.Tonga") },
  { value: "Trinidad and Tobago", label: t("countries.Trinidad and Tobago") },
  { value: "Tunisia", label: t("countries.Tunisia") },
  { value: "Turkey", label: t("countries.Turkey") },
  { value: "Turkmenistan", label: t("countries.Turkmenistan") },
  { value: "Turks and Caicos Islands", label: t("countries.Turks and Caicos Islands") },
  { value: "Tuvalu", label: t("countries.Tuvalu") },
  { value: "Uganda", label: t("countries.Uganda") },
  { value: "Ukraine", label: t("countries.Ukraine") },
  { value: "United Arab Emirates", label: t("countries.United Arab Emirates") },
  { value: "United Kingdom", label: t("countries.United Kingdom") },
  { value: "United States", label: t("countries.United States") },
  { value: "United States Minor Outlying Islands", label: t("countries.United States Minor Outlying Islands") },
  { value: "Uruguay", label: t("countries.Uruguay") },
  { value: "Uzbekistan", label: t("countries.Uzbekistan") },
  { value: "Vanuatu", label: t("countries.Vanuatu") },
  { value: "Venezuela, Bolivarian Republic of", label: t("countries.Venezuela, Bolivarian Republic of") },
  { value: "Viet Nam", label: t("countries.Viet Nam") },
  { value: "Virgin Islands, British", label: t("countries.Virgin Islands, British") },
  { value: "Virgin Islands, U.S.", label: t("countries.Virgin Islands, U.S.") },
  { value: "Wallis and Futuna", label: t("countries.Wallis and Futuna") },
  { value: "Western Sahara", label: t("countries.Western Sahara") },
  { value: "Yemen", label: t("countries.Yemen") },
  { value: "Zambia", label: t("countries.Zambia") },
  { value: "Zimbabwe", label: t("countries.Zimbabwe") },
  ];
  const colourStyles = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
      padding: "12px 0 12px 35px",
      margin: "-16px 0 0 -45px",
      borderRadius: "0",
      outline: "none",
    }),
  };
  const handleCountryChange = (selectedOption) => {
    setCountry(selectedOption);
  };
  return (
    <React.Fragment>
      {selectedCountry && ( // Conditional rendering of the Select component
      <Select
      options={options}
      className="choices selectForm__inner"
      defaultValue={{
        label: t(`countries.${selectedCountry.label}`),  // Translate label
        value: t(`countries.${selectedCountry.value}`),  // Translate value
      }}
      onChange={handleCountryChange}
      styles={colourStyles}
    />
      )}
    </React.Fragment>
  );
};

export default CountryOptions;
