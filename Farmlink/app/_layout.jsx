import { Stack } from "expo-router";
import { useEffect, useState } from "react";
export default function RootLayout() {
return (
  
  <Stack screenOptions={{headerShown:false}}>
     <Stack.Screen name="index"/>
    <Stack.Screen name="Home"/>
       <Stack.Screen name="verifiedSellers"/>
       <Stack.Screen name="recentOrder"/>
        <Stack.Screen name="market"/>
        <Stack.Screen name="Profile"/>
         <Stack.Screen name="Orders"/>
         <Stack.Screen name="buyersignup"/>
         <Stack.Screen name="buyerlogin"/>
         <Stack.Screen name="buyerinfo"/>
          <Stack.Screen name="farmersignup"/>
          <Stack.Screen name="farmerinfo"/>
           <Stack.Screen name="farmerlogin"/>
           <Stack.Screen name="farmersdashboard"/>
      

  </Stack>);
}
