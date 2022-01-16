import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react';
import { StyleSheet, TextInput, View, ImageBackground, Text, TouchableOpacity } from 'react-native';

export default function App() {

  const image = { uri: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm182-ploy-03.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=a8bb5f11efe83c7d5e9fd653af12c89b" };
  const [dp, setDp] = useState('');
  const [housePrice, setHousePrice] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [year, setYear] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const calculateLoan = () => {

    let dpPrice = dp/100 * housePrice;
    let amountBorrowed = housePrice - dpPrice;
    let iR = interestRate/100
    let discount = (Math.pow(1+iR,year) - 1)/
    (Math.pow(1 + iR, year)* iR)
    let yearlyPayment = amountBorrowed/discount
    let monthlyPayment = yearlyPayment/12
    setMonthlyPayment("RM " + monthlyPayment.toFixed(2) * (-1)+".")
    
  }

  return (
    <View style={styles.container}>
       <ImageBackground 
       source={image} resizeMode="cover" 
        style={styles.image}>
          <Text style={styles.headerText}>Property Loan Calculator</Text>
       <TextInput
        style={styles.input}
        onChangeText={(text)=>{setDp(text)}}
        value={dp}
        placeholder="Enter house price."
      />
       <TextInput
        style={styles.input}
        onChangeText={(text)=>{setHousePrice(text)}}
        value={housePrice}
        placeholder="Enter downpayment (%)."
      />
       <TextInput
        style={styles.input}
        onChangeText={(text)=>{setInterestRate(text)}}
        value={interestRate}
        placeholder="Enter interest rate."
      />
       <TextInput
        style={styles.input}
        onChangeText={(text)=>{setYear(text)}}
        value={year}
        placeholder="Enter loan year."
      />
      <TouchableOpacity
        style={styles.button}
        onPress={calculateLoan}>
        <Text>Calculate Loan</Text>
        </TouchableOpacity>
        <Text style={{margin:10}}>
          Your monthly payment is : {monthlyPayment}
        </Text>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText:{
    fontSize: 25,
    color:'black',
    margin:10,  
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  button: {
    alignItems: "center",
    backgroundColor: '#87CEEB',
    padding: 10
  },
});
