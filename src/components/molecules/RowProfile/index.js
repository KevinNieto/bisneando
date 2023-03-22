import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "../../atoms"
import { s } from "react-native-wind";


const RowProfile = ({ title, subtitle, isEdit, onChange, field }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={s`w-full max-w-xs px-2 mb-4`}>
      <View>
        <Text style={s`font-bold text-base`}>
          { title }
        </Text>
      </View>
      <View>
          {
          isEdit ? 
            
                <TextInput autoCapitalize="words" value={subtitle} onChange={(value) => onChange(field, value)}/>
                :
                <Text style={s`text-base`}>
                { subtitle }
              </Text>
        }

      </View>
    </View>
  );
};

export default RowProfile;
