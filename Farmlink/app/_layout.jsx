import { Stack } from "expo-router";
import { useEffect, useState } from "react";


export default function RootLayout() {

 
return (


  
  <Stack screenOptions={{headerShown:false}}>
   
    <Stack.Screen name="Home"/>
    <Stack.Screen name="onboarding.jsx"/>
       <Stack.Screen name="verifiedSellers"/>
       <Stack.Screen name="recentOrder"/>
        <Stack.Screen name="market"/>
        <Stack.Screen name="buyerprofile"/>
         <Stack.Screen name="Orders"/>
         <Stack.Screen name="buyersignup"/>
         <Stack.Screen name="buyerlogin"/>
         <Stack.Screen name="buyerinfo"/>
          <Stack.Screen name="farmersignup"/>
          <Stack.Screen name="farmerinfo"/>
           <Stack.Screen name="farmerlogin"/>
           <Stack.Screen name="farmersdashboard"/>
           <Stack.Screen name="farmerprofile"/>

  </Stack>);
}
