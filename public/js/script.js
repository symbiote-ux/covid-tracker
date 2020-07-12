const data = { states: [ 'Maharashtra', 'Tamil Nadu', 'Delhi', 'Gujarat', 'Karnataka', 'Uttar Pradesh', 'Telangana', 'West Bengal', 'Andhra Pradesh', 'Rajasthan', 'Haryana', 'Madhya Pradesh', 'Bihar', 'Assam', 'Odisha', 'Jammu and Kashmir', 'Kerala', 'Punjab', 'Chhattisgarh', 'Jharkhand', 'Uttarakhand', 'Unknown*', 'Goa', 'Tripura', 'Manipur', 'Puducherry', 'Himachal Pradesh', 'Ladakh', 'Nagaland', 'Chandigarh', 'Arunachal Pradesh', 'Meghalaya', 'Daman and Diu', 'Mizoram', 'Dadra and Nagar Haveli', 'Andaman and Nicobar Islands', 'Sikkim', 'Lakshadweep', ], districts: [ 'Mumbai', 'Thane', 'Pune', 'Palghar', 'Raigad', 'Aurangabad', 'Nashik', 'Jalgaon', 'Solapur', 'Nagpur', 'Akola', 'Satara', 'Dhule', 'Kolhapur', 'Jalna', 'Ratnagiri', 'Ahmednagar', 'Amravati', 'Latur', 'Sangli', 'Nanded', 'Yavatmal', 'Buldhana', 'Osmanabad', 'Hingoli', 'Nandurbar', 'Sindhudurg', 'Beed', 'Gondia', 'Parbhani', 'Other States', 'Washim', 'Chandrapur', 'Bhandara', 'Gadchiroli', 'Wardha', 'Mumbai Suburban', 'Chennai', 'Chengalpattu', 'Tiruvallur', 'Madurai', 'Kancheepuram', 'Tiruvannamalai', 'Vellore', 'Thoothukudi', 'Virudhunagar', 'Salem', 'Ramanathapuram', 'Kallakurichi', 'Tirunelveli', 'Theni', 'Cuddalore', 'Ranipet', 'Tiruchirappalli', 'Viluppuram', 'Kanniyakumari', 'Coimbatore', 'Airport Quarantine', 'Sivaganga', 'Dindigul', 'Tiruvarur', 'Thanjavur', 'Tenkasi', 'Pudukkottai', 'Ariyalur', 'Railway Quarantine', 'Thirupathur', 'Erode', 'Nagapattinam', 'Tiruppur', 'Krishnagiri', 'Dharmapuri', 'Karur', 'Nilgiris', 'Perambalur', 'Namakkal', 'Unknown', 'Central Delhi', 'South East Delhi', 'West Delhi', 'South Delhi', 'North Delhi', 'Shahdara', 'South West Delhi', 'East Delhi', 'New Delhi', 'North West Delhi', 'North East Delhi', 'Ahmedabad', 'Surat', 'Vadodara', 'Gandhinagar', 'Rajkot', 'Bhavnagar', 'Mehsana', 'Bharuch', 'Jamnagar', 'Valsad', 'Banaskantha', 'Junagadh', 'Kheda', 'Anand', 'Surendranagar', 'Patan', 'Navsari', 'Aravalli', 'Sabarkantha', 'Panchmahal', 'Kutch', 'Mahisagar', 'Amreli', 'Dahod', 'Gir Somnath', 'Botad', 'Narmada', 'Morbi', 'Other States', 'Chhota Udaipur', 'Tapi', 'Devbhumi Dwarka', 'Porbandar', 'Dang', 'Bengaluru Urban', 'Dakshina Kannada', 'Kalaburagi', 'Ballari', 'Udupi', 'Yadgir', 'Dharwad', 'Bidar', 'Mysuru', 'Vijayapura', 'Raichur', 'Mandya', 'Hassan', 'Uttara Kannada', 'Davanagere', 'Belagavi', 'Shivamogga', 'Tumakuru', 'Chikkaballapura', 'Bagalkote', 'Ramanagara', 'Bengaluru Rural', 'Gadag', 'Haveri', 'Kolar', 'Koppal', 'Chamarajanagara', 'Kodagu', 'Chikkamagaluru', 'Chitradurga', 'Other States', 'Unknown', 'Gautam Buddha Nagar', 'Ghaziabad', 'Lucknow', 'Kanpur Nagar', 'Meerut', 'Agra', 'Hapur', 'Bulandshahr', 'Varanasi', 'Aligarh', 'Moradabad', 'Jaunpur', 'Barabanki', 'Gorakhpur', 'Prayagraj', 'Bareilly', 'Firozabad', 'Saharanpur', 'Jhansi', 'Mathura', 'Sambhal', 'Ayodhya', 'Baghpat', 'Rampur', 'Basti', 'Muzaffarnagar', 'Bijnor', 'Ghazipur', 'Ballia', 'Etawah', 'Sant Kabir Nagar', 'Azamgarh', 'Deoria', 'Kannauj', 'Amethi', 'Unnao', 'Siddharthnagar', 'Hardoi', 'Mainpuri', 'Mau', 'Maharajganj', 'Chandauli', 'Farrukhabad', 'Mirzapur', 'Sultanpur', 'Kushinagar', 'Amroha', 'Gonda', 'Bhadohi', 'Fatehpur', 'Jalaun', 'Hathras', 'Budaun', 'Shamli', 'Pilibhit', 'Rae Bareli', 'Shahjahanpur', 'Kasganj', 'Bahraich', 'Etah', 'Kaushambi', 'Lakhimpur Kheri', 'Ambedkar Nagar', 'Pratapgarh', 'Auraiya', 'Balrampur', 'Hamirpur', 'Chitrakoot', 'Sitapur', 'Shrawasti', 'Kanpur Dehat', 'Sonbhadra', 'Mahoba', 'Banda', 'Lalitpur', 'Hyderabad', 'Ranga Reddy', 'Medchal Malkajgiri', 'Unknown', 'Sangareddy', 'Other States', 'Warangal Urban', 'Karimnagar', 'Nalgonda', 'Nizamabad', 'Mahabubnagar', 'Suryapet', 'Warangal Rural', 'Medak', 'Khammam', 'Mancherial', 'Jangaon', 'Rajanna Sircilla', 'Kamareddy', 'Vikarabad', 'Adilabad', 'Bhadradri Kothagudem', 'Jogulamba Gadwal', 'Mahabubabad', 'Siddipet', 'Jagtial', 'Peddapalli', 'Nirmal', 'Yadadri Bhuvanagiri', 'Mulugu', 'Foreign Evacuees', 'Nagarkurnool', 'Wanaparthy', 'Komaram Bheem', 'Jayashankar Bhupalapally', 'Narayanpet', 'Kolkata', 'North 24 Parganas', 'Howrah', 'South 24 Parganas', 'Hooghly', 'Malda', 'Darjeeling', 'Jalpaiguri', 'Purba Medinipur', 'Paschim Medinipur', 'Uttar Dinajpur', 'Nadia', 'Murshidabad', 'Cooch Behar', 'Birbhum', 'Dakshin Dinajpur', 'Bankura', 'Purba Bardhaman', 'Paschim Bardhaman', 'Alipurduar', 'Purulia', 'Other States', 'Kalimpong', 'Jhargram', 'Kurnool', 'Anantapur', 'Guntur', 'Chittoor', 'East Godavari', 'Krishna', 'Other States', 'Kadapa', 'West Godavari', 'Visakhapatnam', 'Prakasam', 'Nellore', 'Srikakulam', 'Vizianagaram', 'Foreign Evacuees', 'Jaipur', 'Jodhpur', 'Bharatpur', 'Pali', 'Alwar', 'Nagaur', 'Udaipur', 'Bikaner', 'Dholpur', 'Kota', 'Ajmer', 'Sikar', 'Barmer', 'Sirohi', 'Jalore', 'Dungarpur', 'Jhunjhunu', 'Jhalawar', 'Churu', 'Rajsamand', 'Bhilwara', 'Chittorgarh', 'Tonk', 'Dausa', 'Other States', 'Pratapgarh', 'Karauli', 'Hanumangarh', 'Sawai Madhopur', 'Jaisalmer', 'Banswara', 'Baran', 'Ganganagar', 'Evacuees', 'BSF Camp', 'Bundi', 'Italians', 'Gurugram', 'Faridabad', 'Sonipat', 'Rohtak', 'Bhiwani', 'Rewari', 'Karnal', 'Ambala', 'Palwal', 'Jhajjar', 'Hisar', 'Mahendragarh', 'Panipat', 'Nuh', 'Sirsa', 'Kurukshetra', 'Jind', 'Fatehabad', 'Panchkula', 'Kaithal', 'Yamunanagar', 'Charkhi Dadri', 'Foreign Evacuees', 'Italians', 'Indore', 'Bhopal', 'Morena', 'Gwalior', 'Ujjain', 'Jabalpur', 'Neemuch', 'Sagar', 'Burhanpur', 'Khandwa', 'Khargone', 'Bhind', 'Dewas', 'Ratlam', 'Dhar', 'Mandsaur', 'Barwani', 'Shivpuri', 'Raisen', 'Rajgarh', 'Tikamgarh', 'Shajapur', 'Sheopur', 'Betul', 'Vidisha', 'Chhindwara', 'Rewa', 'Chhatarpur', 'Harda', 'Datia', 'Ashoknagar', 'Panna', 'Damoh', 'Hoshangabad', 'Balaghat', 'Satna', 'Jhabua', 'Sehore', 'Narsinghpur', 'Anuppur', 'Dindori', 'Katni', 'Guna', 'Singrauli', 'Shahdol', 'Sidhi', 'Agar Malwa', 'Umaria', 'Seoni', 'Alirajpur', 'Niwari', 'Mandla', 'Other Region', 'Patna', 'Bhagalpur', 'Begusarai', 'Muzaffarpur', 'Siwan', 'Madhubani', 'Munger', 'Nawada', 'Nalanda', 'Katihar', 'Samastipur', 'Gopalganj', 'Rohtas', 'Khagaria', 'Gaya', 'Darbhanga', 'West Champaran', 'Saran', 'Vaishali', 'Purnia', 'Supaul', 'Bhojpur', 'East Champaran', 'Jehanabad', 'Aurangabad', 'Buxar', 'Saharsa', 'Banka', 'Madhepura', 'Kishanganj', 'Kaimur', 'Lakhisarai', 'Sheikhpura', 'Sitamarhi', 'Araria', 'Jamui', 'Arwal', 'Sheohar', 'Kamrup Metropolitan', 'Unknown', 'Dhubri', 'Nagaon', 'Golaghat', 'Hojai', 'Udalguri', 'Kamrup', 'Barpeta', 'Jorhat', 'Sonitpur', 'Tinsukia', 'Karimganj', 'Darrang', 'Cachar', 'Dhemaji', 'Dima Hasao', 'Kokrajhar', 'Baksa', 'Lakhimpur', 'Hailakandi', 'Dibrugarh', 'Biswanath', 'Goalpara', 'Chirang', 'Morigaon', 'Karbi Anglong', 'Sivasagar', 'Nalbari', 'West Karbi Anglong', 'Bongaigaon', 'Majuli', 'Charaideo', 'South Salmara Mankachar', 'Airport Quarantine', 'Other States', 'Ganjam', 'Cuttack', 'Jajapur', 'Bhubaneswar', 'Sundargarh', 'Gajapati', 'Khordha', 'Baleswar', 'Jagatsinghpur', 'Puri', 'Mayurbhanj', 'Kendrapara', 'Keonjhar', 'Bhadrak', 'Nayagarh', 'Bolangir', 'Kandhamal', 'Bargarh', 'Malkangiri', 'Jharsuguda', 'Rayagada', 'Koraput', 'Angul', 'Sambalpur', 'Dhenkanal', 'Nabarangpur', 'Nuapada', 'Kalahandi', 'Deogarh', 'Boudh', 'Subarnapur', 'Srinagar', 'Baramulla', 'Kulgam', 'Shopiyan', 'Anantnag', 'Kupwara', 'Pulwama', 'Budgam', 'Jammu', 'Bandipora', 'Udhampur', 'Kathua', 'Rajouri', 'Ramban', 'Samba', 'Ganderbal', 'Punch', 'Doda', 'Reasi', 'Kishtwar', 'Mirpur', 'Muzaffarabad', 'Malappuram', 'Palakkad', 'Thiruvananthapuram', 'Kannur', 'Alappuzha', 'Kasaragod', 'Thrissur', 'Pathanamthitta', 'Ernakulam', 'Kollam', 'Kozhikode', 'Kottayam', 'Idukki', 'Wayanad', 'Other States', 'Ludhiana', 'Jalandhar', 'Amritsar', 'Sangrur', 'Patiala', 'S.A.S. Nagar', 'Gurdaspur', 'Pathankot', 'Tarn Taran', 'S.B.S. Nagar', 'Hoshiarpur', 'Firozpur', 'Faridkot', 'Fatehgarh Sahib', 'Muktsar', 'Moga', 'Bathinda', 'Kapurthala', 'Rupnagar', 'Fazilka', 'Barnala', 'Mansa', 'Raipur', 'Korba', 'Rajnandgaon', 'Bilaspur', 'Baloda Bazar', 'Janjgir Champa', 'Jashpur', 'Durg', 'Balrampur', 'Raigarh', 'Mungeli', 'Kabeerdham', 'Narayanpur', 'Mahasamund', 'Surguja', 'Bametara', 'Uttar Bastar Kanker', 'Koriya', 'Bastar', 'Balod', 'Dakshin Bastar Dantewada', 'Gariaband', 'Surajpur', 'Bijapur', 'Dhamtari', 'Sukma', 'Kondagaon', 'Other States', 'Gaurela Pendra Marwahi', 'East Singhbhum', 'Ranchi', 'Simdega', 'Dhanbad', 'Koderma', 'Hazaribagh', 'Ramgarh', 'Garhwa', 'Gumla', 'Giridih', 'Saraikela-Kharsawan', 'Chatra', 'Lohardaga', 'West Singhbhum', 'Palamu', 'Bokaro', 'Latehar', 'Pakur', 'Deoghar', 'Sahibganj', 'Khunti', 'Jamtara', 'Godda', 'Dumka', 'Dehradun', 'Nainital', 'Udham Singh Nagar', 'Tehri Garhwal', 'Haridwar', 'Almora', 'Pauri Garhwal', 'Bageshwar', 'Uttarkashi', 'Chamoli', 'Champawat', 'Pithoragarh', 'Rudraprayag', 'South Goa', 'Unknown', 'North Goa', 'Other States', 'Sipahijala', 'West Tripura', 'Gomati', 'Dhalai', 'Khowai', 'South Tripura', 'Unokoti', 'North Tripura', 'Ukhrul', 'Tamenglong', 'Senapati', 'Kangpokpi', 'Churachandpur', 'Kamjong', 'Imphal West', 'Kakching', 'Bishnupur', 'Thoubal', 'Jiribam', 'Imphal East', 'Chandel', 'Pherzawl', 'Noney', 'Tengnoupal', 'Unknown', 'Puducherry', 'Karaikal', 'Yanam', 'Mahe', 'Kangra', 'Hamirpur', 'Solan', 'Una', 'Chamba', 'Shimla', 'Bilaspur', 'Sirmaur', 'Mandi', 'Kinnaur', 'Kullu', 'Lahaul and Spiti', 'Kargil', 'Leh', 'Peren', 'Dimapur', 'Mon', 'Kohima', 'Tuensang', 'Others', 'Phek', 'Wokha', 'Zunheboto', 'Kiphire', 'Mokokchung', 'Longleng', 'Unknown', 'Chandigarh', 'Papum Pare', 'Changlang', 'West Kameng', 'Namsai', 'Lower Subansiri', 'East Siang', 'Tirap', 'Anjaw', 'Lohit', 'Longding', 'Lepa Rada', 'Lower Dibang Valley', 'Lower Siang', 'West Siang', 'Pakke Kessang', 'Tawang', 'Upper Siang', 'Upper Subansiri', 'East Kameng', 'Kamle', 'Kra Daadi', 'Kurung Kumey', 'Shi Yomi', 'Siang', 'Upper Dibang Valley', 'East Khasi Hills', 'Unknown', 'Ribhoi', 'West Garo Hills', 'South West Garo Hills', 'West Jaintia Hills', 'East Jaintia Hills', 'North Garo Hills', 'West Khasi Hills', 'East Garo Hills', 'South Garo Hills', 'South West Khasi Hills', 'Aizawl', 'Lunglei', 'Saiha', 'Mamit', 'Kolasib', 'Lawngtlai', 'Champhai', 'Serchhip', 'Khawzawl', 'Saitual', 'Hnahthial', 'Dadra and Nagar Haveli', 'Unknown', 'South Andaman', 'North and Middle Andaman', 'Nicobars', 'East Sikkim', 'South Sikkim', 'West Sikkim', 'North Sikkim', ], };

const createSelectOption = (content) => {
  const locNameOption = document.getElementById('locNameOption');
  locNameOption.innerHTML = '';
  const box = document.createElement('select');
  box.setAttribute('id', 'locName');
  locNameOption.appendChild(box);
  content.forEach((info) => {
    const option = document.createElement('option');
    option.setAttribute('value', info);
    const text = document.createTextNode(info);
    option.appendChild(text);
    document.getElementById('locName').appendChild(option);
  });
};


const createField = () => {
  const location = document.querySelector('#loc').value;
  if (location === 'district') {
    createSelectOption(data.districts.sort());
  } else {
    createSelectOption(data.states.sort());
  }
};

window.onload = createField;

