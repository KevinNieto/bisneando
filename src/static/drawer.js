import { Actions } from "react-native-router-flux";
// import { Alert } from "react-native";
// import { getUid } from "./../commons/user";
// import auth from "@react-native-firebase/auth";
// import { showAlert } from "./../commons/notifications";
import { THEME } from "../styles";

export const openViewWithAuth = (openView) => {
  
  
  // if (getUid()) {
  //   openView();
  // } else {
  //   Actions.signInModal({
  //     callback: () => {
  //       openView();
  //     },
  //     currentScene: Actions.currentScene,
  //   });
  // }
};

// const closeSesion = () => {
//   Alert.alert(
//     "Confirmar",
//     "¿Desea cerrar sesión?",
//     [
//       {
//         text: "Cancelar",
//       },
//       {
//         text: "Aceptar",
//         onPress: async () => {
//           await auth().signOut();
//           Actions.replace("signInModal");
//         },
//       },
//     ],
//     { cancelable: false }
//   );
// };

const getMenuDrawer = () => {
  return [
    {
      key: "menu-item-0",
      title: "Inicio",
      role: "all",
      icon: "home",
      color: THEME.bisneando.gray,
      event: () => {
        Actions.home();
      },
    },

    {
      key: "menu-item-1",
      title: "Mis Favoritos",
      role: "all",
      icon: "heart",
      color: THEME.bisneando.gray,
      event: () => {
        Actions.favorites();
      },
      // uid: getUid(),
    },
    {
      key: "menu-item-2",
      title: "Mis Tarjetas",
      role: "all",
      icon: "card-bulleted",
      color: THEME.bisneando.gray,
      event: () => {
        Actions.payment();
      },
      // uid: getUid(),
    },
    {
      key: "menu-item-3",
      title: "Mis Cupones",
      role: "all",
      icon: "tag",
      color: THEME.bisneando.gray,
      event: () => {
        Actions.coupons();
      },
      // uid: getUid(),
    },
    {
      key: "menu-item-4",
      title: "Historial",
      role: "all",
      icon: "history",
      color: THEME.bisneando.gray,
      event: () => {
        Actions.historicalsView();
      },
    },
    // {
    //   key: "menu-item-3",
    //   title: "alls",
    //   role: "company",
    //   icon: "card-account-details-outline",
    //   color: THEME.bisneando.gray,
    //   event: () => {
    //     Actions.allsView();
    //   },
    // },
    {
      key: "menu-item-5",
      title: "Mis Direcciones",
      role: "all",
      icon: "pin",
      color: THEME.bisneando.gray,
      event: () => {
        Actions.address();
      },
    },
    {
      key: "menu-item-6",
      title: "Mi perfil",
      role: "all",
      icon: "human-greeting",
      color: THEME.bisneando.gray,
      event: () => {
        Actions.configView();
      },
    },
    
  
  ];
};

export { getMenuDrawer };
