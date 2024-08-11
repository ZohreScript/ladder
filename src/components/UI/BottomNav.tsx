"use client"
import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import Badge from "@mui/material/Badge";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import NotificationsIcon from '@mui/icons-material/Notifications';

const BottomNav: React.FC = () => {
  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push("/home");
        break;
      case 1:
        router.push("/gemini");
        break;
      case 2:
        router.push("/ladder");
        break;
      case 3:
        router.push("/notification");
        break;
      default:
        break;
    }
  };


  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => handleNavigation(newValue)}
      >
        <BottomNavigationAction
        
          label="Home"
          icon={
            <Box     sx={{
              bgcolor: value === 0 ? '#D5E8CF' : 'transparent',
              borderRadius: value === 0 ? '40%' : '0%',
              paddingX: value === 0 ? '20px' : '0',
              paddingY: value === 0 ? '4px' : '0',
            }}
            >
               {value  === 0 ?  <HomeIcon /> :  <HomeOutlinedIcon /> }
            </Box>
          }
         
        />
        <BottomNavigationAction
          label="Gemini"
          icon={
            <Box   sx={{
              bgcolor: value === 1 ? '#D5E8CF' : 'transparent',
              borderRadius: value === 1 ? '40%' : '0%',
              paddingX: value === 1 ? '20px' : '0',
              paddingY: value === 1 ? '4px' : '0',
            }} >
               {value  === 1 ?  <GiminiIcon /> :  <GiminiOutlineIcon  /> }
             
            </Box>
          }
        />
        <BottomNavigationAction
          label="Ladder"
          icon={
            <Box    sx={{
              bgcolor: value === 2 ? '#D5E8CF' : 'transparent',
              borderRadius: value === 2 ? '40%' : '0%',
              paddingX: value === 2 ? '20px' : '0',
              paddingY: value === 2 ? '4px' : '0',
            }} >
              
              {value  === 2 ?  <LadderIcon /> : <LadderOutlineIcon /> }
            </Box>
          }
        />
        <BottomNavigationAction
          label="Notifications"
          icon={
            <Badge
              color="primary"
              badgeContent={0}
              showZero
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Box  sx={{
                  bgcolor: value === 3 ? '#D5E8CF' : 'transparent',
                  borderRadius: value === 3 ? '40%' : '0%',
                  paddingX: value === 3 ? '20px' : '0',
                  paddingY: value === 3 ? '4px' : '0',
                }} >
              {value  === 3 ?   
                <NotificationsIcon color="secondary"/> : <NotificationsOutlinedIcon color="secondary" /> }
              
              </Box>


            </Badge>
          }
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNav;


export const HomeOutlinedIcon:React.FC=()=>(
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3103 8.18875L10.8103 0.688748C10.529 0.407656 10.1477 0.249756 9.75001 0.249756C9.35236 0.249756 8.97097 0.407656 8.6897 0.688748L1.1897 8.18875C1.04973 8.32767 0.938783 8.49304 0.8633 8.67523C0.787817 8.85742 0.749308 9.05279 0.750009 9.25V18.25C0.750009 18.4489 0.829027 18.6397 0.969679 18.7803C1.11033 18.921 1.3011 19 1.50001 19H7.50001C7.69892 19 7.88969 18.921 8.03034 18.7803C8.17099 18.6397 8.25001 18.4489 8.25001 18.25V13H11.25V18.25C11.25 18.4489 11.329 18.6397 11.4697 18.7803C11.6103 18.921 11.8011 19 12 19H18C18.1989 19 18.3897 18.921 18.5303 18.7803C18.671 18.6397 18.75 18.4489 18.75 18.25V9.25C18.7507 9.05279 18.7122 8.85742 18.6367 8.67523C18.5612 8.49304 18.4503 8.32767 18.3103 8.18875ZM17.25 17.5H12.75V12.25C12.75 12.0511 12.671 11.8603 12.5303 11.7197C12.3897 11.579 12.1989 11.5 12 11.5H7.50001C7.3011 11.5 7.11033 11.579 6.96968 11.7197C6.82903 11.8603 6.75001 12.0511 6.75001 12.25V17.5H2.25001V9.25L9.75001 1.75L17.25 9.25V17.5Z" fill="#424940"/>
</svg>

);
export const HomeIcon:React.FC=()=>(
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 9.25004V18.25C18.75 18.449 18.671 18.6397 18.5303 18.7804C18.3897 18.921 18.1989 19 18 19H12.75C12.5511 19 12.3603 18.921 12.2197 18.7804C12.079 18.6397 12 18.449 12 18.25V13.375C12 13.2756 11.9605 13.1802 11.8902 13.1099C11.8198 13.0395 11.7245 13 11.625 13H7.875C7.77554 13 7.68016 13.0395 7.60983 13.1099C7.53951 13.1802 7.5 13.2756 7.5 13.375V18.25C7.5 18.449 7.42098 18.6397 7.28033 18.7804C7.13968 18.921 6.94891 19 6.75 19H1.5C1.30109 19 1.11032 18.921 0.96967 18.7804C0.829018 18.6397 0.75 18.449 0.75 18.25V9.25004C0.750184 8.85228 0.90834 8.47089 1.18969 8.18973L8.68969 0.689725C8.97096 0.408633 9.35235 0.250732 9.75 0.250732C10.1477 0.250732 10.529 0.408633 10.8103 0.689725L18.3103 8.18973C18.5917 8.47089 18.7498 8.85228 18.75 9.25004Z" fill="#181D17"/>
</svg>
);

