import { atom,selector } from "recoil";
export const notifications=atom({
          key:"notifications",
          default:{
                    network:3,
                    jobs:4,
                    messaging:7,
                    notification:2

          }
})

export const totalnotificationselector=selector({
          key:"totalnotificationselector",
          get:({get})=>{
                    const allnotifications=get(notifications);
                    return allnotifications.jobs+allnotifications.messaging+allnotifications.network+allnotifications.notification
          }
})