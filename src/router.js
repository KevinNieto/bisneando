import React from "react";
import {
  Router,
  Scene,
  Stack,
  Tabs,
  Modal,
  Drawer,
  Actions,
} from "react-native-router-flux";
import {  Root } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { DrawerContent } from "./components/organisms";
import { THEME } from "./styles";
import {

  AddEditCreditCardView,
  AddressView,
  CartView,
  ConfigView, 
  CouponsView, 
  DetailProduct, 
  FavoritesView, 
  HistoricalsView, 
  HomeView, 

  PaymentView, 

  SignInModal,

} from "./components/views";


const StackRouter = () => {
  return (
    <Router>
      <Modal hideNavBar>
        <Stack key="root">
          {/* <Scene key="placeholder" component={Placeholder} hideNavBar={true} /> */}
          {/* <Scene
            title=""
            key="signInModal"
            component={SignInModal}
            hideNavBar={true}
          />      */}
          <Drawer key="drawer" contentComponent={DrawerContent} hideNavBar>
            
            <Scene
              title="Configurations"
              key="configView"
              component={ConfigView}
              hideNavBar={true}
              icon={({ focused }) => (
                <Icon
                  size={25}
                  //color={focused ? THEME.primary : THEME.secondary}
                  name="md-home"
                  regular
                />
              )}
            />

          <Scene
            title="Favorites"
            key="favorites"
            component={FavoritesView}
            hideNavBar={true}
          />
          <Scene
            title="Coupons"
            key="coupons"
            component={CouponsView}
            hideNavBar={true}
          />
          <Scene
            title="Address"
            key="address"
            component={AddressView}
            hideNavBar={true}
          />
          <Scene
            title="Payment"
            key="payment"
           
            component={PaymentView}
            hideNavBar={true}
          />

          <Scene
            title="AddEditCreditCard"
            key="addEditCreditCard"
            initial={true}
            component={AddEditCreditCardView}
            hideNavBar={true}
          />
          <Scene
            title="DetailProduct"
            key="detailProduct"
            component={DetailProduct}
            hideNavBar={true}
          />

    
          <Scene
            title="Cart"
            key="cart"
            
            component={CartView}
            hideNavBar={true}
          />

            <Scene
              title="Historicals"
              key="historicalsView"
              component={HistoricalsView}
              hideNavBar={true}
              icon={({ focused }) => (
                <Icon
                  size={25}
                  color={focused ? THEME.primary : THEME.secondary}
                  name="md-home"
                  regular
                />
              )}
            />

        
            <Scene
              title="Bienvenido a Bisneando"
              key="home"
              component={HomeView}
             
              hideNavBar={true}
              icon={({ focused }) => (
                <Icon
                  size={25}
                  color={focused ? THEME.primary : THEME.secondary}
                  name="md-home"
                  regular
                />
              )}
            />



          </Drawer>
        </Stack>
    
      
      </Modal>
    </Router>
  );
};

export default (props) => (
  <Root>
    <StackRouter {...props} />
  </Root>
);