export const LadderOutlineIcon: React.FC = () => (

   <svg
   width="25"
   height="24"
   viewBox="0 0 25 24"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
 >
   <path
     d="M18.75 2.25C18.5511 2.25 18.3603 2.32902 18.2197 2.46967C18.079 2.61032 18 2.80109 18 3V6H7.5V3C7.5 2.80109 7.42098 2.61032 7.28033 2.46967C7.13968 2.32902 6.94891 2.25 6.75 2.25C6.55109 2.25 6.36032 2.32902 6.21967 2.46967C6.07902 2.61032 6 2.80109 6 3V21C6 21.1989 6.07902 21.3897 6.21967 21.5303C6.36032 21.671 6.55109 21.75 6.75 21.75C6.94891 21.75 7.13968 21.671 7.28033 21.5303C7.42098 21.3897 7.5 21.1989 7.5 21V18H18V21C18 21.1989 18.079 21.3897 18.2197 21.5303C18.3603 21.671 18.5511 21.75 18.75 21.75C18.9489 21.75 19.1397 21.671 19.2803 21.5303C19.421 21.3897 19.5 21.1989 19.5 21V3C19.5 2.80109 19.421 2.61032 19.2803 2.46967C19.1397 2.32902 18.9489 2.25 18.75 2.25ZM18 7.5V11.25H7.5V7.5H18ZM7.5 16.5V12.75H18V16.5H7.5Z"
     fill="#424940"
   />
 </svg>
);
export const LadderIcon: React.FC = () => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.75 2.25C18.5511 2.25 18.3603 2.32902 18.2197 2.46967C18.079 2.61032 18 2.80109 18 3V3.75H7.5V3C7.5 2.80109 7.42098 2.61032 7.28033 2.46967C7.13968 2.32902 6.94891 2.25 6.75 2.25C6.55109 2.25 6.36032 2.32902 6.21967 2.46967C6.07902 2.61032 6 2.80109 6 3V21C6 21.1989 6.07902 21.3897 6.21967 21.5303C6.36032 21.671 6.55109 21.75 6.75 21.75C6.94891 21.75 7.13968 21.671 7.28033 21.5303C7.42098 21.3897 7.5 21.1989 7.5 21V20.25H18V21C18 21.1989 18.079 21.3897 18.2197 21.5303C18.3603 21.671 18.5511 21.75 18.75 21.75C18.9489 21.75 19.1397 21.671 19.2803 21.5303C19.421 21.3897 19.5 21.1989 19.5 21V3C19.5 2.80109 19.421 2.61032 19.2803 2.46967C19.1397 2.32902 18.9489 2.25 18.75 2.25ZM17.25 17.25H8.25C8.05109 17.25 7.86032 17.171 7.71967 17.0303C7.57902 16.8897 7.5 16.6989 7.5 16.5C7.5 16.3011 7.57902 16.1103 7.71967 15.9697C7.86032 15.829 8.05109 15.75 8.25 15.75H17.25C17.4489 15.75 17.6397 15.829 17.7803 15.9697C17.921 16.1103 18 16.3011 18 16.5C18 16.6989 17.921 16.8897 17.7803 17.0303C17.6397 17.171 17.4489 17.25 17.25 17.25ZM17.25 12.75H8.25C8.05109 12.75 7.86032 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86032 11.329 8.05109 11.25 8.25 11.25H17.25C17.4489 11.25 17.6397 11.329 17.7803 11.4697C17.921 11.6103 18 11.8011 18 12C18 12.1989 17.921 12.3897 17.7803 12.5303C17.6397 12.671 17.4489 12.75 17.25 12.75ZM17.25 8.25H8.25C8.05109 8.25 7.86032 8.17098 7.71967 8.03033C7.57902 7.88968 7.5 7.69891 7.5 7.5C7.5 7.30109 7.57902 7.11032 7.71967 6.96967C7.86032 6.82902 8.05109 6.75 8.25 6.75H17.25C17.4489 6.75 17.6397 6.82902 17.7803 6.96967C17.921 7.11032 18 7.30109 18 7.5C18 7.69891 17.921 7.88968 17.7803 8.03033C17.6397 8.17098 17.4489 8.25 17.25 8.25Z" fill="#181D17"/>
  </svg>
);

