import { StackActions } from "@react-navigation/native";

const ProfilStack = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Profil"
            component={UserInfo}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="EditProfil"
            component={EditProfilScreen}
            options={{
                headerTitle: 'Edit Profil',
                headerBAckTitleVisible: false,
                headerTitleAlign: 'center',
                headerStyle:{
                    backgroundColor: '#fff',
                    shadowColor: '#fff',
                    elevation: 0,
                },
            }}
        />
    </Stack.Navigator>
);