export const GiminiIcon: React.FC = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.625 18.8438C10.125 19.9844 10.375 21.2031 10.375 22.5C10.375 21.2031 10.6172 19.9844 11.1016 18.8438C11.6016 17.7031 12.2734 16.7109 13.1172 15.8672C13.9609 15.0234 14.9531 14.3594 16.0938 13.875C17.2344 13.375 18.4531 13.125 19.75 13.125C18.4531 13.125 17.2344 12.8828 16.0938 12.3984C14.9836 11.9198 13.9738 11.2359 13.1172 10.3828C12.2641 9.52625 11.5802 8.5164 11.1016 7.40625C10.6172 6.26562 10.375 5.04688 10.375 3.75C10.375 5.04688 10.125 6.26562 9.625 7.40625C9.14062 8.54688 8.47656 9.53906 7.63281 10.3828C6.77625 11.2359 5.7664 11.9198 4.65625 12.3984C3.51562 12.8828 2.29688 13.125 1 13.125C2.29688 13.125 3.51562 13.375 4.65625 13.875C5.79688 14.3594 6.78906 15.0234 7.63281 15.8672C8.47656 16.7109 9.14062 17.7031 9.625 18.8438Z"
      fill="#181D17"
    />
    <path
      d="M18.235 8.745C18.495 9.2925 18.625 9.8775 18.625 10.5C18.625 9.8775 18.7509 9.2925 19.0028 8.745C19.2628 8.1975 19.6122 7.72125 20.0509 7.31625C20.4897 6.91125 21.0056 6.5925 21.5988 6.36C22.1919 6.12 22.8256 6 23.5 6C22.8256 6 22.1919 5.88375 21.5988 5.65125C21.0215 5.4215 20.4964 5.09325 20.0509 4.68375C19.6073 4.2726 19.2517 3.78787 19.0028 3.255C18.7509 2.7075 18.625 2.1225 18.625 1.5C18.625 2.1225 18.495 2.7075 18.235 3.255C17.9831 3.8025 17.6378 4.27875 17.1991 4.68375C16.7536 5.09325 16.2285 5.4215 15.6512 5.65125C15.0581 5.88375 14.4244 6 13.75 6C14.4244 6 15.0581 6.12 15.6512 6.36C16.2444 6.5925 16.7603 6.91125 17.1991 7.31625C17.6378 7.72125 17.9831 8.1975 18.235 8.745Z"
      fill="#181D17"
    />
  </svg>
);
export const GiminiOutlineIcon: React.FC = () => (
<svg width="65" height="32" viewBox="0 0 65 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38.5122 17.4035C38.5122 19.6055 37.8556 21.3597 36.5421 22.6661C35.0666 24.222 33.1261 25 30.7208 25C28.4189 25 26.471 24.2074 24.8773 22.6221C23.2836 21.0366 22.4868 19.0844 22.4868 16.7652C22.4868 14.4459 23.2836 12.4935 24.8773 10.9083C26.471 9.32279 28.4188 8.53027 30.721 8.53027C31.8867 8.53027 32.986 8.73571 34.0189 9.14672C34.9062 9.49976 35.6574 9.97738 36.2724 10.5795C36.4423 10.7458 36.4327 11.0172 36.2641 11.1849L35.4516 11.9931C35.2647 12.179 34.9596 12.1627 34.7703 11.9792C34.3393 11.5613 33.8195 11.2227 33.2111 10.9633C32.4364 10.6329 31.6063 10.4678 30.7208 10.4678C28.9945 10.4678 27.5336 11.0624 26.3383 12.2514C25.1579 13.4551 24.5676 14.9597 24.5676 16.7652C24.5676 18.5706 25.1579 20.0753 26.3383 21.2789C27.5336 22.4679 28.9945 23.0624 30.721 23.0624C32.2998 23.0624 33.6133 22.6219 34.6609 21.7413C35.686 20.8796 36.2873 19.7016 36.4647 18.2074C36.471 18.1545 36.4294 18.1082 36.3762 18.1082H31.1694C30.9217 18.1082 30.721 17.9074 30.721 17.6597V16.663C30.721 16.4154 30.9217 16.2146 31.1694 16.2146H38.0264C38.2436 16.2146 38.4311 16.3699 38.4586 16.5853C38.4943 16.8652 38.5122 17.1379 38.5122 17.4035Z" fill="#424940"/>
<path d="M40.6139 16.1051C40.348 14.3494 38.97 12.9715 37.2144 12.7055C38.97 12.4394 40.348 11.0615 40.6139 9.30591C40.88 11.0615 42.2579 12.4394 44.0135 12.7055C42.2579 12.9715 40.88 14.3494 40.6139 16.1051Z" fill="#424940"/>
</svg>

);
